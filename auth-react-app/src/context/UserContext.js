import React, {useState, createContext} from  'react';

export const UserContext = createContext(); 

export function UserProvider ({children}) { 
    const [loged, setLoged] = useState(false) 
    return (
        <UserContext.Provider value={{loged, setLoged}} > 
         {children}
        </UserContext.Provider > 
    )
};

export const MenuContext = createContext();

export function MenuProvider ({children}) {
    const [menuActive, setMenuActive] = useState(false)
    const [loaded, setLoaded] = useState(null)

    return (
        <MenuContext.Provider value={{menuActive, setMenuActive, loaded, setLoaded}}>
            {children}
        </MenuContext.Provider>
    )
}
