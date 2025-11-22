"""
最小操作次数
题目：将数组中所有元素变为3的倍数的最少操作次数
难度：简单

给你一个整数数组 nums。一次操作中，你可以将 nums 中的任意一个元素增加或者减少 1。
请你返回将 nums 中所有元素都可以被 3 整除的最少操作次数。

时间复杂度：O(n)
空间复杂度：O(1)
"""

from typing import List


def min_operations_divisible_by_3(nums: List[int]) -> int:
    """
    返回将数组中所有元素都可以被 3 整除的最少操作次数

    Args:
        nums: 整数数组

    Returns:
        最少操作次数
    """
    operations = 0

    for num in nums:
        remainder = num % 3
        if remainder == 1:
            # 余数为1，需要减少1次操作
            operations += 1
        elif remainder == 2:
            # 余数为2，需要增加1次操作
            operations += 1
        # 余数为0不需要操作

    return operations


def test_solution():
    """测试解决方案"""
    # 测试用例1
    print("=== 测试用例1 ===")
    nums1 = [1, 2, 3, 4]
    result1 = min_operations_divisible_by_3(nums1)
    print(f"输入: {nums1}")
    print(f"输出: {result1}")
    print(f"期望: 3")
    print(f"测试结果: {'✓' if result1 == 3 else '✗'}")
    print()

    # 测试用例2
    print("=== 测试用例2 ===")
    nums2 = [3, 6, 9]
    result2 = min_operations_divisible_by_3(nums2)
    print(f"输入: {nums2}")
    print(f"输出: {result2}")
    print(f"期望: 0")
    print(f"测试结果: {'✓' if result2 == 0 else '✗'}")
    print()

    # 额外测试用例
    print("=== 测试用例3：全部为1 ===")
    nums3 = [1, 1, 1]
    result3 = min_operations_divisible_by_3(nums3)
    print(f"输入: {nums3}")
    print(f"输出: {result3}")
    print(f"期望: 3 (每个数都需要减少1)")
    print(f"测试结果: {'✓' if result3 == 3 else '✗'}")
    print()

    # 测试用例4：全部为2
    print("=== 测试用例4：全部为2 ===")
    nums4 = [2, 2, 2]
    result4 = min_operations_divisible_by_3(nums4)
    print(f"输入: {nums4}")
    print(f"输出: {result4}")
    print(f"期望: 3 (每个数都需要增加1)")
    print(f"测试结果: {'✓' if result4 == 3 else '✗'}")
    print()

    # 测试用例5：混合情况
    print("=== 测试用例5：混合情况 ===")
    nums5 = [1, 2, 4, 5, 7, 8]
    result5 = min_operations_divisible_by_3(nums5)
    print(f"输入: {nums5}")
    print(f"输出: {result5}")
    print(f"期望: 6 (1→0(减1), 2→3(加1), 4→3(减1), 5→6(加1), 7→6(减1), 8→9(加1))")
    print(f"测试结果: {'✓' if result5 == 6 else '✗'}")
    print()


def explain_solution():
    """解释解决思路"""
    print("解题思路:")
    print("1. 对于每个数，计算它除以3的余数")
    print("2. 如果余数为1，需要将该数减少1次操作才能被3整除")
    print("3. 如果余数为2，需要将该数增加1次操作才能被3整除")
    print("4. 如果余数为0，不需要任何操作")
    print("5. 将所有需要的操作次数相加就是答案")
    print()
    print("数学原理:")
    print("- 任何数除以3的余数只能是0、1或2")
    print("- 余数1: num - 1 能被3整除")
    print("- 余数2: num + 1 能被3整除")
    print("- 余数0: 已经能被3整除")
    print()
    print("贪心策略:")
    print("- 对于余数为1的数，减1是最优选择（1次操作）")
    print("- 对于余数为2的数，加1是最优选择（1次操作）")
    print("- 虽然也可以用相反的操作，但需要更多次数（2次操作）")
    print()
    print("时间复杂度：O(n)，其中n是数组长度")
    print("空间复杂度：O(1)，只使用常数空间")


def run_python_solution():
    """运行Python解题文件"""
    print("=== 运行Python解题文件 ===")

    # 运行最小操作次数的Python文件
    try:
        import importlib.util
        import sys

        # 这里可以动态加载和运行其他Python文件
        # 由于我们已经在这个文件中，直接调用函数
        test_solution()

    except Exception as e:
        print(f"运行出错: {e}")


if __name__ == "__main__":
    print("=== 最小操作次数 ===")
    print()

    explain_solution()
    print()

    test_solution()

    # 运行独立的Python解题测试
    run_python_solution()