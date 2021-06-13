import React, {useContext} from  'react';

function DataProvider (children) {
    
    const [info, setInfo] = useContext(null);

    const DataContext = React.createContext()
    //const data = useContext(DataContext);

    return (
        <DataContext.Provider value={info, setInfo}>
            <div>
                this is the {children}
            </div>
        </DataContext.Provider>
    );
}
export default DataProvider;