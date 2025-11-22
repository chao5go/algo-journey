# 🚀 Algo Journey

<div align="center">

![Algo Journey Logo](https://img.shields.io/badge/Algo-Journey-ff6b35?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/chao5go/algo-journey?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/chao5go/algo-journey?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/chao5go/algo-journey?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/chao5go/algo-journey?style=for-the-badge)

**记录算法学习的每一步，从入门到精通的个人学习网站**

[🚀 Live Demo](https://chao5go.github.io/algo-journey) · [📖 文档](#文档) · [🤝 贡献](#贡献指南) · [📝 学习日志](#最新更新)

</div>

## ✨ 特性

- 🎨 **美观的界面设计** - 现代化的响应式设计，支持暗色模式
- 📱 **移动端友好** - 完美适配手机和平板设备
- 🔍 **强大的搜索功能** - 快速查找题目和解答
- 📊 **详细的解题统计** - 追踪解题进度和难度分布
- 🏷️ **题目分类系统** - 按算法类型、难度等维度分类
- 💻 **多语言代码示例** - 支持 Python、JavaScript、Java 等
- ⚡ **快速加载** - 优化的性能和SEO
- 🎯 **交互式体验** - 目录导航、代码高亮、一键复制等功能

## 🚀 快速开始

### 在线访问

直接访问 [GitHub Pages](https://chao5go.github.io/algorithm-solutions) 查看完整网站。

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/chao5go/algorithm-solutions.git
   cd algorithm-solutions
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动本地服务器**
   ```bash
   npm run dev
   ```

   或者使用 Python 3：
   ```bash
   python3 -m http.server 8000
   ```

4. **访问网站**

   打开浏览器访问 `http://localhost:8000`

### 项目结构

```
algorithm-solutions/
├── assets/                 # 静态资源
│   ├── css/               # 样式文件
│   ├── js/                # JavaScript 文件
│   ├── images/            # 图片资源
│   └── data/              # 数据文件
├── problems/              # 题目页面
│   ├── array/             # 数组类题目
│   ├── string/            # 字符串类题目
│   ├── linked-list/       # 链表类题目
│   ├── tree/              # 树类题目
│   ├── graph/             # 图类题目
│   ├── dp/                # 动态规划
│   └── ...                # 其他分类
├── templates/             # 页面模板
├── scripts/               # 构建脚本
├── .github/               # GitHub 配置
├── index.html             # 主页
├── package.json           # 项目配置
└── README.md              # 项目说明
```

## 📖 文档

### 添加新题目

1. **选择分类** - 在 `problems/` 目录下选择合适的分类文件夹
2. **复制模板** - 使用 `templates/problem-template.html` 作为模板
3. **填写内容** - 根据模板格式填写题目信息
4. **更新数据** - 更新 `assets/data/` 目录下的相关数据文件

详细指南请参考 [贡献指南](CONTRIBUTING.md)。

### 数据管理

网站数据存储在 `assets/data/` 目录中：

- `statistics.json` - 统计信息
- `categories.json` - 分类数据
- `recent-problems.json` - 最近更新的题目
- `search-index.json` - 搜索索引

### 自定义配置

1. **修改网站信息** - 编辑 `index.html` 和相关配置文件
2. **调整样式** - 修改 `assets/css/` 中的样式文件
3. **添加功能** - 扩展 `assets/js/` 中的JavaScript代码

## 🎯 网站功能

### 📊 题目统计

- **总题目数** - 记录解题总数
- **分类统计** - 按算法类型分类统计
- **难度分布** - 简单、中等、困难题目分布
- **解题进度** - 每个分类的完成进度

### 🔍 搜索功能

- **全文搜索** - 支持题目标题、描述、标签搜索
- **快速过滤** - 按难度、分类筛选
- **智能建议** - 搜索结果高亮显示

### 📱 响应式设计

- **桌面端** - 完整的功能和布局
- **平板端** - 适配的触控体验
- **移动端** - 优化的移动界面

### ⚡ 性能优化

- **懒加载** - 图片和内容按需加载
- **代码分割** - 按需加载JavaScript模块
- **缓存策略** - 优化资源加载速度
- **SEO优化** - 良好的搜索引擎优化

## 🏷️ 题目分类

| 分类 | 描述 | 题目数 |
|------|------|--------|
| 📚 数组 | 数组相关算法 | [详细](./problems/array/) |
| 📝 字符串 | 字符串处理算法 | [详细](./problems/string/) |
| 🔗 链表 | 链表数据结构 | [详细](./problems/linked-list/) |
| 🌳 树 | 树形结构算法 | [详细](./problems/tree/) |
| 🕸️ 图 | 图论算法 | [详细](./problems/graph/) |
| 🧠 动态规划 | DP经典题目 | [详细](./problems/dp/) |
| 🔢 数学 | 数学相关算法 | [详细](./problems/math/) |
| 📊 排序 | 各种排序算法 | [详细](./problems/sorting/) |
| 🔍 搜索 | 搜索算法 | [详细](./problems/searching/) |
| 🔄 回溯 | 回溯算法 | [详细](./problems/backtracking/) |
| 💰 贪心 | 贪心算法 | [详细](./problems/greedy/) |
| 🔎 二分搜索 | 二分查找 | [详细](./problems/binary-search/) |

## 🛠️ 技术栈

- **前端框架**: 原生 HTML5 + CSS3 + JavaScript (ES6+)
- **样式框架**: 自定义CSS框架，响应式设计
- **代码高亮**: Highlight.js
- **图标库**: Font Awesome
- **构建工具**: npm scripts
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📈 项目统计

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/chao5go/algorithm-solutions)
![GitHub last commit](https://img.shields.io/github/last-commit/chao5go/algorithm-solutions)
![GitHub code size](https://img.shields.io/github/languages/code-size/chao5go/algorithm-solutions)

## 🤝 贡献指南

我们欢迎所有形式的贡献！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细信息。

### 贡献方式

1. **🐛 报告问题** - 发现bug或有改进建议
2. **💡 提出新想法** - 新功能或改进方案
3. **📝 改进文档** - 完善项目文档
4. **🔧 提交代码** - 修复bug或添加新功能
5. **✨ 添加题目** - 贡献新的题目解答

### 开发流程

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📜 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [LeetCode](https://leetcode.com) - 优质的算法学习平台
- [Font Awesome](https://fontawesome.com) - 精美的图标库
- [Highlight.js](https://highlightjs.org) - 代码高亮库
- 所有贡献者和支持者 💪

## 📞 联系方式

- **项目主页**: [https://github.com/chao5go/algo-journey](https://github.com/chao5go/algo-journey)
- **在线演示**: [https://chao.github.io/algo-journey](https://chao5go.github.io/algo-journey)
- **邮箱**: your.email@example.com

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️ Star！**

Made with ❤️ by [Your Name](https://github.com/chao5go)

</div>