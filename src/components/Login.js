import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import styled from 'styled-components'

const LoginInput=styled.input`
transition: 1s;
&:focus{
  border-color: #ed15e6;
  box-shadow: 0 0 10px 0 #ed15e6;
}
`;

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    // const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("user_details");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    swal("Please Enter Valid UserName Password !!", "", "error");
                } else {
                    swal(`!! Welcome : ${userlogin[0].name}  !!`, "😄!! Happy To See You !!😄", "success");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    history("/home")
                }
            }
        }

    }

    return (
        <>
        <div style={{backgroundColor:'#96a0b0',height:'55em'}}>
        <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header" style={{padding:'8em ,0em'}}>Log in</h2>

  <form class="login-container" >
    <p><LoginInput type="email" name='email' onChange={getdata} placeholder="Enter email"/></p>
    <p><LoginInput type="password" name='password' onChange={getdata} placeholder="Password" /></p>
    <p><LoginInput onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit" value="Log in" /></p>
    &emsp; &emsp; &emsp; &emsp;&ensp; Dont Have Account <span><NavLink to="/registrationPage" style={{textDecoration:'none'}}>SignUp</NavLink></span>
  </form>
  <ToastContainer />
</div>
        </div>
            {/* <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Dont Have Account <span><NavLink to="/registrationPage">SignUp</NavLink></span> </p>
                    </div>
                   
                </section>
                <ToastContainer />
            </div> */}
        </>
    )
}

export default Login