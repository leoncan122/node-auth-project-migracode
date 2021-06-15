import React, {useState, useContext, createContext} from  'react';

export const UserContext = createContext(); 

// export function UserProvider () {
    
//     const [loged, setLoged] = useState(false)
    
//     return (
//         <UserContext.Provider value={{loged, setLoged}} /> 
//     )
// };

// export function useUser () {
//     let context = useContext(UserContext)
    
//     return context;
// };