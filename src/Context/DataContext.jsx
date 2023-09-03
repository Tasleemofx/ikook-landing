import { createContext, useState } from "react";


const DataContext = createContext({})


export const DataContextProvider =({children})=>{

    const [currentData, setCurrentData] = useState("Chef at Home")
    return (
    <DataContext.Provider  value={{ currentData, setCurrentData }}>
        {children}
    </DataContext.Provider>)
}

export default  DataContext