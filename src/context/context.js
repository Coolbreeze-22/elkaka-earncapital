import React, { createContext, useState } from 'react'

export const EventContext = createContext();

export const Provider = ({ children }) => {
    
    const [ currentId, setCurrentId] = useState();
    // const [ deleteWarning, setDeleteWarning ] = useState();
    // const [ currentPage, setCurrentPage ] = useState(1);
    // const [ snackBar, setSnackBar ] = useState("");

    return(
        <EventContext.Provider value={{ currentId, setCurrentId }}>
            {children}
        </EventContext.Provider>
    )
}