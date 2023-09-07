import React, { Fragment, useEffect, useState} from "react";
import { Form, FormGroup, Label, Input, Container, Button} from "reactstrap";
import axios from 'axios';
import base_url from '../api/BootApi';
import {toast} from 'react-toastify'


const AddCourse = () => {
    useEffect( () => {
        document.title = "Add Courses";
    }, [])

    const [course, setCourse] = useState({});

    //Form handler funtion
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    //creating function to post data to server;
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                //success
                console.log(response.data);
                toast.success("Success");
                setCourse({id: "", title: "", description: ""});
            }, 
            (error)=>{
                //for error
                console.log(error);
                toast.error("Error");
            }
        )
    }


    return (
        <Fragment>
            <h1 className="text-center">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Couser Id</Label>
                    <Input 
                        type="text" 
                        placeholder="Enter Course Id" 
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setCourse({ ...course, id:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="title">Couser Title</Label>
                    <Input 
                        type="text" 
                        placeholder="Enter Course title" 
                        name="title"
                        id="title"
                        onChange={(e) => {
                            setCourse({ ...course, title:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Couser Description</Label>
                    <Input 
                        type="textarea" 
                        placeholder="Enter Course description here" 
                        name="description"
                        id="description"
                        onChange={(e) => {
                            setCourse({ ...course, description:e.target.value});
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success" type="submit">Add Course</Button>
                    <Button color="warning" style={{marginLeft:4}} onClick={ () => {
                        setCourse({id: "", title: "", description: ""});
                    }} type="reset">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;