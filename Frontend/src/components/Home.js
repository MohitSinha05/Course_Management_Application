import {React, useEffect} from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
    useEffect( () => {
        document.title = "Home";
    }, [])

    return (
        <div>
            <div className="text-center">
                <h1>Course Application</h1>
                <p>This application displays all the courses available</p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
            </div>
        </div>
    );
};

export default Home;


