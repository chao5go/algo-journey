# 🤝 贡献指南

感谢你对 Algorithm Solutions 项目的关注！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- ✨ 添加新的题目解答
- 🎨 改进UI/UX设计

## 📋 目录

- [开始之前](#开始之前)
- [开发环境设置](#开发环境设置)
- [贡献流程](#贡献流程)
- [添加新题目](#添加新题目)
- [代码规范](#代码规范)
- [文档贡献](#文档贡献)
- [问题报告](#问题报告)
- [功能请求](#功能请求)
- [社区准则](#社区准则)

## 🚀 开始之前

在开始贡献之前，请确保：

1. **阅读项目文档** - 了解项目的整体结构和目标
2. **查看现有Issues** - 确保你要解决的问题或添加的功能还未被处理
3. ** Fork 仓库** - 创建你自己的副本进行开发

## 🛠️ 开发环境设置

### 1. Fork 和克隆仓库

```bash
# Fork 仓库到你的GitHub账户，然后克隆到本地
git clone https://github.com/YOUR_USERNAME/algo-journey.git
cd algo-journey

# 添加上游仓库
git remote add upstream https://github.com/chao5go/algo-journey.git
```

### 2. 安装依赖

```bash
# 使用npm
npm install

# 或者使用yarn
yarn install
```

### 3. 启动开发服务器

```bash
# 启动本地开发服务器
npm run dev

# 或者使用Python 3
python3 -m http.server 8000
```

### 4. 验证环境

访问 `http://localhost:8000` 确保网站正常运行。

## 🔄 贡献流程

### 1. 创建分支

```bash
# 确保你的本地分支是最新的
git fetch upstream
git checkout main
git merge upstream/main

# 创建新的功能分支
git checkout -b feature/your-feature-name
# 或者修复分支
git checkout -b fix/your-bug-fix
```

### 2. 进行开发

- 按照下面的规范进行开发
- 确保所有测试通过
- 保持代码简洁和文档完整

### 3. 提交更改

```bash
# 添加更改的文件
git add .

# 提交更改（使用清晰的提交信息）
git commit -m "feat: add new problem solution for Two Sum"

# 推送到你的fork
git push origin feature/your-feature-name
```

### 4. 创建Pull Request

1. 访问你的GitHub仓库
2. 点击"New Pull Request"
3. 选择正确的分支
4. 填写PR描述模板
5. 提交PR并等待审核

## ✍️ 添加新题目

### 1. 选择分类

在 `problems/` 目录下选择合适的分类：

```
problems/
├── array/          # 数组相关题目
├── string/         # 字符串相关题目
├── linked-list/    # 链表相关题目
├── tree/           # 树相关题目
├── graph/          # 图相关题目
├── dp/             # 动态规划
├── math/           # 数学相关
├── sorting/        # 排序算法
├── searching/      # 搜索算法
├── backtracking/   # 回溯算法
├── greedy/         # 贪心算法
├── binary-search/  # 二分搜索
└── others/         # 其他
```

### 2. 创建题目页面

使用 `templates/problem-template.html` 作为模板：

```bash
# 复制模板
cp templates/problem-template.html problems/array/your-problem.html
```

### 3. 填写模板内容

在HTML文件中替换所有占位符：

```html
<!-- 基本信息 -->
<title>{{PROBLEM_TITLE}} | 算法解题记录</title>
<meta name="description" content="{{PROBLEM_DESCRIPTION}}">

<!-- 题目内容 -->
<section id="description">
  <h2>题目描述</h2>
  <div class="problem-description">
    <!-- 详细描述题目 -->
  </div>
</section>

<!-- 代码实现 -->
<section id="code">
  <h2>代码实现</h2>
  <div class="code-tabs">
    <!-- 添加Python、JavaScript、Java等语言的实现 -->
  </div>
</section>
```

### 4. 更新数据文件

#### 更新统计信息 (`assets/data/statistics.json`)

```json
{
  "totalProblems": 3,
  "difficultyDistribution": {
    "easy": 1,
    "medium": 2,
    "hard": 0
  }
}
```

#### 更新最近题目 (`assets/data/recent-problems.json`)

```json
[
  {
    "id": "problem-id",
    "title": "题目标题",
    "difficulty": "medium",
    "category": "数组",
    "date": "2024-01-21",
    "url": "./problems/array/your-problem.html",
    "tags": ["数组", "哈希表"]
  }
]
```

#### 更新搜索索引 (`assets/data/search-index.json`)

添加新的搜索条目，确保题目可以被搜索到。

### 5. 题目内容规范

#### 题目描述要求
- 清晰准确的题目描述
- 包含输入输出格式
- 提供具体的示例
- 说明约束条件

#### 解答质量要求
- **思路清晰** - 详细解释解题思路
- **代码规范** - 遵循语言编码规范
- **复杂度分析** - 提供时间和空间复杂度
- **多语言实现** - 至少提供Python和JavaScript实现

#### 代码示例格式

```python
def solution_function(params):
    """
    函数功能描述

    Args:
        param1: 参数1描述
        param2: 参数2描述

    Returns:
        返回值描述
    """
    # 算法实现
    pass
```

## 📝 代码规范

### HTML规范
- 使用语义化HTML标签
- 保持正确的缩进（2个空格）
- 为图片添加alt属性
- 使用合理的标题层级

### CSS规范
- 使用BEM命名规范
- 避免内联样式
- 使用CSS变量
- 保持移动端友好

### JavaScript规范
- 使用ES6+语法
- 使用有意义的变量名
- 添加必要的注释
- 处理错误情况

### 提交信息规范

使用[Conventional Commits](https://www.conventionalcommits.org/)规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

类型说明：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式化（不影响功能）
- `refactor`: 代码重构
- `test`: 添加或修改测试
- `chore`: 构建过程或辅助工具的变动

示例：
```
feat(array): add Two Sum problem solution
fix: resolve mobile navigation menu issue
docs: update contributing guide
```

## 📖 文档贡献

### README文档
- 保持项目描述的准确性
- 更新安装和使用说明
- 添加新的截图和示例
- 维护贡献者列表

### 题目文档
- 使用Markdown格式
- 包含适当的代码块
- 添加图片和图表
- 保持格式一致性

## 🐛 问题报告

### 报告Bug

使用GitHub Issues报告bug，请包含：

1. **Bug描述** - 清晰描述遇到的问题
2. **复现步骤** - 详细说明如何复现
3. **期望行为** - 描述期望的正确行为
4. **环境信息** - 浏览器、操作系统等
5. **截图** - 如适用，提供相关截图

### Bug报告模板

```markdown
## Bug描述
简要描述bug

## 复现步骤
1. 打开页面 '...'
2. 点击 '....'
3. 滚动到 '....'
4. 看到错误

## 期望行为
描述你期望发生的情况

## 实际行为
描述实际发生的情况

## 环境信息
- 操作系统: [e.g. Windows 10, macOS 11.0]
- 浏览器: [e.g. Chrome, Firefox]
- 设备: [e.g. Desktop, Mobile]

## 附加信息
添加任何其他有助于解决问题的信息
```

## 💡 功能请求

### 提出新功能

1. **检查现有请求** - 确保功能未被请求过
2. **详细描述** - 清晰描述新功能
3. **使用场景** - 说明功能的使用场景
4. **实现建议** - 如果有想法，提供实现建议

### 功能请求模板

```markdown
## 功能描述
清晰简洁地描述你想要的功能

## 问题解决
这个功能解决了什么问题？

## 建议的解决方案
描述你希望如何实现这个功能

## 替代方案
描述你考虑过的其他替代解决方案

## 附加信息
添加任何其他相关信息或截图
```

## 🌟 社区准则

### 行为准则

1. **尊重他人** - 保持友善和专业
2. **建设性反馈** - 提供有用和建设性的意见
3. **包容性** - 欢迎不同背景的贡献者
4. **耐心** - 对新手保持耐心和帮助态度

### 沟通方式

- 在Issues和PR中使用中文或英文
- 保持回复的专业性和建设性
- 避免使用不当语言或攻击性言论
- 尊重他人的观点和贡献

## 🎉 贡献者认可

所有贡献者都会在项目中得到认可：

- 在README中列出贡献者
- 在发布说明中感谢贡献者
- 为突出贡献者维护者权限

## 📞 联系方式

如果你有任何问题或建议，可以通过以下方式联系：

- 📧 邮箱: your.email@example.com
- 🐛 GitHub Issues: [创建新Issue](https://github.com/chao5go/algo-journey/issues)
- 💬 GitHub Discussions: [参与讨论](https://github.com/chao5go/algo-journey/discussions)

---

感谢你的贡献！🎉

每一次贡献都让这个项目变得更好。无论大小，我们都非常感谢你的时间和努力。