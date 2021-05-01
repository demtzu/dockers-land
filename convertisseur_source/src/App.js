import React, { useState } from 'react'
import './App.css'
import FormContainer from "./components/FormContainer"
import styled from 'styled-components'
import NavBar from "./components/NavBar"
import Infos from "./components/steps/Infos"
import FirstStep from "./components/steps/FirstStep"

const MainContainer = styled.div`
  margin-top: 32px;
`

function App() {
    const [page, setPage] = useState('home')


    const changePage = () => setPage('reminders')

    return (
        <>
            <NavBar setPage={setPage} page={page}/>
            <div className="App container">
                <MainContainer>
                    {
                         page === 'home' && <FirstStep setPage={setPage}/>
                    }
                    {
                        page === 'calculator' && <FormContainer setPage={changePage} step={1}/>
                    }
                    {
                        page === 'reminders' && <Infos/>
                    }
                </MainContainer>
            </div>
        </>
    );
}

export default App
