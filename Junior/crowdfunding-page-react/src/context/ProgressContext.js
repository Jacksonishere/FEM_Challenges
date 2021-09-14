import React, { createContext, useState } from 'react'

export const ProgressContext = createContext();

const ProgressContextProvider = (props) => {
    const [progress, setProgress] = useState({
        total: 35000,
        backers: 3500,
    })
    return (
        <ProgressContext.Provider value={{progress, setProgress}}>
            {props.children}
        </ProgressContext.Provider>
    )
}

export default ProgressContextProvider
