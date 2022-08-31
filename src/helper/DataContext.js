import { createContext } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) =>{
    
    // Note: Need to include the States of Recepies & Ingredients
    const myRecepies = [];

    return(
        <DataContext.Provider value={{myRecepies}}>
            {children}
        </DataContext.Provider>
    );
};
export default DataProvider;