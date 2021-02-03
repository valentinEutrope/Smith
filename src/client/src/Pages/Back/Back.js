import React, { useState } from "react";

const Back = () => {
    const [message, setMessage] = useState("No message from server");

    return (
        <div>
            <button onClick={() => {
                fetch('http://localhost:8080/test')
                    .then(res => res.json())
                    .then((result) => {
                        setMessage(result.message)
                    })
            }}>Get back message</button>
            <span>{ message }</span>
        </div>
    )
}

export default Back;