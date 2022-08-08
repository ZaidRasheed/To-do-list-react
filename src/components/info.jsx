import React from "react";

function info() {
    
    function viewInfo(){
        document.getElementsByClassName("infoBox")[0].classList.remove("hide");
        document.getElementsByClassName("infoButton")[0].classList.add("hide");    
    }
    function exitInfo(){
        document.getElementsByClassName("infoBox")[0].classList.add("hide");
        document.getElementsByClassName("infoButton")[0].classList.remove("hide");    
    }
    return (
        <div className="info">
            <button className="infoButton" onClick={viewInfo}>!</button>
            <div className="infoBox hide">
                <button className="exitInfo" onClick={exitInfo}>X</button>
                <h4>Press on each item when done to strike through</h4>
            </div>

        </div>
    )
}
export default info;