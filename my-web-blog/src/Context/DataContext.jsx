import React,{createContext, useState} from "react";



export const DataContext = createContext(null);

const DataContextProvider = ({children}) => {
    const [valueContent, setValueContent] = useState("Welcome User");

    const [newValueContent, setnewValueContent] = useState({})
    
    const updateValueName = (valuename) =>{
        setValueContent(valuename);
    }
    const updateValueContent = (value) =>{
        setnewValueContent(value);
    } 

    const contextValue = {valueContent,updateValueName,newValueContent,updateValueContent};
    return(
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;