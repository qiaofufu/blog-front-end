import {RecordItem, RecordItemProps} from "./RecordItem";

interface RecordTableProps {
    data: {
        year: number,
        records: RecordItemProps[],
    }
}

export function RecordTable(props:RecordTableProps) {
    const archives = props.data.records.map((item:RecordItemProps) => <RecordItem key={item.id} data={item}/>)
    return (
        <div>
            <h2>
                {props.data.year}
            </h2>
            <div>
                {archives}
            </div>
        </div>
    )
}