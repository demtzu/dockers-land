import React from 'react'
import styled from 'styled-components'
import DockersLogo from "./DockersLogo"

const NavContainer = styled.div`
  height: 80px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
   @media (max-width: 1024px) {
    height: 100px;
  }
`
const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: start;
  }
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  color: #222;
    @media (max-width: 1024px) {
      width: 100%;
    }
`

const Link = styled.p`
  cursor: pointer;
  color: ${({page, currentPage}) => page === currentPage ? 'white' : '#EC6D48'};
  background-color: ${({page, currentPage}) => page !== currentPage ? 'white' : '#EC6D48'};
  padding: 4px 16px;

  border-radius: 4px;
  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.1), 0 1px 7px 0 rgba(0,0,0,0.1), 0 3px 1px -1px rgba(0,0,0,0.1);
  }
`

const NavBar = ({setPage, page}) => {
    return (
        <NavContainer>
            <NavContent  className="container">
                <DockersLogo setPage={setPage}/>
                <LinkContainer>
                    <Link page={'calculator'} currentPage={page} onClick={() => setPage('calculator')}>Convertisseur</Link>
                    <Link page={'reminders'} currentPage={page} onClick={() => setPage('reminders')}>Le chômage Kezako?</Link>
                </LinkContainer>
            </NavContent>
        </NavContainer>
    )
}

export default NavBar