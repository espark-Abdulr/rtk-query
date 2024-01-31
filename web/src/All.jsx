import React from 'react'
import { useGetAllProductsQuery } from './store/productApi'
import { Link } from 'react-router-dom'
import './App.css'


const All = () => {
    const { data, isLoading, isError, error } = useGetAllProductsQuery()

    if (isLoading) {
        return (
            <h1>Loadinggg....</h1>
        )
    }
    if (isError) {
        return (
            <h1>{error}</h1>
        )
    }
    return (
        <div>
            {data.products.map((eachProduct, index) => (
                <Link to={`/products/${eachProduct.id}`} key={index}>
                    <h1 className='product'>{eachProduct?.title}</h1>
                </Link>
            ))}
        </div>
    )
}

export default All
