import React from "react";
import Hero from "../../components/Hero";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
// import { PromiseProvider } from "mongoose";

const Home = () => (
  <div>
    <Hero backgroundImage="http://volunteercentrewi.org/wp-content/uploads/2017/02/become-a-volunteer.png" alt="Volunteer Hands">

    {/* https://gt20.org/wp-content/uploads/2016/09/volunteer.png */}

      <h1>Spread the Love!</h1>
      <h2>OTHERS ARE IN NEED OF YOUR HELP</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome to Helping Hands!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p align="justify">
            Volunteering is an incredibly rewarding way to spend your time while enriching the 
            lives of others. Volunteer service opportunities at Volunteers of America Colorado
            Branch vary from delivering meals to home-bound seniors, brightening the decor of one 
            of our shelters, or providing childcare to one of the students in our Head Start 
            programs, and much, much more.
          </p>
          <p align="justify">
            Our Volunteers often have such a life changing experience that they stay with us for 
            years and become deeply involved in the success of our programs. We simply ask that you 
            bring your passion to the volunteer site and allow us to help you help the community!
          </p>
          <p align="justify">
            Volunteers are required to undergo background checks for some positions. That is a cost 
            to the volunteer of $25. Once background check and orientation are complete, our 
            volunteer services staff will work with you to find the perfect assignment on a one-time 
            or ongoing basis.
          </p>
          <p align="justify">
            Please feel free to review the local volunteering opportunities by clicking your area 
            below. If you don't know where to get started, call our main office at 303-297-0408 for 
            assistance or click here to fill out an online volunteer form and someone will contact you.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
