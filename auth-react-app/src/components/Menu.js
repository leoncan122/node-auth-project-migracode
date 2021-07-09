import React, {useContext} from 'react';
import {MenuContext} from '../context/UserContext';


function Menu () {
    const {loaded, setLoaded} = useContext(MenuContext)
        
    const Component = Object.values(loaded)[0]

    // function withComponent (Component) {
    //     return () => 
    //         class extends React.Component {
                
    //             render (){
    //                 return (
    //                     <div>
    //                         <Component />
    //                     </div>
    //                 )
    //             }
    //         }
        
    // }

    return (
        <>
            <Component />
        </>
    )
};

export default Menu;