
import {Col, Row} from "antd";
import styles from "./RecordItem.module.css";
import {Link} from "react-router-dom";


export interface RecordItemProps {
    id: number,
    createAt: Date,
    title: string,
}

export function RecordItem( {data}:{data:RecordItemProps} ) {

    const handleGetDetail = () => {
        alert("get detail, " + `${data.id}`)
    }

    return (
        <Row className={styles.recordContainer}>
            <Col className={styles.recordTime} span={4}>
                {data.createAt.toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                })}
            </Col>
            <Col>
                <Link className={styles.recordTitle} to={`/detail/${data.id}`}>{data.title} </Link>
            </Col>
        </Row>
    )
}

