#!/usr/bin/env python3
"""
算法解题汇总执行脚本
运行所有题目的Python解决方案
"""

import os
import sys
import importlib.util
import traceback
from pathlib import Path


def load_module_from_file(file_path):
    """从文件路径加载模块"""
    spec = importlib.util.spec_from_file_location("module", file_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def run_python_file(file_path):
    """运行单个Python文件"""
    print(f"\n{'='*60}")
    print(f"运行: {file_path}")
    print('='*60)

    try:
        module = load_module_from_file(file_path)

        # 检查是否有测试函数
        if hasattr(module, 'test_solution'):
            module.test_solution()
        else:
            print("文件中没有找到 test_solution() 函数")

    except Exception as e:
        print(f"运行 {file_path} 时出错:")
        traceback.print_exc()


def find_python_files(directory):
    """查找目录下的所有Python文件"""
    python_files = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.py') and file != 'run_all.py':
                python_files.append(os.path.join(root, file))

    return sorted(python_files)


def main():
    """主函数"""
    solutions_dir = Path(__file__).parent

    print("🚀 算法解题汇总执行脚本")
    print(f"搜索目录: {solutions_dir}")

    # 查找所有Python文件
    python_files = find_python_files(solutions_dir)

    if not python_files:
        print("❌ 没有找到任何Python解题文件")
        return

    print(f"📁 找到 {len(python_files)} 个Python文件:")
    for file in python_files:
        print(f"  - {file}")

    print("\n开始执行所有题目解决方案...")

    success_count = 0
    total_count = len(python_files)

    for file_path in python_files:
        try:
            run_python_file(file_path)
            success_count += 1
        except KeyboardInterrupt:
            print("\n⚠️ 用户中断执行")
            break
        except Exception as e:
            print(f"❌ 执行 {file_path} 失败: {e}")

    print(f"\n{'='*60}")
    print("📊 执行结果汇总")
    print('='*60)
    print(f"总文件数: {total_count}")
    print(f"成功执行: {success_count}")
    print(f"执行失败: {total_count - success_count}")
    print(f"成功率: {success_count/total_count*100:.1f}%")

    if success_count == total_count:
        print("🎉 所有题目执行成功!")
    else:
        print("⚠️ 部分题目执行失败，请检查错误信息")


if __name__ == "__main__":
    main()