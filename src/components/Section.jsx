import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {

    const username = useContext(DataContext)
    

    return (
        <div>
            <h1>Section {username.age}</h1>
        </div>
    )
}

export default Section