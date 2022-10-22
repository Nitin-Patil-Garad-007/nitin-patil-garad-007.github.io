import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components'
import swal from 'sweetalert'

  const LoginTringle=styled.div`
    width: 0;
  padding: 50px 0px;
  margin-right: auto;
  margin-left: auto;
  border: 12px solid transparent;
  border-bottom-color: #28d;
  `;

const RegistrationInput=styled.input`
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
        ConfirmPassword:"",
        mobile_number:""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password,ConfirmPassword,mobile_number } = inpval;

        if (name === "") {
            
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (mobile_number === "") {
            toast.error('!! Please Enter Mobile Number !!',{
               position: "top-center",
           });
       } else if (mobile_number.length < 10) {
        toast.error('!! Please enter Contact Number 10 Digit !!',{
           position: "top-center",
           });
        } else if (password === "") {
             toast.error('!! Please Enter Password !!',{
                position: "top-center",
            });
        } else if (ConfirmPassword === "") {
            toast.error('Please Enter Confirm Password !!',{
               position: "top-center",
           });
       } 
        else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        }else if (password !== ConfirmPassword) {
            toast.error('!! Password Not Match !!',{
               position: "top-center",
           });
       }  else {
        swal(`Resistration Successfully...!`, "", "success");
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("user_details",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
        <div style={{backgroundColor:'#96a0b0',height:'55em'}}>
        <div class="login">
  <LoginTringle></LoginTringle>
  
  <h2 class="login-header" >Sign Up</h2>

  <form class="login-container" >
    <p><RegistrationInput type="text" name='name' onChange={getdata} placeholder="Enter Your Name"/></p>
    <p><RegistrationInput type="email" name='email' onChange={getdata} placeholder="Enter email"/></p>
    <p><RegistrationInput type="number" name='mobile_number' onChange={getdata} placeholder="Enter Your Mobile Number"/></p>
    <p><RegistrationInput type="password" name='password' onChange={getdata} placeholder="Password" /></p>
    <p><RegistrationInput type="password" name='ConfirmPassword' onChange={getdata} placeholder="Confirm Password" /></p>
    <p><RegistrationInput onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit" value="Log in" /></p>
    &emsp; &emsp; &emsp; &emsp;&ensp; Already Have Account <NavLink to="/login"  style={{textDecoration:'none'}}>Login</NavLink>
  </form>
  <ToastContainer />

</div>
        </div>
            {/* <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="number" name='mobile_number' onChange={getdata} placeholder="Enter Your Mobile Number" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='ConfirmPassword' onChange={getdata} placeholder="Confirm Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account Please <span><NavLink to="/login"  style={{textDecoration:'none'}}>SignIn</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section> */}
                <ToastContainer />
            {/* </div> */}
        </>
    )
}

export default RegistrationPage