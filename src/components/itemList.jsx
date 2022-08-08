import React, { useState } from "react";

function Item(props) {

    let style = { textDecorationLine: "line-through" };
    const [state, setState] = useState(false)
    function strike() {
        setState(state ? false : true)
    }

    return (
        <div className="item">
            <div onClick={strike}>
                <li style={state ? style : null}
                >{props.value}</li>
            </div>
            <button onClick={()=>{
                props.delete(props.id)
            }} id="z">
                x
            </button>
        </div>
    )
}
export default Item;