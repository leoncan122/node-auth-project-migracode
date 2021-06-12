import React from 'react';

function SubmitButton (props) {
    
    const style = {backgroundColor: "#5b99df", marginTop: "3%", width: "90px", borderRadius: "4px", borderStyle: "none"}

    return <button style={style} onClick={props.handleForm}>Submit</button>
};
export default SubmitButton;