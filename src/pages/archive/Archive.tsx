
import {RecordItem} from "./component/RecordItem"
import {RecordTable} from "./component/RecordTable";

export function Archive() {
    const data = [
        {
            id: 1,
            createAt: new Date("2023-10-7 12:00:00"),
            title: "Mysql 索引",
        },
        {
            id: 2,
            createAt: new Date("2023-9-21 12:00:00"),
            title: "TCP 粘包",
        },
        {
            id: 3,
            createAt: new Date("2023-9-7 12:00:00"),
            title: "HTTPS-TLS 握手",
        },
    ]
    return (
        <div>
            <RecordTable data={{year:2023, records:data}}/>
        </div>
    )
}


