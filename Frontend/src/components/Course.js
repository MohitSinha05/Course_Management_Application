import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/BootApi";
import axios from "axios";
import {toast} from 'react-toastify';

const Course = ({ course, update}) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                //success
                toast.success("Courses deleted successfully.");
                update(id);
            }, 
            (error)=>{
                //for error
                console.log(error);
                toast.error("Internal Server Error.");
            }
        )
    }


    return (
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.id)
                    }}>Delete</Button>
                    <Button color="warning" style={{marginLeft:4}}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;