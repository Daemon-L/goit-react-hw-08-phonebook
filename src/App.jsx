import React, { useEffect } from "react";
import { Container } from './App.styled';

import { useDispatch, useSelector } from "react-redux";
import { authOperations } from './redux/auth/authOperations';
import { authSelectors } from './redux/auth/authSelectors';

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
import { Contacts } from './components/Phonebook/Phonebook';

import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';


export const App = () => {

    // const dispatch = useDispatch();

    // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

    // useEffect(() => {
    //     dispatch(authOperations.fetchCurrentUser());
    // }, [dispatch]);

    return (
        // !isFetchingCurrentUser && (  
            <Container>
                <AppBar />
                <Routes>
                    {/* <Suspense fallback = {<p>Loading ...</p>}> асинхронные компоненты добавлять?   */}  
                        {/* <Route index element={<Home />} /> */}
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/" element={
                            <PublicRoute redirectTo = "/contacts">
                                <Home />
                            </PublicRoute>
                        } />

                        <Route path="/contacts" element={
                            <PrivateRoute >
                                <Contacts />
                            </PrivateRoute>
                        } />

                        {/* <Route path="/login" element={<Login />} /> */}
                        <Route path="/login" element={
                            <PublicRoute redirectTo = "/contacts" restricted>
                                <Login />
                            </PublicRoute>
                        } />

                        {/* <Route path="/register" element={<CreateUser />} /> */}
                        <Route path="/register" element={
                            <PublicRoute restricted>
                                <CreateUser />
                            </PublicRoute>
                        } />
                                    
                    <Route path="*" element={<Navigate to="/" />} />
                {/* </Suspense> */}
                </Routes>
            </Container>
        // )
    );
};

                // <PublicRoute path="/">
                //     <Home />
                // </PublicRoute>

                // <PublicRoute path="/login" restricted>
                //     <Login />
                // </PublicRoute>

                // <PublicRoute path="/register" restricted>
                //     <CreateUser />
                // </PublicRoute>