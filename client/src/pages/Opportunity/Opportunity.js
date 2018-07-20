import React, { Component } from "react";
// import API from "../../utils/API";
import Hero from "../../components/Hero";
import Jumbotron from "../../components/Jumbotron";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import { Input, Dropdown, FormBtn } from "../../components/Form";
import Search from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

class Opportunity extends React.Component {

state = {
    value: 'All'
}

handleChange = (event) => {
    this.setState({value: event.target.value});
}

handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
}

handleFormSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
}

render() {
    return (

        <div>
        <Hero backgroundImage="http://volunteercentrewi.org/wp-content/uploads/2017/02/become-a-volunteer.png" alt="Volunteer Hands">
            {/* alternate link = https://gt20.org/wp-content/uploads/2016/09/volunteer.png */}     
            <h1>Volunteer YOUR TIME and GIVE BACK !</h1>
        </Hero>

        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12" className="text-center">
                <h1>So Many Opportunities...</h1>
                <br />

        {/* <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Volunteer YOUR TIME and GIVE BACK !</h1>
                        <br />
                        <h3 className="text-center">So Many Opportunities...</h3>
                    </Jumbotron> */}

                    <form className="form-inline">
                        <div class="form-group" onSubmit={this.handleSubmit}>       

                            <h6><label>Opportunity:</label></h6>

                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="All">All</option>
                                <option value="clerical">Clerical</option>
                                <option value="fosterGrandparent">Foster Grandparent</option>
                                <option value="general">General</option>
                                <option value="handyman">Handyman</option>
                                <option value="foodBank">Food Bank</option>
                                <option value="mealDelivery">Meal Delivery</option>
                                <option value="caregiverAssistance">Caregiver Assistance</option>
                                <option value="landscaping">Landscaping</option>
                            </select>
                        </div>

                        <div class="form-group" onSubmit={this.handleSubmit}>

                            <h6><label>City:</label></h6>

                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="All">All</option>
                                <option value="coloradoSprings">Colorado Springs</option>
                                <option value="denver">Denver</option>
                                <option value="fortCollins">Fort Collins</option>
                                <option value="grandJunction">Grand Junction</option>
                            </select>
                        </div>

                        <div class="form-group" onSubmit={this.handleSubmit}>

                            <h6><label>Date:</label></h6>

                            <select value={this.state.date} onChange={this.handleChange}>
                                <option value="datetime-local"></option>
                            </select>
                            <br />
                            <br />
                        </div>
                    </form>

                    {/* <Input
                        label="Date:"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        type="datetime-local"
                    /> */}


                    <FormBtn
                        disabled={!(this.state.opportunity && this.state.city)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit
                    </FormBtn>
     
                </Col>
            </Row>
        </Container>
    </div>
    );
  }
}

export default Opportunity;