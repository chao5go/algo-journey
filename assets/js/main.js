// ===== MAIN JAVASCRIPT FILE =====

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeStats();
});

// ===== NAVIGATION =====
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
        });
    }

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');

                // Reset hamburger menu
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    });

    // Active link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;

        // Add background to navbar on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '';
            navbar.style.backdropFilter = '';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.category-card, .recent-card, .stat-card, .problem-section'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Number counting animation for stats
    animateNumbers();
}

function animateNumbers() {
    const numberElements = document.querySelectorAll('.stat-number, .stat-count');

    numberElements.forEach(element => {
        const finalNumber = parseInt(element.textContent);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = finalNumber / steps;
        let currentNumber = 0;

        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                element.textContent = finalNumber;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(currentNumber);
            }
        }, duration / steps);
    });
}

// ===== STATISTICS =====
function initializeStats() {
    loadStatistics();
    loadCategories();
    loadRecentProblems();
}

async function loadStatistics() {
    try {
        // Try different possible paths
        const baseUrl = window.location.pathname.includes('/algo-journey') ? '/algo-journey' : '';
        const response = await fetch(`${baseUrl}/assets/data/statistics.json`);
        const stats = await response.json();
        updateStatistics(stats);
    } catch (error) {
        console.error('Error loading statistics:', error);
        // Use default values if data loading fails
        updateStatistics({
            totalProblems: 0,
            totalCategories: 0,
            recentUpdates: 0,
            linesOfCode: 0,
            solvingDays: 0,
            streakDays: 0,
            difficultyDistribution: {
                easy: 0,
                medium: 0,
                hard: 0
            }
        });
    }
}

function updateStatistics(stats) {
    updateElement('total-problems', stats.totalProblems);
    updateElement('total-categories', stats.totalCategories);
    updateElement('recent-updates', stats.recentUpdates);
    updateElement('lines-of-code', stats.linesOfCode);
    updateElement('solving-days', stats.solvingDays);
    updateElement('streak-days', stats.streakDays);

    updateDifficultyChart(stats.difficultyDistribution);
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function updateDifficultyChart(distribution) {
    const total = distribution.easy + distribution.medium + distribution.hard;
    if (total === 0) return;

    const easyPercent = (distribution.easy / total) * 100;
    const mediumPercent = (distribution.medium / total) * 100;
    const hardPercent = (distribution.hard / total) * 100;

    const easyBar = document.querySelector('.difficulty-bar.easy');
    const mediumBar = document.querySelector('.difficulty-bar.medium');
    const hardBar = document.querySelector('.difficulty-bar.hard');

    if (easyBar) {
        easyBar.style.width = `${easyPercent}%`;
        easyBar.title = `简单: ${distribution.easy}`;
    }

    if (mediumBar) {
        mediumBar.style.width = `${mediumPercent}%`;
        mediumBar.title = `中等: ${distribution.medium}`;
    }

    if (hardBar) {
        hardBar.style.width = `${hardPercent}%`;
        hardBar.title = `困难: ${distribution.hard}`;
    }
}

async function loadCategories() {
    try {
        const baseUrl = window.location.pathname.includes('/algo-journey') ? '/algo-journey' : '';
        const response = await fetch(`${baseUrl}/assets/data/categories.json`);
        const categories = await response.json();
        renderCategories(categories);
    } catch (error) {
        console.error('Error loading categories:', error);
        renderDefaultCategories();
    }
}

function renderCategories(categories) {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    grid.innerHTML = categories.map(category => `
        <a href="${category.url}" class="category-card ${category.id}">
            <div class="category-header">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3 class="category-title">${category.name}</h3>
                <p class="category-description">${category.description}</p>
            </div>
            <div class="category-stats">
                <div class="category-stat">
                    <div class="stat-count">${category.problemCount}</div>
                    <div class="stat-label">题目</div>
                </div>
                <div class="category-stat">
                    <div class="stat-count">${category.completedCount}</div>
                    <div class="stat-label">已完成</div>
                </div>
                <div class="category-stat">
                    <div class="stat-count">${category.progress}%</div>
                    <div class="stat-label">进度</div>
                </div>
            </div>
        </a>
    `).join('');
}

function renderDefaultCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    const defaultCategories = [
        { id: 'array', name: '数组', description: '数组相关的算法题目', icon: 'fas fa-list', url: '#', problemCount: 0, completedCount: 0, progress: 0 },
        { id: 'string', name: '字符串', description: '字符串处理和算法', icon: 'fas fa-font', url: '#', problemCount: 0, completedCount: 0, progress: 0 },
        { id: 'linked-list', name: '链表', description: '链表数据结构和算法', icon: 'fas fa-link', url: '#', problemCount: 0, completedCount: 0, progress: 0 },
        { id: 'tree', name: '树', description: '树形结构的算法题目', icon: 'fas fa-tree', url: '#', problemCount: 0, completedCount: 0, progress: 0 },
        { id: 'graph', name: '图', description: '图论相关算法', icon: 'fas fa-project-diagram', url: '#', problemCount: 0, completedCount: 0, progress: 0 },
        { id: 'dp', name: '动态规划', description: '动态规划经典题目', icon: 'fas fa-brain', url: '#', problemCount: 0, completedCount: 0, progress: 0 }
    ];

    renderCategories(defaultCategories);
}

async function loadRecentProblems() {
    try {
        const baseUrl = window.location.pathname.includes('/algo-journey') ? '/algo-journey' : '';
        const response = await fetch(`${baseUrl}/assets/data/recent-problems.json`);
        const problems = await response.json();
        renderRecentProblems(problems);
    } catch (error) {
        console.error('Error loading recent problems:', error);
        renderDefaultRecentProblems();
    }
}

function renderRecentProblems(problems) {
    const grid = document.getElementById('recent-grid');
    if (!grid) return;

    grid.innerHTML = problems.map(problem => `
        <a href="${problem.url}" class="recent-card">
            <div class="recent-card-header">
                <h3 class="recent-card-title">${problem.title}</h3>
                <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
            </div>
            <div class="recent-card-meta">
                <span class="category">${problem.category}</span>
                <span class="date">${problem.date}</span>
            </div>
            <p class="recent-card-excerpt">${problem.excerpt}</p>
        </a>
    `).join('');
}

function renderDefaultRecentProblems() {
    const grid = document.getElementById('recent-grid');
    if (!grid) return;

    const defaultProblems = [
        {
            title: '数独有效性验证',
            difficulty: 'medium',
            category: '数组',
            date: '2024-01-20',
            excerpt: '判断一个9x9的数独棋盘是否有效，检查行、列和3x3宫格中的数字重复。',
            url: '#'
        },
        {
            title: '最小操作次数',
            difficulty: 'easy',
            category: '数学',
            date: '2024-01-19',
            excerpt: '将数组中所有元素变为3的倍数的最少操作次数。',
            url: '#'
        }
    ];

    renderRecentProblems(defaultProblems);
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for external use
window.AlgorithmSolutions = {
    updateStatistics,
    loadCategories,
    loadRecentProblems,
    debounce,
    throttle
};