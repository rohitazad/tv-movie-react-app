import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.Style.scss';
import CarouselFri from "../../Components/CarouselFri/CarouselFriIndex";
export default function HomePage(){
   


    return(
        <>
        <Card className="text-center myCustomCard">
      <Card.Header className="primary">Welcome to My App</Card.Header>
      <Card.Img variant="top" src="/assets/img/amityadav.jpg" />
      <Card.Body>
        <Card.Title>Amit Yadav (Times Internet UI Lead)</Card.Title>
        <div className="customeCrouseWrap"><CarouselFri /></div>
        
        <Card.Text>
        Developed by: <a href="http://www.rohitazad.com/" rel="noreferrer" target="_blank">www.rohitazad.com</a> <br />
        <a href="https://www.facebook.com/rohitazadmalik/" rel="noreferrer" target="_blank">#RohitAzadMalik</a>
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Copyright © 2022. All right reserved. Disclaimer Design & Develop By : Rohit Azad Malik</Card.Footer>
    </Card>
        
        </>
    )
}