import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast} from "react-toastify";
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import { Container, Row, Col } from 'reactstrap';
import Header from "./components/Header";
import Menus from './components/Menus';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

function App() {
  const btnHanlde = () => {
    toast("This is my First Message");
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}> 
              <Menus />
            </Col>
            <Col md={8}>
                <Routes>
                  <Route path='/' Component={Home} exact/>
                  <Route path='/add-course' Component={AddCourse} exact/>
                  <Route path='/view-courses' Component={Allcourses} exact/>
                </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
