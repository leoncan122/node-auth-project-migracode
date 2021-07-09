import React, { useState,useEffect } from 'react';


function Messages () {
    const [messages, setMessages] = useState(null)

    let token = localStorage.getItem("token")
    let profile = localStorage.getItem("userProfile")
    

    useEffect ( () => {
        const x = JSON.parse(profile)
        
        const fetchedData = fetch(`http://localhost:4000/user/2/messages`)
        .then(res => res.json())
        .then(data => {
            setMessages(data)
        })
        
    },[profile])

    return (
        <div>
            <h3>Messages</h3>
            { messages &&
                messages.map( msg => (
                    <div>
                        {msg.send_date}
                    </div>
                ))
            }
        </div>
    )
};
export default Messages;