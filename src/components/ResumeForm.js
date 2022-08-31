import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button, Table, FormControl, FormGroup } from "react-bootstrap";
import { useFormik } from 'formik';
import { submitForm } from './ResumeSlice';


const ResumeForm = () => {
    const dispatch = useDispatch();
        
    const formik = useFormik({
        initialValues: {
            first_name: "",
            middle_name: "",
            last_name: "",
        },
        onSubmit: (values) => {
            dispatch(submitForm(values))
            console.log('done');
        }
    })

    return (
        <>
        <div className="container">
            <Form onSubmit={formik.handleSubmit} className="user-form">
                <Row>
                    <Col xs={4}>
                        <Form.Group className="mb-2" controlId="first_name">
                            <Form.Label column="sm">Fisrt Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" onChange={formik.handleChange}
                                value={formik.values.first_name || ''} />
                        </Form.Group>
                    </Col>

                    <Col xs={4}>
                        <Form.Group className="mb-2" controlId="middle_name">
                            <Form.Label column="sm">Middle Name</Form.Label>
                            <Form.Control type="text" placeholder="Middle Name" onChange={formik.handleChange}
                                value={formik.values.middle_name || ''} />
                        </Form.Group>
                    </Col>


                    <Col xs={4}>
                        <Form.Group className="mb-2" controlId="last_name">
                            <Form.Label column="sm">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" onChange={formik.handleChange}
                                value={formik.values.last_name || ''} />
                        </Form.Group>
                    </Col>

                    <Col xs={2} >
                        <div className="d-flex justify-content-end">
                            <Button className='mx-2' variant="primary" type="submit">Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Form>          
        </div>

        </>
    )
}

export default ResumeForm