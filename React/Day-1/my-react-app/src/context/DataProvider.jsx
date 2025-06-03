import React, {createContext, useState} from "react";

export const DataContext = createContext();

export function DataProvider({ children }){
    const [state, setState] = useState({
        loading:false,
        error:null,
        data:null
    })


    //fech the data 
    async function fetchData(){
        setState({...state,loading:true})

        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setState({...state, loading:false, data:result})
        } catch(error){
        setState({...state,loading:false,data:null,error:error.message})
        }
    }

    //use Provider
    return(
        <DataContext.Provider value={{state, fetchData}}>
            {children}
        </DataContext.Provider>
    )
} 