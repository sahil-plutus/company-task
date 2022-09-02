import React from 'react';
import { Row, Col, Form, Table, FormControl, FormGroup } from "react-bootstrap";
import { useFormik } from 'formik';
import { submitForm } from './ResumeSlice';
import './ResumeForm.css';


export const Education = (props) => {
    const formik = props.formik;


    let education_count = 0;
    let count = 1;
    const AddMoreEducation = () => {
        education_count +=1;
        return (education_count)
    }
    
    return(
        
        <Row>
            <p className='section_title'>Education</p>
            <Col xs={3}>
                <Form.Group className="mb-2" controlId="university_name">
                    <Form.Label column="sm">University Name</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="University Name" onChange={formik.handleChange}
                                        value={formik.values.university_name || ''} />
                </Form.Group>
            </Col>

            <Col xs={3}>
                <Form.Group className="mb-2" controlId="course">
                    <Form.Label column="sm">Course</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="Course" onChange={formik.handleChange}
                                        value={formik.values.course || ''} />
                </Form.Group>
            </Col>

            <Col xs={3}>
                <Form.Group className="mb-2" controlId="passing_year">
                    <Form.Label column="sm">Passing Year</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="Passing Year" onChange={formik.handleChange}
                                        value={formik.values.passing_year || ''} />
                </Form.Group>
            </Col>

            <Col xs={3}>
                <Form.Group className="mb-2" controlId="percentages">
                    <Form.Label column="sm">Percentages</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="Percentages" onChange={formik.handleChange}
                                        value={formik.values.percentages || ''} />
                </Form.Group>
            </Col>
        </Row>
)
}

export const Experience = (props) => {
    const formik = props.formik;

    return(

        <Row>
        <p className='section_title'>Experience</p>
        <Col xs={3}>
            <Form.Group className="mb-2" controlId="company">
                <Form.Label column="sm">Company/Firm</Form.Label>
                <Form.Control size='sm' type="text" placeholder="Company/Firm" onChange={formik.handleChange}
                                    value={formik.values.company || ''} />
            </Form.Group>
        </Col>
        <Col xs={3}>
            <Form.Group className="mb-2" controlId="position">
                <Form.Label column="sm">Position</Form.Label>
                <Form.Control size='sm' type="text" placeholder="Position" onChange={formik.handleChange}
                                    value={formik.values.position || ''} />
            </Form.Group>
        </Col>

        <Col xs={3}>
            <Form.Group className="mb-2" controlId="ex_from_date">
                <Form.Label column="sm">From Date</Form.Label>
                <Form.Control size='sm' type="date" onChange={formik.handleChange}
                                    value={formik.values.ex_from_date || ''} />
            </Form.Group>
        </Col>
        <Col xs={3}>
            <Form.Group className="mb-2" controlId="ex_to_date">
                <Form.Label column="sm">To Date</Form.Label>
                <Form.Control size='sm' type="date" onChange={formik.handleChange}
                                    value={formik.values.ex_to_date || ''} />
            </Form.Group>
        </Col>
    </Row>

    )
}
