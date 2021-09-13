import React, {useState, createContext} from 'react'

export const ModalOverlayContext = createContext()

const ModalOverlayContextProvider = (props) => {
    const [status, setStatus] = useState("hidden");

    return (
        <ModalOverlayContext.Provider value={{status, setStatus}}>
            {props.children}
        </ModalOverlayContext.Provider>
    )
}

export default ModalOverlayContextProvider
