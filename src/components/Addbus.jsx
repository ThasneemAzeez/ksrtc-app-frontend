import axios from 'axios'
import React, { useState } from 'react'

const Addbus = () => {
    const [data,setData]=useState(
        {
           "busname":"",
        "busroute":"",
        "drivername":""
        }
    )
    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfull added")
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
                <div className="col cik-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="rw g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus Name</label>
                            <input type="text" className="form-control" name='busname' value={data.busname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus Route</label>
                            <input type="text" className="form-control" name='busroute' value={data.busroute} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Driver Name</label>
                            <input type="text" className="form-control" name='drivername' value={data.drivername} onChange={inputHandler} />
                        </div>
                       
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-submit" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addbus