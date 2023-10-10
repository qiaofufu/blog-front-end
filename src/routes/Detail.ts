import {LoaderFunctionArgs} from "react-router-dom";
import * as marked from "marked";

interface loaderParams {
    id: number
}

export async function loader({params}:LoaderFunctionArgs<loaderParams>) {
    return await new Promise((resolve) => {
        const data = "# Markdown 示例\n" +
            "\n" +
            "## 标题\n" +
            "\n" +
            "这是一个 Markdown 示例文档，演示了一些常见的 Markdown 格式。\n" +
            "\n" +
            "## 文本格式\n" +
            "\n" +
            "*斜体文本* 或 _斜体文本_\n" +
            "**粗体文本** 或 __粗体文本__\n" +
            "~~删除线文本~~\n" +
            "\n" +
            "## 列表\n" +
            "\n" +
            "### 无序列表\n" +
            "\n" +
            "- 项目 1\n" +
            "- 项目 2\n" +
            "    - 子项目 A\n" +
            "    - 子项目 B\n" +
            "\n" +
            "### 有序列表\n" +
            "\n" +
            "1. 项目 1\n" +
            "2. 项目 2\n" +
            "    1. 子项目 A\n" +
            "    2. 子项目 B\n" +
            "\n" +
            "## 链接\n" +
            "\n" +
            "[链接文本](https://www.example.com)\n" +
            "![图片替代文本](https://www.example.com/image.jpg)\n" +
            "\n" +
            "## 引用\n" +
            "\n" +
            "> 这是引用的文本块。\n" +
            "\n" +
            "## 代码\n" +
            "\n" +
            "行内代码： `console.log('Hello, World!');`\n" +
            "\n" +
            "代码块：\n" +
            "\n" +
            "```javascript\n" +
            "function greet(name) {\n" +
            "    console.log(\\`Hello, \\${name}!\\`);\n" +
            "}\n" +
            "```\n" +
            "\n" +
            "## 表格\n" +
            "\n" +
            "| 表头 1 | 表头 2 |\n" +
            "| ------ | ------ |\n" +
            "| 单元格 1 | 单元格 2 |\n" +
            "| 单元格 3 | 单元格 4 |\n" +
            "\n" +
            "## 分隔线\n" +
            "\n" +
            "---\n" +
            "\n" +
            "## 脚注\n" +
            "\n" +
            "这是一个脚注[^1]的示例。\n" +
            "\n" +
            "[^1]: 脚注的说明文字。\n" +
            "\n" +
            "## 内嵌 HTML\n" +
            "\n" +
            "你可以在 Markdown 中使用内嵌的 HTML 标签，如：<em>这是内嵌的 HTML</em>\n" +
            "\n" +
            "## 任务列表\n" +
            "\n" +
            "- [x] 已完成的任务\n" +
            "- [ ] 未完成的任务\n" +
            "\n" +
            "## 公式\n" +
            "\n" +
            "使用 LaTeX 语法插入数学公式：\n" +
            "\n" +
            "$$\n" +
            "\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}\n" +
            "$$\n" +
            "\n" +
            "## 注释\n" +
            "\n" +
            "<!-- 这是一个注释 -->"
        marked.use({
            gfm: true,
        })
        const html = marked.parse(data)
        resolve(html)
    })
}