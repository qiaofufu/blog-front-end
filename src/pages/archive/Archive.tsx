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
    const archives = data.map((item) => <RecordItem data={item}/>)
    return (
        <div>
            Archive
            <div>
                {archives}
            </div>
        </div>
    )
}


interface RecordItemProps {
    id: number,
    createAt: Date,
    title: string,
}

function RecordItem( {data}:{data:RecordItemProps} ) {
    return (
        <div>
            <div>
                {data.createAt.toLocaleDateString()}
            </div>
            <div>
                {data.title}
            </div>
        </div>
    )
}