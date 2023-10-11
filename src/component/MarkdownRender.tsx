import {useEffect, useRef} from "react";
import {Marked} from "marked";
import markedKatex from "marked-katex-extension";
import {markedHighlight} from "marked-highlight"
import "../highlight.css"
import styles from './MarkdownRender.module.css'
import hljs, {HighlightResult} from "highlight.js";
import {renderToString} from "react-dom/server";


const marked = new Marked(
    {
        gfm: true,
    },
    markedKatex(),
    markedHighlight({
        langPrefix: "hljs language-",
        highlight(code:string, lang:string) {
            console.log(code, lang)
            const language = hljs.getLanguage(lang)?lang:'plaintext';
            return hljs.highlight(code, {language}).value
        }
    }))

// warpCode 包装highlight
function warpCode(result: HighlightResult) {
    console.log(renderToString(<Code innerHtml={result.value} code={result.code}/>))
    result.value = renderToString(<Code innerHtml={result.value} code={result.code}/>)
}
hljs.addPlugin({
    "after:highlight": warpCode
})

interface MarkdownRenderProps {
    source: string
}

export function MarkdownRender(props:MarkdownRenderProps) {
    const contentRef = useRef<HTMLDivElement| null>(null);
    useEffect(() => {
        if(contentRef.current) {
            contentRef.current.innerHTML = marked.parse(props.source) as string
            const copyBlocks = document.getElementsByClassName('copyBtn')
            if(copyBlocks){
                for (let i = 0; i < copyBlocks.length; i ++) {
                    copyBlocks[i].addEventListener('click', () => {
                        let codeText = document.activeElement?.querySelector(".codeDetail")?.innerHTML
                        if(codeText) {
                            window.navigator.clipboard.writeText(codeText).then((resolve) => {
                                alert("success copy")
                            }).catch(err=>{
                                console.log("copy failed", err)
                            })
                        }
                    })
                }
            }
        }
    }, [props.source])

    return (
        <div  className={styles.content} ref={contentRef}></div>
    )
}



interface CodeProps {
    innerHtml: string
    code: string|undefined
}

export function Code(data:CodeProps) {
    const tablesRows = WarpCodeRows(data.innerHtml)
    return (
        <figure className="figure">
            <span className="copyBtn" >Copy<p className="codeDetail">{data.code}</p></span>
            <table>
                {tablesRows}
            </table>
        </figure>
    )
}


function WarpCodeRows(data:string) {
    const rowsData = data.split(/\n\r|\r|\n/g)
    let lineNumber = 0
    return rowsData.map(item => {
        lineNumber++
        return (
            <tr>
                <td className="lineNumber">
                    {lineNumber}
                </td>
                <td className="codeRow" dangerouslySetInnerHTML={{__html:item}}>

                </td>
            </tr>
        )
    })
}
