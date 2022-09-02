import React from 'react';
import './ResumeForm.css'
import { Row, Col, Form, Button, Table, FormControl, FormGroup } from "react-bootstrap";


const DisplayResume = (values) => {
    let data = values.data;
    let experience_data = values.experience_data;
    let education_data = values.education_data;

    return (
        <>    
            <div className="container resume_display">
                <div className="content">
                <Row className="d-flex personal_details"> 
                    <Col>
                        <Row>
                            <h2>
                                {data.first_name} {data.last_name}
                            </h2>
                        </Row>
                        <Row>
                            <p>{data.role}</p>
                        </Row>
                        <Row>
                            <Col xs={4} className="text-start">
                                <p>phone:</p>
                                <p>email:</p>
                                <p>website:</p>
                                <p>address:</p>
                            </Col>
                            <Col xs={4} className="text-start">
                                <p>{data.phone_number}</p>
                                <p>{data.email_address}</p>
                                <p>{data.website}</p>
                                <p>{data.address}</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={6} className="">
                        {data.summary}
                    </Col>
                </Row>
                
                <Row className="d-flex experience_section mt-4">
                    <Col xs={4} className="section_name">
                        <div>Experience</div>
                    </Col>

                    <Col xs={8} className="section_details">
                        {
                            experience_data.map((element, index) => (
                                <div className="mb-4">
                                    <Row>
                                        <div className="d-flex justify-content-between m-0 p-0">
                                            <div className='fw-bold'>{element.company}</div>
                                            <div>from_date - to_date</div>
                                        </div>
                                    </Row>
                                    <Row>{element.position}</Row>
                                </div>
                            ))
                        }
                    </Col>
                </Row>  

                
                <Row className="d-flex education_section mt-4">
                    <Col xs={4} className="section_name">
                        <div>Education</div>
                    </Col>

                    <Col xs={8} className="section_details">
                        {
                            education_data.map((element, index) => (
                                <div className="mb-4">
                                    <Row>
                                        <div className="d-flex justify-content-between m-0 p-0">
                                            <div className='fw-bold'>{element.university_name}</div>
                                            <div>{element.passing_year}</div>
                                        </div>
                                    </Row>
                                    <Row>{element.course}</Row>
                                    <Row>{element.percentages} </Row>
                                </div>
                            ))
                        }
                    </Col>
                </Row>  

                <Row className="d-flex skill_section mt-4">
                    <Col xs={4} className="section_name">
                        <div>Skills</div>
                    </Col>

                    <Col xs={8} className="section_details">
                        <p>{data.skills}</p>
                    </Col>
                </Row>  

                <Row className="d-flex achievement_section mt-4">
                    <Col xs={4} className="section_name">
                        <div>Achievement</div>
                    </Col>

                    <Col xs={8} className="section_details">
                        <p>{data.achievement}</p>
                    </Col>
                </Row>  
                

                </div>
            </div>
        </>
        )
    }

export default DisplayResume