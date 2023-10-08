import styles from './Header.module.css'
import {Space} from "antd";
import {Link} from "react-router-dom";
export function Header() {
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
            title: "tags",
            route: "/tags",
        }
    ]
    const navItem = nav.map((item) => (<Link className={styles.headerItem} to={item.route}>{item.title}</Link>));
    return (
        <div className={styles.headerComponent}>
            <Space direction={"horizontal"} size={"large"}>
                {navItem}
            </Space>
        </div>
    )
}