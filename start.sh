#!/bin/bash

# Algo Journey 启动脚本
# 一键启动算法学习之旅

echo "🚀 Algo Journey - 算法学习之旅"
echo "================================"
echo ""

# 检查Python是否安装
if command -v python3 &> /dev/null; then
    echo "✅ Python3 已安装"
else
    echo "❌ Python3 未安装，请先安装Python3"
    exit 1
fi

# 检查Node.js是否安装
if command -v node &> /dev/null; then
    echo "✅ Node.js 已安装"
    echo "   可以使用: npm run dev 或 npm start"
    echo ""
else
    echo "⚠️  Node.js 未安装，将使用Python启动服务器"
fi

# 提供启动选项
echo "请选择启动方式："
echo "1. 使用Python启动 (推荐)"
echo "2. 使用Node.js启动"
echo "3. 运行Python解题脚本"
echo "4. 退出"
echo ""

read -p "请输入选择 (1-4): " choice

case $choice in
    1)
        echo "🐍 使用Python启动服务器..."
        echo "📍 访问地址: http://localhost:8000"
        echo "⏹️  按 Ctrl+C 停止服务器"
        echo ""
        python3 -m http.server 8000
        ;;
    2)
        if command -v node &> /dev/null; then
            echo "📦 使用Node.js启动服务器..."
            echo "📍 访问地址: http://localhost:8000"
            echo "⏹️  按 Ctrl+C 停止服务器"
            echo ""
            node scripts/start.js
        else
            echo "❌ Node.js 未安装，无法使用此选项"
        fi
        ;;
    3)
        echo "🐍 运行所有Python解题脚本..."
        python3 solutions/run_all.py
        ;;
    4)
        echo "👋 再见！继续你的算法学习之旅吧！"
        exit 0
        ;;
    *)
        echo "❌ 无效选择，请重新运行脚本"
        exit 1
        ;;
esac