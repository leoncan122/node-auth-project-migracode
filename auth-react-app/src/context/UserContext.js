import React, {useState, useContext, createContext, Children} from  'react';

export const UserContext = createContext(); 

export function UserProvider ({children}) { 
    const [loged, setLoged] = useState(false) 
    return (
        <UserContext.Provider value={{loged, setLoged}} > 
         {children}
        </UserContext.Provider > 
    )
};
