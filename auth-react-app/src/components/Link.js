import React from 'react';
import { NavLink } from 'react-router-dom';

function Link(props) {
    const {path, text} = props

    return (
        <>
            <NavLink to={path}
                    activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>{text}
            </NavLink>
        </>    
    )
    
}
export default Link;