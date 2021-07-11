import React, {useState, useEffect} from 'react'

function Profile () {
    const [profile, setProfile] = useState({})

    let token = localStorage.getItem("token")
    //let profile = localStorage.getItem("userProfile")
    

    useEffect ( () => {
        //const x = JSON.parse(profile)
        
        const fetchedData = fetch(`http://localhost:4000/user/profile`,{
            method: 'get',
            headers: {
            'Authorization': `bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setProfile(data)
        })
    
    },[token])
    return (
        <>
        
        <h1>{profile.name}</h1>
        <p>{profile.email}</p>
        
        </>
    )
}
export default Profile