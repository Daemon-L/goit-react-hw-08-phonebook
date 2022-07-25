import { Text } from './UserMenu.styled.jsx'
import Button from 'react-bootstrap/Button';
import { ContactItem, } from '../../components/ContactList/ContactList.styled.jsx'

import { useDispatch, useSelector } from "react-redux";
import { authOperations } from '../../redux/auth/authOperations';
import  authSelectors  from "../../redux/auth/authSelectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <ContactItem>
            <Text>Welcom, {name}!</Text>
            <Button variant="primary" type="button" onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </Button>
        </ContactItem>
    );

};
export default UserMenu;

