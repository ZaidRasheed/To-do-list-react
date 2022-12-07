import React, { useState } from "react";
import Item from "./itemList";
import InputArea from "./form";
import Info from "./info";
function App() {


    const [items, setItems] = useState([])

    function push(item) {
        setItems(prev => {
            return [...prev, item]
        })
    }

    function deleteItem(id) {
        setItems(prev => {
            return prev.filter((item, index) => {
                return index !== id;
            })
        })
    }


    return (
        <div>
            <Info />
            <div className="container">
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
                <InputArea
                    push={push}
                />
                <div className="list">
                    <ul>
                        {items.map((obj, i) => {
                            return (
                                <Item
                                    key={i}
                                    id={i}
                                    value={obj}
                                    delete={deleteItem}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;