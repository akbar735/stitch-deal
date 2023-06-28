import * as React from 'react'
import { useRouteError } from 'react-router-dom'
import { Mapping } from '../types/NoPageTypes'
import { ErrorResponse } from '../types/NoPageTypes'
import './NoPage.css'

const classMapping: Mapping  = {
    404: 'page-not-found'
}

export default function NoPage(){
   
    const error: ErrorResponse = useRouteError() as ErrorResponse
    return (
        <div className={`container ${classMapping[error?.status] ?? 'page-not-found'}`}>
           
        </div>
    )
}