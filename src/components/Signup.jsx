import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
  
        const[data,setData]=useState(
            {
                "name":"",
        "email":"",
        "phno":"",
        "gender":"",
        "password":"",
        "confirmpassword":""
            } 
        )
        const inputHandler=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
    
        }
        const readValue=()=>{
            console.log(data)
            axios.post("http://localhost:8080/signup",data).then((response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("succesfully added")
                } else {
                    alert("error")
                }
                if (data.password == data.confirmpassword) {
                    alert("match")
                } else {
                    alert("not match")
                }
            }).catch().finally()
        }
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" name='phno' value={data.phno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select  id="" className="form-control" name='gender' value={data.gender} onChange={inputHandler}>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password"  id="" className="form-control" name='password'/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success"onClick={readValue}>Register</button><br />
                                <a href="/">sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Signup