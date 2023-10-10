
import {Space, Tooltip} from "antd";
import { Icon } from 'tdesign-icons-react';
import styles from "./Home.module.css"

export function Home() {
    const data = [
        {
            icon: "logo-github",
            comment: "logo-github",
            url: "https://github.com/qiaofufu",
        },
        {
            icon: "mail",
            comment: "email",
            url: "mailto:cillhuhu0403@gmail.com",
        },
    ]
    const contacts = []
    let cnt = 0
    for (let i = 0; i < data.length; i ++) {
        if (i !== 0) {
            contacts.push(<span key={cnt}>and</span>)
            cnt++
        }
        contacts.push(<Contact key={cnt} data={data[i]}/>)
        cnt++
    }

    return (
            <div className={styles.contactContainer}>
                <Space>
                    Find me on {contacts}.
                </Space>
            </div>
    )
}

interface ContactProps {
    icon: string,
    comment: string,
    url: string,
}

function Contact({data}:{data:ContactProps}) {
    return (
        <div>
            <a href={data.url}>
                <Tooltip title={data.comment}>
                    <Icon name={data.icon} className={styles.contactItem}/>
                </Tooltip>
            </a>
        </div>
    )
}