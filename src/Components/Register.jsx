import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { registerApi } from '../ApiSection/allApi';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'

function Register() {
    const [registered, setRegistered] = useState({
        username: '',
        email: '',
        password: ''
    })
    console.log('registered=', registered);
    const navigate = useNavigate()

    //-----------------Register section---------------------//
    const registerFunction = async (e) => {
        e.preventDefault()
        const { username, email, password } = registered
        if (!username || !email || !password) {
            toast.info('Please fill the form')
        } else if (!validator.isEmail(email)) {
            toast.error("invalid Email");
            setTimeout(() => {

            }, 2000)
        } else {

            const result = await registerApi(registered)
            console.log('result=', result);

            if (result.status === 200) {
                toast.success(`${result.data.username} registed`)
                setRegistered({
                    username: '',
                    email: '',
                    password: ''
                })
                setTimeout(() => {
                    navigate('/login')
                }, 2002)

            }
            else {
                toast.error(`${result.response.data}`)
            }


        }
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center shadow p-5 container mt-5 rounded flex-column mt-5'>
                <div className='row shadow rounded'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <img className='w-100' src="https://aws.vedmarg.com/wp-content/uploads/2022/09/ved-blog-1.png" alt="" />

                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <h2 className='text-center text-warning mt-5'>Register Form</h2>
                        <Form className='p-3'>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" value={registered.username} onChange={(e) => setRegistered({ ...registered, username: e.target.value })} placeholder=" Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" value={registered.email} onChange={(e) => setRegistered({ ...registered, email: e.target.value })} placeholder=" Enter Email Id" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="password" value={registered.password} onChange={(e) => setRegistered({ ...registered, password: e.target.value })} className='form-control' placeholder=" Enter Password" />
                            </Form.Group>


                            <div>
                                <button className='btn btn-warning' onClick={registerFunction}>Register</button>
                                <p className=' mt-3' >Alreaddy a User ?Click here to <Link to={'/login'}>Login</Link></p>
                            </div>


                        </Form>
                    </div>
                    <div>

                    </div>

                </div>

            </div>
            <ToastContainer position="top-center" theme="colored" autoClose={2000} />

        </div>
    )
}

export default Register
