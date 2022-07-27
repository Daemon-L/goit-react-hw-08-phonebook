import { ContactItem, Button, Text, ContactList } from './ContactList.styled'
import { useSelector } from 'react-redux';
import { getContactsFilter } from 'redux/contacts/selectors';
import { useFetchContactsQuery, useRemoveContactMutation } from 'redux/contacts/contactsApi';

const ContactsList = () => {
    const { data, isError } = useFetchContactsQuery();
    const [removeContact] = useRemoveContactMutation();
    const showContactsData = data && !isError;

    const filter = useSelector(getContactsFilter);

    if (!showContactsData) {
        return null
    }
           
    return (
        <ContactList>
            {data.map(
                ({ id, name, number }) =>
                name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
                    <ContactItem key={id}>
                        <Text>{name}: {number}</Text>
                        <Button type="button" onClick={() => removeContact(id)}>Delete</Button>
                    </ContactItem>
                )
            )}
        </ContactList>
    );
};
export default ContactsList;