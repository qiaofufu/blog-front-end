import {useLoaderData} from "react-router-dom";
import hljs, {HighlightResult} from "highlight.js"
import styles from './Detail.module.css'
import React, {useEffect} from "react";
import "./highlight.css"
import {Code} from "./component/Code";
import {renderToString} from "react-dom/server";
import {hydrate} from "react-dom";
import {hydrateRoot} from "react-dom/client";

// warpCode 包装highlight 添加行号，添加copy按钮
function warpCode(result: HighlightResult) {
    console.log(renderToString(<Code innerHtml={result.value} code={result.code}/>))
    result.value = renderToString(<Code innerHtml={result.value} code={result.code}/>)
}


export function Detail() {
    const loaderData = useLoaderData() as string;
    useEffect(() => {
        hljs.addPlugin({
            'after:highlight': warpCode,
        })
        hljs.highlightAll()
        const copyElems = document.getElementsByClassName("copyCnt")

    },[loaderData])

    return (
        <div>
            <div id="content" className={styles.content} dangerouslySetInnerHTML={{__html:loaderData}}/>
        </div>
    )
}
