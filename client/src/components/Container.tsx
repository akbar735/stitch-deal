import * as React from "react"
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(( { theme } ) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}))
export default function Container({...props}){
    return(
        <StyledDiv>
            {props.children}
        </StyledDiv>
    )    
}