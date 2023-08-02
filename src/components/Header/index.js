import {Link} from 'react-router-dom'
import {HeaderContainer, HeaderSubContainer, ButtonContainer, NavBar, AppLogo, NavItem, LoginButton, SignUpButton} from './styledComponent'
import './index.css'

const Header = () => {

    return(
        <HeaderContainer>
            
            <HeaderSubContainer>
            <AppLogo src="https://assets.travclan.com/unsafe/0x100/smart/https://s3.ap-south-1.amazonaws.com/com.travclan.b2b2c/logo/2140/1677066538.359184/0.5599160827188064/Transparent_-_Travel_Unbounded-06.png" alt="App Logo" />
                <NavBar>
                    <Link className="link-item" to="/"><NavItem hfer="/">Home</NavItem></Link>
                    
                    <NavItem hfer="">Packages</NavItem>
                    <NavItem hfer="">Festivals</NavItem>
                    <NavItem hfer="">Blogs</NavItem>
                    <NavItem hfer="">Know Us</NavItem>
                </NavBar>
                
            </HeaderSubContainer>
            <ButtonContainer>
                <LoginButton>Login</LoginButton>
                <SignUpButton>Signup</SignUpButton>
            </ButtonContainer>

        </HeaderContainer>
    )
}
export default Header