import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({ children }) => {

    const userData = {
        username: "Rohini Koli",
        age: 24,
        city: 'Delhi'
    }

    return (
        <div>
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext