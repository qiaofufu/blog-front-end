import styles from './Code.module.css'
import {useState} from "react";

interface CodeProps {
    innerHtml: string
    code: string|undefined
}

export function Code(data:CodeProps) {
    const rowsData = data.innerHtml.split(/\n\r|\r|\n/g)
    let num = 0
    const rows = rowsData.map(item=> {
        num++
        return <TableRow lineNumber={num} data={item}/>
    })

    function handleCopy() {
        if (data.code) {
            window.navigator.clipboard.writeText(data.code).then(() => {
                alert("copy success")
            }).catch(err=>{
                console.log("copy failed")
            })
        }
    }

    return (
        <figure className={styles.figure}>
            <span className="copyCnt" onClick={handleCopy} aria-label={"Copy to clipboard!"}>Copy</span>
            <table>
                {rows}
            </table>
        </figure>
    )
}

interface TableRowProps {
    lineNumber: number
    data: string
}
function TableRow(props:TableRowProps) {
    return (
        <tr>
            <td className={styles.lineNumber}>
                {props.lineNumber}
            </td>
            <td className={styles.codeRow} dangerouslySetInnerHTML={{__html:props.data}}>

            </td>
        </tr>
    )
}