# 🐍 Python解题源代码

这个目录包含了所有算法题目的Python解决方案。

## 📁 目录结构

```
solutions/
├── README.md                    # 本文件
├── run_all.py                   # 运行所有题目的脚本
├── array/                       # 数组相关题目
│   └── valid_sudoku.py         # 数独有效性验证
├── math/                        # 数学相关题目
│   └── min_operations_divisible_by_3.py  # 最小操作次数
├── string/                      # 字符串相关题目
├── linked-list/                 # 链表相关题目
├── tree/                        # 树相关题目
├── graph/                       # 图相关题目
├── dp/                          # 动态规划
├── sorting/                     # 排序算法
├── searching/                   # 搜索算法
├── backtracking/                # 回溯算法
├── greedy/                      # 贪心算法
└── binary-search/               # 二分搜索
```

## 🚀 使用方法

### 运行单个题目文件

```bash
# 运行数独验证题目
python solutions/array/valid_sudoku.py

# 运行最小操作次数题目
python solutions/math/min_operations_divisible_by_3.py
```

### 运行所有题目

使用提供的批量运行脚本：

```bash
python solutions/run_all.py
```

这个脚本会自动找到并运行所有的Python解题文件，显示执行结果汇总。

## 📝 文件规范

每个Python解题文件都包含以下部分：

1. **文件头注释** - 包含题目信息、难度、复杂度等
2. **函数实现** - 核心解题算法
3. **测试函数** - 完整的测试用例
4. **解释说明** - 详细的解题思路
5. **主函数** - 可直接运行的入口

### 文件命名规范

- 使用小写字母和下划线
- 英文命名，描述题目内容
- 例如：`valid_sudoku.py`、`min_operations_divisible_by_3.py`

## 🎯 代码规范

### Python代码风格

- 遵循 PEP 8 规范
- 使用有意义的变量名和函数名
- 添加详细的类型注解
- 包含完整的文档字符串

### 模板结构

```python
"""
题目名称
LeetCode题号: 题目编号
难度：简单/中等/困难

题目描述
简要描述题目要求

时间复杂度：O(n)
空间复杂度：O(n)
"""

from typing import List


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


def test_solution():
    """测试解决方案"""
    # 测试用例
    pass


def explain_solution():
    """解释解决思路"""
    # 解题思路说明
    pass


if __name__ == "__main__":
    explain_solution()
    test_solution()
```

## 📊 进度跟踪

- **总题目数**: 2
- **已完成**: 2
- **完成率**: 100%

### 已完成题目

1. **数组类**:
   - ✅ 数独有效性验证 (valid_sudoku.py)
   - ⏳ 其他数组题目...

2. **数学类**:
   - ✅ 最小操作次数 (min_operations_divisible_by_3.py)
   - ⏳ 其他数学题目...

## 🔧 开发工具

### 推荐的Python环境

```bash
# Python 3.8+
python --version

# 安装常用依赖（如果需要）
pip install numpy pytest black flake8
```

### 代码格式化

```bash
# 使用black格式化代码
black solutions/

# 使用flake8检查代码规范
flake8 solutions/
```

## 🤝 贡献指南

1. 在对应分类目录下创建新的Python文件
2. 按照模板结构编写代码
3. 包含完整的测试用例
4. 更新本README文件的进度统计
5. 运行 `python run_all.py` 确保测试通过

## 📚 学习资源

- [LeetCode 官网](https://leetcode.com)
- [Python 官方文档](https://docs.python.org/zh-cn/3/)
- [算法可视化](https://visualgo.net/zh)

---

💡 **提示**: 点击上层的HTML题目页面可以查看详细的可视化解答！