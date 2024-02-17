import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { loginApi } from '../ApiSection/allApi';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'

function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    console.log('login=', login);

    const navigate = useNavigate()
    //-------------login function---------------//
    const loginFunction = async (e) => {
        e.preventDefault()
        const { email, password } = login
        if (!email || !password) {
            toast.info('Please Fill the Form')
        } else if (!validator.isEmail(email)) {
            toast.error("invalid Email");
            setTimeout(() => {

            }, 2000)
        } else {
            const loginResult = await loginApi(login)
            console.log("loginResult=", loginResult);
            //session storage
            if (loginResult.status === 200) {
                sessionStorage.setItem("existLoginUser", JSON.stringify(loginResult.data.existLoginUser))
                sessionStorage.setItem("tocken", loginResult.data.tocken)
                toast.success('Login successfully')

                setLogin({
                    email: '',
                    password: ''
                })
                setTimeout(() => {
                    navigate('/home')

                }, 3000)

            } else {
                toast.error(loginResult.response.data)
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
                        <h2 className='text-center text-warning mt-5'>Login Form</h2>
                        <Form className='p-3'>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} placeholder=" Enter Email Id" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="password" className='form-control' value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} placeholder=" Enter Password" />
                            </Form.Group>


                            <div>
                                <button className='btn btn-warning' onClick={loginFunction}>Login</button>
                                <p className=' mt-3' >New User ?Click here to <Link to={'/'}>Register</Link></p>
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

export default Login
