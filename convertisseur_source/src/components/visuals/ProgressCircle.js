import React from 'react'
import styled from "styled-components"
import CircularProgress  from "@material-ui/core/CircularProgress";

const BigProgress = styled(CircularProgress)`
  width: 100px !important;
`
const Label = styled.p`
  position: relative;
  bottom: 56px;
  left: ${({value}) => value === 100 ? '60px' : '64px'};
  font-size: 1.2rem;
`

const ProgressCircle = ({value}) => {
    return (
        <div>
            <BigProgress className='orange-txt' variant="static" value={value} />
            <Label  value={value}  className='orange-txt'>{Math.round(value)}%</Label>
        </div>
    )
}

export default ProgressCircle