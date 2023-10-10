import {Col, Row} from "antd";
import styles from "./RecordItem.module.css";


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
            <Col className={styles.recordTitle}>
                <div onClick={handleGetDetail}>
                    {data.title}
                </div>
            </Col>
        </Row>
    )
}

