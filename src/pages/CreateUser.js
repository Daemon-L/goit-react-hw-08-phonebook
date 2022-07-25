import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";

import { authOperations } from '../redux/auth/authOperations';

export default function RegisterUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
               return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Create User</h2> 
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" name='name' placeholder="Enter name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} type="email" name='email' placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" name='password' placeholder="Password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

// import { createUserThunk } from '../redux/auth/authSlice';
// 
// const CreateUser = () => {
//     const dispatch = useDispatch();
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });
// 
//     const onChange = useCallback(evt => {
//         setForm(prevForm => ({
//             ...prevForm,
//             [evt.target.name]: evt.target.value
//         }));
//     }, [setForm]);
// 
//     const onSubmit = useCallback((evt) => {
//         evt.preventDefault();
//         dispatch(createUserThunk(form))
//     }, [form, dispatch]);
// 
//     return (
//         <div>
//             <h2>Create User</h2> 
//             <Form onSubmit={onSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control value={form.name} type="text" name='name' placeholder="Enter name" onChange={onChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control value={form.email} type="email" name='email' placeholder="Enter email" onChange={onChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control value={form.password} type="password" name='password' placeholder="Password" onChange={onChange}/>
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Sign Up
//                 </Button>
//             </Form>
//         </div>
//     );
// };
// export default CreateUser;