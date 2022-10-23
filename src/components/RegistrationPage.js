import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components'
import swal from 'sweetalert'

const LoginTringle = styled.div`
    width: 0;
  padding: 50px 0px;
  margin-right: auto;
  margin-left: auto;
  border: 12px solid transparent;
  border-bottom-color: #28d;
  `;

const RegistrationInput = styled.input`
transition: 1s;
&:focus{
  border-color: #ed15e6;
  box-shadow: 0 0 10px 0 #ed15e6;
}
`;

const RegistrationPage = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        mobile_number: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password, ConfirmPassword, mobile_number } = inpval;

        if (name === "") {

            toast.error(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (mobile_number === "") {
            toast.error('!! Please Enter Mobile Number !!', {
                position: "top-center",
            });
        } else if (mobile_number.length < 10) {
            toast.error('!! Please enter Contact Number 10 Digit !!', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('!! Please Enter Password !!', {
                position: "top-center",
            });
        } else if (ConfirmPassword === "") {
            toast.error('Please Enter Confirm Password !!', {
                position: "top-center",
            });
        }
        else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else if (password !== ConfirmPassword) {
            toast.error('!! Password Not Match !!', {
                position: "top-center",
            });
        } else {
            swal(`Resistration Successfully...!`, "", "success");
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("user_details", JSON.stringify([...data, inpval]));

        }

    }

    return (
        <>
            <div style={{ backgroundColor: '#96a0b0', height: '55em' }}>
                <div class="login">
                    <LoginTringle></LoginTringle>

                    <h2 class="login-header" >Sign Up</h2>

                    <form class="login-container" >
                        <p><RegistrationInput type="text" name='name' onChange={getdata} placeholder="Enter Your Name" /></p>
                        <p><RegistrationInput type="email" name='email' onChange={getdata} placeholder="Enter email" /></p>
                        <p><RegistrationInput type="number" name='mobile_number' onChange={getdata} placeholder="Enter Your Mobile Number" /></p>
                        <p><RegistrationInput type="password" name='password' onChange={getdata} placeholder="Password" /></p>
                        <p><RegistrationInput type="password" name='ConfirmPassword' onChange={getdata} placeholder="Confirm Password" /></p>
                        <p><RegistrationInput onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit" value="Log in" /></p>
                        &emsp; &emsp; &emsp; &emsp;&ensp; Already Have Account <NavLink to="/login" style={{ textDecoration: 'none' }}>Login</NavLink>
                    </form>
                    <ToastContainer />

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default RegistrationPage