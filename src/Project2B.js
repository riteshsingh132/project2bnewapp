import Dropdown from 'react-bootstrap/Dropdown';

import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
function Project2B() {


    const [data, setdata] = useState()
    const [toggle, setToggle] = useState("")

    const handleClick = (e) => {
        const recData = e.target.value;
        if (recData == "email") {
            setdata("Email Address")
            setToggle(true)
        } else if (recData == "phone") {
            setdata("Phone Number")
            setToggle(true)
        } else {
            setdata("")
            setToggle(false)
        }
    }

    return (
        <>
            <div className='container'>
                <div className='col-sm-10 mt-5 mx-auto'>

                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-sm-6 form-group'>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input className='form-control' type='text' id='firstName' />
                                </div>
                                <div className='col-sm-6 form-group'>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <input className='form-control' type='text' id='lastName' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6 form-group'>
                                    <div className='form-group'>How Should we Contact You? </div>
                                    <div className='custom-control custom-radio custom-control-inline'>
                                        <input type="radio" className='custom-control-input' id='customradioEmail1' value="email" name="data" onClick={handleClick} />
                                        <label className="custom-control-label" htmlFor='customradioEmail1'>Email</label>
                                    
                                    </div>
                                    <div className='custom-control custom-radio custom-control-inline'>
                                        <input type="radio" className='custom-control-input' id='customradioMobile2' name="data" value="phone" onClick={handleClick}/>
                                        <label className="custom-control-label" htmlFor='customradioMobile2'>Phone</label>
                                    </div>
                                </div>

                                    {toggle ? <div className='col-sm-6 form-group'>
                                    <label  htmlFor='lastName'>{data}</label>
                                    <input className='form-control' type='text' id='contact-option' />
                                </div>:"" }
                                   
                                    
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            {/* without bootsrap */}
            {/* <div className='container col-6 mt-5 pb-3' style={{ border: "1px solid #ccc", gap: "10px" }}>

                <Form >
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicText">
                        <div style={{ width: "300px" }}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name='fname' placeholder='Enter Your First Name' />
                        </div>
                        <div style={{ width: "300px" }}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name='lname' placeholder='Enter Your Last Name' />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1" className='mb-3 d-flex justify-content-between'>

                        <div style={{ width: "300px" }}>
                            <p>How Should we Contact You?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="inlineCheckbox1" value="email" name="data" onClick={handleClick} />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Email</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="inlineCheckbox2" value="phone" name='data' onClick={handleClick} />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Phone</label>
                            </div>
                        </div>
                        {toggle ? <div style={{ width: "300px" }}>
                            <Form.Label>{data}</Form.Label>
                            <Form.Control type="text" />
                        </div> : ""}        
                    </Form.Group>
                </Form>

            </div> */}
        </>
    )
}

export default Project2B