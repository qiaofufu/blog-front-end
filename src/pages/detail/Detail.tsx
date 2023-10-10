import {useLoaderData} from "react-router-dom";
import hljs, {HighlightResult} from "highlight.js"
import "highlight.js/styles/github.css"
import styles from './Detail.module.css'
import {useEffect} from "react";


function warpCode(data: { el: Element, result: HighlightResult, text: string}) {
    console.log(data)
}

export function Detail() {
    const loaderData = useLoaderData() as string;
    
    hljs.addPlugin({
        'after:highlightElement': warpCode,
    })

    useEffect(() => {
        hljs.highlightAll()
    },[loaderData])

    return (
        <div>
            <div className={styles.content} dangerouslySetInnerHTML={{__html:loaderData}}/>
        </div>
    )
}
