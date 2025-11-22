// ===== PROBLEM PAGE JAVASCRIPT =====

// Initialize problem page
function initializeProblemPage(config) {
    initializeTabs();
    initializeCopyButtons();
    initializeTableOfContents();
    initializeProblemNavigation(config);
    initializeCodeHighlighting();
    initializeSearch();
}

// ===== TAB FUNCTIONALITY =====
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            if (tabContents[index]) {
                tabContents[index].classList.add('active');
            }
        });
    });
}

// ===== COPY BUTTONS =====
function initializeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const codeBlock = button.nextElementSibling;
            const code = codeBlock.textContent;

            try {
                await navigator.clipboard.writeText(code);

                // Show success state
                button.textContent = '已复制!';
                button.classList.add('copied');

                // Reset button after 2 seconds
                setTimeout(() => {
                    button.textContent = '复制代码';
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    document.execCommand('copy');
                    button.textContent = '已复制!';
                    button.classList.add('copied');

                    setTimeout(() => {
                        button.textContent = '复制代码';
                        button.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                }

                document.body.removeChild(textArea);
            }
        });
    });
}

// ===== TABLE OF CONTENTS =====
function initializeTableOfContents() {
    const tocLinks = document.querySelectorAll('.toc-nav a');
    const sections = document.querySelectorAll('.problem-section[id]');

    // Update active TOC link on scroll
    function updateActiveTocLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Smooth scrolling for TOC links
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Throttle scroll event for performance
    const throttledUpdate = throttle(updateActiveTocLink, 100);
    window.addEventListener('scroll', throttledUpdate);

    // Initial update
    updateActiveTocLink();
}

// ===== PROBLEM NAVIGATION =====
function initializeProblemNavigation(config) {
    const prevLink = document.getElementById('prev-link');
    const nextLink = document.getElementById('next-link');

    // Hide navigation if no previous/next problem
    if (prevLink && (!config.prevProblemUrl || config.prevProblemUrl === '#')) {
        prevLink.style.display = 'none';
    }

    if (nextLink && (!config.nextProblemUrl || config.nextProblemUrl === '#')) {
        nextLink.style.display = 'none';
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && prevLink && prevLink.style.display !== 'none') {
            prevLink.click();
        } else if (e.key === 'ArrowRight' && nextLink && nextLink.style.display !== 'none') {
            nextLink.click();
        }
    });
}

// ===== CODE HIGHLIGHTING =====
function initializeCodeHighlighting() {
    // Add line numbers to code blocks
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        const lines = block.textContent.split('\n');
        const lineNumbers = lines.map((_, index) => {
            return `<span class="line-number">${index + 1}</span>`;
        }).join('');

        const lineNumbersContainer = document.createElement('div');
        lineNumbersContainer.className = 'line-numbers';
        lineNumbersContainer.innerHTML = lineNumbers;

        const codeContainer = document.createElement('div');
        codeContainer.className = 'code-container';
        codeContainer.textContent = block.textContent;

        const pre = block.parentElement;
        pre.innerHTML = '';
        pre.appendChild(lineNumbersContainer);
        pre.appendChild(codeContainer);
    });
}

// ===== SEARCH FUNCTIONALITY =====
function initializeSearch() {
    // Create search overlay
    const searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.innerHTML = `
        <div class="search-container">
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="搜索题目..." id="search-input">
                <button class="search-close" id="search-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="search-results" id="search-results"></div>
        </div>
    `;

    document.body.appendChild(searchOverlay);

    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchResults = document.getElementById('search-results');

    // Show/hide search overlay
    let searchVisible = false;

    function toggleSearch() {
        searchVisible = !searchVisible;
        if (searchVisible) {
            searchOverlay.classList.add('active');
            searchInput.focus();
        } else {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    }

    // Keyboard shortcut for search (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleSearch();
        }
        if (e.key === 'Escape' && searchVisible) {
            toggleSearch();
        }
    });

    searchClose.addEventListener('click', toggleSearch);
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            toggleSearch();
        }
    });

    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
}

async function performSearch(query) {
    try {
        const response = await fetch('./assets/data/search-index.json');
        const problems = await response.json();

        const results = problems.filter(problem => {
            const searchText = `${problem.title} ${problem.description} ${problem.tags.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });

        displaySearchResults(results, query);
    } catch (error) {
        console.error('Error performing search:', error);
        displaySearchError();
    }
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>未找到与 "${query}" 相关的题目</p>
            </div>
        `;
        return;
    }

    searchResults.innerHTML = `
        <div class="search-results-list">
            ${results.map(problem => `
                <a href="${problem.url}" class="search-result-item">
                    <div class="search-result-title">${highlightQuery(problem.title, query)}</div>
                    <div class="search-result-meta">
                        <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
                        <span class="category">${problem.category}</span>
                    </div>
                    <div class="search-result-excerpt">${highlightQuery(problem.excerpt, query)}</div>
                </a>
            `).join('')}
        </div>
    `;
}

function displaySearchError() {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = `
        <div class="search-error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>搜索时发生错误，请稍后重试</p>
        </div>
    `;
}

function highlightQuery(text, query) {
    if (!text || !query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// ===== UTILITY FUNCTIONS =====
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

// Export for external use
window.ProblemPage = {
    initializeProblemPage,
    performSearch
};