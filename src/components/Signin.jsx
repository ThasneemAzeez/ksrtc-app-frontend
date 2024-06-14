import axios from 'axios'
import React, { useState } from 'react'

const Signin = () => {
    const[data,setData]=useState(
        {
            "email":"",
            "password":""
        }
    )

    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("http://localhost:8080/signup",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfull Login")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="bg-tertiary p-3">
                <div class="card">
                <div class="card-body">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-success" type="button" onClick={readValue}>Login</button>
                            </div>
                        </div>
                        
                        
                        
       
                    </div>
                    </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin