import React, { useState } from "react";

function InputArea(props) {

    const [text, setText] = useState("");

    function update(event) {
        setText(event.target.value);
    }

    return (
        <div className="form">
            <input
                onChange={update}
                name="item"
                type="text"
                value={text}
                placeholder='add item'
            />
            <button className="add" onClick={() => {
                if (text.length > 0) {
                    props.push(text)
                    setText("");
                }
            }}>
                Add
            </button>
        </div>
    )
}
export default InputArea;