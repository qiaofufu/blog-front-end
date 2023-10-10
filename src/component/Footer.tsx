import styles from './Footer.module.css'
import {Nav} from "./Nav";
export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
                Copyright © 2022-2023 Qiao
            </div>
            <div className={styles.footerRight}>
                <Nav itemClass={styles.navItem}></Nav>
            </div>
        </div>
    )
}