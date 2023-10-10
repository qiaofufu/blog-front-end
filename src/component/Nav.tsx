import styles from './Nav.module.css'
import {Divider, Space} from "antd";
import {Link} from "react-router-dom";
interface NavProps {
    className ?: string|undefined
    itemClass ?: string|undefined
}
export function Nav({className, itemClass}:NavProps) {
    const nav = [
        {
            title: "Home",
            route: "/",
        },
        {
            title: "Author",
            route: "/author",
        },
        {
            title: "Writing",
            route: "/writing",
        },
        {
            title: "Archive",
            route: "/archive",
        },
        {
            title: "Tags",
            route: "/tags",
        }
    ]
    const navItem = nav.map((item) => (<Link key={item.title} className={itemClass} to={item.route}>{item.title}</Link>));
    return (
        <div className={`${styles.navContainer} ${className}`}>
            <Space direction={"horizontal"} size={"middle"} split={<Divider type={"vertical"}/>}>
                {navItem}
            </Space>
        </div>
    )
}