import React from "react";
import { Container, Error } from '../../App.styled.jsx';
import ContactForm from '../ContactForm/Form';
import ContactsList from '../ContactList/ContactsList';
import Filter from '../ContactsFilter/Filter';
import Loader from '../Loader/Loader.jsx';

import { useFetchContactsQuery } from "../../redux/contacts/contactsApi";

export const Phonebook = () => {
    const { isError, error, isFetching} = useFetchContactsQuery();
      
    return (
        <Container>

            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />

            {isFetching && <Loader />}
            {isError && <Error>{error.status}</Error>}
            <ContactsList />
        </Container>
    );
};