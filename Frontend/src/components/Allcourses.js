import React, { useState, useEffect } from 'react';
import Course from  './Course';
import base_url from '../api/BootApi';
import axios from 'axios';
import {toast} from 'react-toastify'


const Allcourse = () => {
    useEffect( () => {
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, [])


    //Function to call URL.
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                console.log(response.data);
                toast.success("Courses have been loaded.");
                setCourses(response.data);
            }, 
            (error)=>{
                //for error
                console.log(error);
                toast.error("Internal Server Error.");
            }
        );
    };

    //loading course function

    // useEffect( () => {
    //     getAllCoursesFromServer();
    // }, []);

    const [courses, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c)=>c.id!=id));
    }
 
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>
            {
                courses.length>0 ? courses.map((item) => (
                    <Course key={item.id} course={item} update={updateCourses}/>
                )) : "No Courses" 
            }
        </div>
    );
};

export default Allcourse;