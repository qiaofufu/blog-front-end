import {LoaderFunctionArgs} from "react-router-dom";
import {Marked} from "marked";
import markedKatex from "marked-katex-extension";

interface loaderParams {
    id: number
}

const codeRenderer = {
    code(code:string, infostring:string|undefined, escaped:boolean) {
        return `<pre><code class="language-${infostring}">${code}</code></pre>`
    }
}

export async function loader({params}:LoaderFunctionArgs<loaderParams>) {
    return await new Promise((resolve) => {
        const data =
           "```go\n" +
            "package main\n" +
            "\n" +
            "import \"fmt\"\n" +
            "\n" +
            "func main() {\n" +
            "\tfor i := 0; i <= 10; i ++ {\n" +
            "\t\tfmt.Println(\"hello, world\")\n" +
            "\t}\n" +
            "}\n" +
            "```"
        const marked = new Marked()
        marked.use(
            {
                gfm: true, // github 风格markdown 支持
                renderer: codeRenderer
            },
            markedKatex(), // 渲染latex

        )
        const html = marked.parse(data)
        resolve(html)
    })
}