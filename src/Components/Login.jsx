import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data,setData] = useState(
        {
        "emailid":"",
        "pass":""
        }
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Add Successfully")
                    
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
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" name="pass" value={data.pass} onChange={inputHandler} id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>LOGIN</button>

                            </div>
                        </div>
                        <br/>
                        <p>New User<Link to="/signup">Click here</Link></p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Login