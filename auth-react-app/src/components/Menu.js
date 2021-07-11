import React, {useContext} from 'react';
import {MenuContext} from '../context/UserContext';

function withComponent (Component) {
    const hoc = 
        class extends React.Component {  
            constructor (props) {
                super(props) 
                this.state = {
                    valor : props.data
                }
            }   

            render (){
                return (
                    <div>
                        <Component 
                        {...this.props}
                        />
                    </div>
                )
            }
        } 
    return hoc
}
function Menu (props) {
    
    const {loaded, setLoaded} = useContext(MenuContext)
    const Component = Object.values(loaded)[0]

    

    return (
        <div>
            <Component />
        </div>
    )
};

export default Menu;