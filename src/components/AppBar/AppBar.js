import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav, Link } from './AppBar.styled'
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from "../../redux/auth/authSelectors";



function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    // console.log(isLoggedIn);
    
    return (
        <header>
            <Nav>
                <Link to="/">Home</Link>

                {/* <Link to="/contacts">Contacts</Link> */}
                {isLoggedIn && (
                    <Link to="/contacts">Contacts</Link>
                )}
                                
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
                
                {/* <Link to="/login">Login</Link>
                <Link to="/register">Register</Link> */}
                {/* <UserMenu /> */}
            </Nav>
            <Outlet />
        </header>
    );
}
export default AppBar;