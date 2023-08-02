import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    z-index: 1;
    position: fixed;
    width: 90%; 
    background-color: #ffffff;
    box-shadow:  0px 3px 7px 3px #e2e8f0;
`
export const HeaderSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`
export  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 220px;
`
export const AppLogo = styled.img`
    height: 70px;
    width: 150px;
`
export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
`
export const NavItem = styled.a`
    text-declaration: none;
    font-family: Lato, sans-serif;
    font-size: 18px;
    font-weight: 500;
    color:;
    cursor: pointer;
    &:hover {
        color: green;
        font-weight: 600;
    }
`
export const LoginButton = styled.button`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: green;
    background-color: #ffffff;
    border: 1px solid green;
    border-radius: 5px;
    padding: 10px;
    width: 90px;
    cursor: pointer;
` 
export const SignUpButton = styled.button`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    background-color: green;
    padding: 10px;
    width: 90px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`