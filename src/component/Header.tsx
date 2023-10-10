import styles from './Header.module.css'
import {Nav} from "./Nav";
import {Col, Row } from "antd";
import {Link} from "react-router-dom";



export function Header() {
    return (
        <div className={styles.headerContainer}>
            <Row>
                <Col>
                    <Link to={"/"}>
                        <img className={styles.icon} src={"http://162.14.115.114:8000/blog/images/logo.png"} width={50} alt={"icon"}/>
                    </Link>
                </Col>
                <Col className={styles.navContainer}>
                    <Row>
                        <Col>
                            <div className={styles.title}>Qiao</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav className={styles.nav} itemClass={styles.navItem}></Nav>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}