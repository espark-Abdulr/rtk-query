import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetByIdQuery } from './store/productApi'

const ID = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetByIdQuery(id)
    if (isLoading) {
        return (
            <h1>Loadingggg....</h1>
        )
    }
    return (
        <div>
            <h1>{data?.title}</h1>
        </div>
    )
}

export default ID
