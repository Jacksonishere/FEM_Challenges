import React from 'react'
import { createContext, useState } from 'react'

export const OverlayContext = createContext();

const OverlayContextProvider = (props) => {
    const [toggleOverlay, setToggleOverlay] = useState(false);

    return (
        <OverlayContext.Provider value={{toggleOverlay, setToggleOverlay}}>
            {props.children}
        </OverlayContext.Provider>
    )
}

export default OverlayContextProvider;
