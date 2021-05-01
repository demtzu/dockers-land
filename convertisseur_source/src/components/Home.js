import React from 'react'
import styled from "styled-components"
import FirstStep from "./steps/FirstStep"


const MarginContainer = styled.div`
  margin-top: 40px;
`

const Home = (setPage) => {
    return (
        <MarginContainer>
            <FirstStep setPage={ setPage }/>
        </MarginContainer>
    )
}