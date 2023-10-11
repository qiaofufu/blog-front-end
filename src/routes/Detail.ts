import {LoaderFunctionArgs} from "react-router-dom";


interface loaderParams {
    id: number
}


export async function loader({params}:LoaderFunctionArgs<loaderParams>) {
    return await new Promise((resolve) => {
        const data = "# GFM (GitHub Flavored Markdown) 示例\n" +
            "\n" +
            "这是一个演示 GFM 格式的文本示例。\n" +
            "\n" +
            "## 标题\n" +
            "\n" +
            "### 一级标题\n" +
            "\n" +
            "#### 二级标题\n" +
            "\n" +
            "##### 三级标题\n" +
            "\n" +
            "###### 四级标题\n" +
            "\n" +
            "###### 五级标题\n" +
            "\n" +
            "###### 六级标题\n" +
            "\n" +
            "## 强调\n" +
            "\n" +
            "**加粗文本**\n" +
            "\n" +
            "*斜体文本*\n" +
            "\n" +
            "***加粗斜体文本***\n" +
            "\n" +
            "## 列表\n" +
            "\n" +
            "1. 有序列表项 1\n" +
            "2. 有序列表项 2\n" +
            "3. 有序列表项 3\n" +
            "\n" +
            "- 无序列表项 1\n" +
            "- 无序列表项 2\n" +
            "- 无序列表项 3\n" +
            "\n" +
            "## 任务列表\n" +
            "\n" +
            "- [x] 完成任务1\n" +
            "- [ ] 未完成任务2\n" +
            "\n" +
            "## 引用\n" +
            "\n" +
            "> 这是一个引用示例。\n" +
            "\n" +
            "## 链接\n" +
            "\n" +
            "[GitHub](https://github.com)\n" +
            "\n" +
            "## 图片\n" +
            "\n" +
            "![GitHub 图标](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)\n" +
            "\n" +
            "## 代码块\n" +
            "\n" +
            "```javascript\n" +
            "  function helloWorld() {\n" +
            "    console.log('Hello, World!');\n" +
            "}\n" +
            "```\n" +
            "\n" +
            "## 表格\n" +
            "\n" +
            "| 姓名  | 年龄 | 职业   |\n" +
            "  | ----- | ---- | ------ |\n" +
            "| Alice | 28   | 工程师 |\n" +
            "| Bob   | 32   | 设计师 |\n" +
            "| Carol | 24   | 作家   |\n" +
            "\n" +
            "## 代码\n" +
            "\n" +
            "内联代码：`const message = \"Hello, World!\";`\n" +
            "\n" +
            "## 任务列表\n" +
            "\n" +
            "- [x] 已完成事项\n" +
            "- [ ] 未完成事项\n" +
            "\n" +
            "## 表情\n" +
            "\n" +
            ":smile: :heart: :rocket:\n" +
            "\n" +
            "## 删除线\n" +
            "\n" +
            "~~这是删除线文本~~\n" +
            "\n" +
            "## 水平线\n" +
            "\n" +
            "---\n" +
            "\n" +
            "## 脚注\n" +
            "\n" +
            "这是一个脚注[^1]。\n" +
            "\n" +
            "[^1]: 这是脚注的内容。\n" +
            "\n" +
            "## 数学公式\n" +
            "\n" +
            "数学公式示例：$E=mc^2$\n" +
            "\n" +
            "## 脚注\n" +
            "\n" +
            "[^1]: 这是脚注的内容。"
        resolve(data)
    })
}