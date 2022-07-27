import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCallback, useState } from "react";

import { useDispatch } from "react-redux";
// import { loginThunk } from '../redux/auth/authSlice';

import { authOperations } from '../redux/auth/authOperations';

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }    
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Login</h2>    
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} type="email" name='email' placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" name='password' placeholder="Password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

// const Login = () => {
//     const dispatch = useDispatch();
//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     });
//     const onChange = useCallback(evt => {
//         setForm(prevForm => ({
//             ...prevForm,
//             [evt.target.name]: evt.target.value
//         }));
//     }, [setForm]);
//     const onSubmit = useCallback((evt) => {
//         evt.preventDefault();
//         dispatch(loginThunk(form))
//     }, [form, dispatch]);
//     return (
//         <div>
//             <h2>Login</h2>    
//             <Form onSubmit={onSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control value={form.email} type="email" name='email' placeholder="Enter email" onChange={onChange}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control value={form.password} type="password" name='password' placeholder="Password" onChange={onChange}/>
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Login
//                 </Button>
//             </Form>
//         </div>
//     );
// };
// export default Login;