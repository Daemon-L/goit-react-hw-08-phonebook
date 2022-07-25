import React from "react";
import { Container } from './App.styled';
// import ContactForm from './components/ContactForm/Form';
// import ContactsList from './components/ContactList/ContactsList';
// import Filter from './components/ContactsFilter/Filter';
// import Loader from './components/Loader/Loader';

// import { useFetchContactsQuery } from "./redux/contacts/contactsApi";

import { Routes, Route, Navigate } from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";

import Home from './pages/Home';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import { Phonebook } from './components/Phonebook/Phonebook';

export const App = () => {
    return (
        <Container>
            <AppBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/contacts" element={<Phonebook />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<CreateUser />} />
                
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
    );
};