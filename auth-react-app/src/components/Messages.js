import React, { useEffect } from 'react';

function Messages () {
    
    let token = localStorage.getItem("token")
    useEffect ( () => {
        fetch('http://localhost:4000/user/messages', {
            method: 'get',
            headers: {
                'Authorization': `bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [token])
    
    return (
        <div>
            <h3>Messages</h3>
            <p></p>
        </div>
    )
};
export default Messages;