import * as React from "react"
import { styled } from "@mui/material"

const StyledDiv = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const FlexCenteredDiv = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))
export function FlexCentered({...props}){
    return (
        <FlexCenteredDiv {...props}>{props.children}</FlexCenteredDiv>
    )
}

export default function FlexContainer({...props}){
    return (
        <StyledDiv {...props}>{props.children}</StyledDiv>
    )
}