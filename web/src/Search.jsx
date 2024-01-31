import React from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Search</h1>
        </div>
    )
}

export default Search
