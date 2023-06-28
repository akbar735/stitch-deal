import * as React from 'react'
import { useParams } from 'react-router-dom'
import AddProduct from './AddProduct'

export default function EditProduct(){
    const { productId } = useParams()
    console.log("productId", productId)
    return (
        <AddProduct productId = {productId || ''} />
    )
}