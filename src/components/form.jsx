import React, { useState } from "react";

function InputArea(props) {

    const [text, setText] = useState("");

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

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
                    props.push(capitalizeFirstLetter(text));
                    setText("");
                }
            }}>
                Add
            </button>
        </div>
    )
}
export default InputArea;