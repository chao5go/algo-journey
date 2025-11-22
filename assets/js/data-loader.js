// ===== DATA LOADER FOR WEBSITE =====

// Load problem data from JSON files
class DataLoader {
    constructor() {
        this.cache = new Map();
        this.basePath = './assets/data';
    }

    async loadData(filename) {
        if (this.cache.has(filename)) {
            return this.cache.get(filename);
        }

        try {
            const response = await fetch(`${this.basePath}/${filename}`);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.status}`);
            }
            const data = await response.json();
            this.cache.set(filename, data);
            return data;
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            return this.getDefaultData(filename);
        }
    }

    getDefaultData(filename) {
        const defaults = {
            'statistics.json': {
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
            },
            'categories.json': [
                {
                    id: 'array',
                    name: '数组',
                    description: '数组相关的算法题目',
                    icon: 'fas fa-list',
                    url: './problems/array/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'string',
                    name: '字符串',
                    description: '字符串处理和算法',
                    icon: 'fas fa-font',
                    url: './problems/string/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'linked-list',
                    name: '链表',
                    description: '链表数据结构和算法',
                    icon: 'fas fa-link',
                    url: './problems/linked-list/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'tree',
                    name: '树',
                    description: '树形结构的算法题目',
                    icon: 'fas fa-tree',
                    url: './problems/tree/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'graph',
                    name: '图',
                    description: '图论相关算法',
                    icon: 'fas fa-project-diagram',
                    url: './problems/graph/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'dp',
                    name: '动态规划',
                    description: '动态规划经典题目',
                    icon: 'fas fa-brain',
                    url: './problems/dp/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'math',
                    name: '数学',
                    description: '数学相关算法',
                    icon: 'fas fa-calculator',
                    url: './problems/math/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'sorting',
                    name: '排序',
                    description: '各种排序算法',
                    icon: 'fas fa-sort',
                    url: './problems/sorting/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'searching',
                    name: '搜索',
                    description: '搜索相关算法',
                    icon: 'fas fa-search',
                    url: './problems/searching/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'backtracking',
                    name: '回溯',
                    description: '回溯算法题目',
                    icon: 'fas fa-undo',
                    url: './problems/backtracking/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'greedy',
                    name: '贪心',
                    description: '贪心算法题目',
                    icon: 'fas fa-coins',
                    url: './problems/greedy/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                },
                {
                    id: 'binary-search',
                    name: '二分搜索',
                    description: '二分搜索算法',
                    icon: 'fas fa-compress',
                    url: './problems/binary-search/index.html',
                    problemCount: 0,
                    completedCount: 0,
                    progress: 0
                }
            ],
            'recent-problems.json': [
                {
                    id: 'valid-sudoku',
                    title: '数独有效性验证',
                    difficulty: 'medium',
                    category: '数组',
                    date: '2024-01-20',
                    excerpt: '判断一个9x9的数独棋盘是否有效，检查行、列和3x3宫格中的数字重复。',
                    url: './problems/array/valid-sudoku.html',
                    tags: ['数组', '哈希表', '矩阵']
                },
                {
                    id: 'min-operations-divisible-by-3',
                    title: '最小操作次数',
                    difficulty: 'easy',
                    category: '数学',
                    date: '2024-01-19',
                    excerpt: '将数组中所有元素变为3的倍数的最少操作次数。',
                    url: './problems/math/min-operations-divisible-by-3.html',
                    tags: ['数学', '数组', '贪心']
                }
            ],
            'search-index.json': []
        };

        return defaults[filename] || null;
    }

    async loadProblems() {
        const categories = await this.loadData('categories.json');
        const allProblems = [];

        for (const category of categories) {
            try {
                const categoryProblems = await this.loadData(`${category.id}-problems.json`);
                allProblems.push(...categoryProblems);
            } catch (error) {
                console.error(`Error loading problems for category ${category.id}:`, error);
            }
        }

        return allProblems;
    }

    async loadCategoryProblems(categoryId) {
        return await this.loadData(`${categoryId}-problems.json`);
    }

    async saveData(filename, data) {
        try {
            // In a real implementation, this would send data to a server
            // For static sites, we'll just update the cache
            this.cache.set(filename, data);
            console.log(`Data saved to ${filename}:`, data);
            return true;
        } catch (error) {
            console.error(`Error saving ${filename}:`, error);
            return false;
        }
    }

    clearCache() {
        this.cache.clear();
    }
}

// Initialize global data loader
window.dataLoader = new DataLoader();

// Export for external use
window.DataLoader = DataLoader;