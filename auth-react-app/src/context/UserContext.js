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

    return (
        <MenuContext.Provider value={{menuActive, setMenuActive}}>
            {children}
        </MenuContext.Provider>
    )
}
