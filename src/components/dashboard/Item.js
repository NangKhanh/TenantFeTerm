import { useEffect, useState } from "react"

const Item = (props) => {
    const [list, setList] = useState([])
    useEffect(() => {
        setList(props.list)
    }, [props])
    return (
        <>
            <ul>
                {list?.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Item