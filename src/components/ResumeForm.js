import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button, Table, FormControl, FormGroup } from "react-bootstrap";
import { useFormik } from 'formik';
import { submitForm } from './ResumeSlice';
import './ResumeForm.css';
import { useState } from 'react';


const ResumeForm = () => {
    const dispatch = useDispatch();
    
    const [educationValues, setEducationValues] = useState([{
        university_name: "",
        course: "",
        passing_year: "",
        percentages: "",
    }])

    let addMoreEduValues = () => {
        setEducationValues([...educationValues, {university_name: "", course: "", passing_year: "", percentages: ""}])
    }

    let handleChangeEducation = (i, e) => {
        let newEducationValues = [...educationValues];
        newEducationValues[i][e.target.name] = e.target.value
        setEducationValues(newEducationValues);
        console.log(educationValues);
    }

    const [experienceValues, setExperienceValues] = useState([{
        company: "",
        position: "",
        ex_from_date: "",
        ex_to_date: "",
    }])

    let addMoreExValues = () => {
        setExperienceValues([...experienceValues, {company: "",position: "",ex_from_date: "",ex_to_date: "",}])
    }

    let handleChangeExperience = (i, e) => {
        let newExperienceValues = [...experienceValues];
        newExperienceValues[i][e.target.name] = e.target.value;
        setExperienceValues(newExperienceValues)
    }

    

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            address: "",
            phone_number:"",
            email_address: "",
            education: educationValues,
            experience: experienceValues,
            achievement: "",
        },
        onSubmit: (values) => {
            dispatch(submitForm(values))
        }
    })
    
    return (
        <>
        <div className="container text-start p-4 shadow">
            <Form onSubmit={formik.handleSubmit} className="user-form">

                <Row >
                    <p className='section_title'>Personal information</p>
                    <Col xs={6}>
                        <Form.Group className="mb-2" controlId="first_name">
                            <Form.Label column="sm">Fisrt Name</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="First Name" onChange={formik.handleChange}
                                value={formik.values.first_name || ''} />
                        </Form.Group>
                    </Col>

                    <Col xs={6}>
                        <Form.Group className="mb-2" controlId="last_name">
                            <Form.Label column="sm">Last Name</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Last Name" onChange={formik.handleChange}
                                value={formik.values.last_name || ''} />
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-2" controlId="address">
                            <Form.Label column="sm">Address</Form.Label>
                            <Form.Control size="sm" as="textarea" placeholder="Address" rows={4} onChange={formik.handleChange}
                                value={formik.values.address || ''} />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-2" controlId="phone_number">
                            <Form.Label column="sm">Phone Number</Form.Label>
                            <Form.Control size="sm" type="number" placeholder="Phone Number" onChange={formik.handleChange}
                                value={formik.values.phone_number || ''} />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-2" controlId="email_address">
                            <Form.Label column="sm">Email Address</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="Email Address" onChange={formik.handleChange}
                                value={formik.values.email_address || ''} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className='section_title'>Education</p>
                        <Button onClick={() => addMoreEduValues()}  className="h-50 btn btn-primary btn-sm">Add more</ Button>
                    </div>

                    {
                    educationValues.map((element, index) => (
                        <div>
                            <Row>
                            <Col xs={3}>
                                <Form.Group className="mb-2" controlId="university_name">
                                    <Form.Label column="sm">University Name</Form.Label>
                                    <Form.Control size='sm' type="text" value={element.university_name || ''} placeholder="University Name" name="university_name" onChange={e => handleChangeEducation(index, e)} />
                                </Form.Group>
                            </Col>

                            <Col xs={3}>
                                <Form.Group className="mb-2" controlId="course">
                                    <Form.Label column="sm">Course</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Course" value={element.course || ''} name="course" onChange={e => handleChangeEducation(index, e)} />
                                </Form.Group>
                            </Col>

                            <Col xs={3}>
                                <Form.Group className="mb-2" controlId="passing_year">
                                    <Form.Label column="sm">Passing Year</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Passing Year"  value={element.passing_year || ''} name="passing_year" onChange={e => handleChangeEducation(index, e)} />
                                </Form.Group>
                            </Col>

                            <Col xs={3}>
                                <Form.Group className="mb-2" controlId="percentages">
                                    <Form.Label column="sm">Percentages</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Percentages" name="percentages" value={element.percentages || ''} onChange={e => handleChangeEducation(index, e)} />
                                </Form.Group>
                            </Col>
                            </Row>
                        </div>
                    ))
                    }
                </Row>

                
                <Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className='section_title'>Experience</p>
                        <Button onClick={() => addMoreExValues()}  className="h-50 btn btn-primary btn-sm">Add more</ Button>
                    </div>

                    {
                    experienceValues.map((element, index) => (
                        <div>
                            <Row>
                            <Col xs={3}>
                                <Form.Group className="mb-2" controlId="company">
                                    <Form.Label column="sm">company</Form.Label>
                                    <Form.Control size='sm' type="text" value={element.company || ''} placeholder="Company" name="company" onChange={e => handleChangeExperience(index, e)} />
                                </Form.Group>
                            </Col>

                            <Col xs={3}>
                                <Form.Group className="mb-2" controlId="position">
                                    <Form.Label column="sm">Position</Form.Label>
                                    <Form.Control size='sm' type="text" placeholder="Position" value={element.position || ''} name="position" onChange={e => handleChangeExperience(index, e)} />
                                </Form.Group>
                            </Col>

                            <Col xs={3}>
                            <Form.Group className="mb-2" controlId="ex_from_date">
                                    <Form.Label column="sm">From Date</Form.Label>
                                    <Form.Control size='sm' type="date" name="ex_from_data" value={element.ex_from_date} onChange={e => handleChangeExperience(index, e)} />
                                </Form.Group>
                            </Col>
                            <Col xs={3}>
                            <Form.Group className="mb-2" controlId="ex_to_date">
                                    <Form.Label column="sm">To Date</Form.Label>
                                    <Form.Control size='sm' type="date" value={element.ex_to_date} name="ex_to_data" onChange={e => handleChangeExperience(index, e)} />
                                </Form.Group>
                            </Col>
                            </Row>
                        </div>
                    ))
                    }
                </Row>

                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-2" controlId="achievement">
                            <Form.Label column="sm">Achievement</Form.Label>
                            <Form.Control size="sm" as="textarea" placeholder="Achievement" rows={4} onChange={formik.handleChange}
                                value={formik.values.achievement || ''} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>

            </Form>          
        </div>

        </>
    )
}

export default ResumeForm