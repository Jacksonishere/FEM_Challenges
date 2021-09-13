import React from 'react'
import { useState, createContext } from 'react'

export const TriggerContext = createContext();

const TriggerContextProvider = (props) => {
    const [idTrigger, setIdTrigger] = useState(-2);

    return (
        <TriggerContext.Provider value={{idTrigger, setIdTrigger}}>
            {props.children}
        </TriggerContext.Provider>
    )
}

export default TriggerContextProvider;
