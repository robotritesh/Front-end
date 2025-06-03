import React, { useContext }  from 'react'
import { DataContext } from '../context/DataProvider'

export  default function DataComponent(){
    const {state, fetchData} = useContext(DataContext)

    return(
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {state.loading && <p>Loading...</p>}
            {state.error && <p>Error:{state.error}</p>}
            {state.data && state.data.map(post => <p key={post.id}>{post.title}</p>)}
        </div>
    )
}