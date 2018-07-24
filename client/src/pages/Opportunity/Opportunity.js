import React, { Component } from "react";
// import API from "../../utils/API";
import Hero from "../../components/Hero";
// import Jumbotron from "../../components/Jumbotron";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import { Input, Dropdown, FormBtn } from "../../components/Form";
import Search from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

class Opportunity extends React.Component {

state = {
    opportunity: 'All',
    city: '',
    date: ''
}

handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log('Change')
    console.log(this.state)
}

handleSubmit = (event) => {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    console.log(this.value);
}

handleFormSubmit = (event) => {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    console.log(this.state);

    // db.volunteerApp.find()
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
                        <div className="form-group" onSubmit={this.handleSubmit}>       

                            <h6><label>Opportunity:</label></h6>

                            <select name="opportunity" value={this.state.opportunity} onChange={this.handleChange}>
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

                        <div className="form-group" onSubmit={this.handleSubmit}>

                            <h6><label>City:</label></h6>

                            <select name="city" value={this.state.city} onChange={this.handleChange}>
                                <option value="All">All</option>
                                <option value="coloradoSprings">Colorado Springs</option>
                                <option value="denver">Denver</option>
                                <option value="fortCollins">Fort Collins</option>
                                <option value="grandJunction">Grand Junction</option>
                            </select>
                        </div>

                        <div className="form-group" onSubmit={this.handleSubmit}>

                            <h6><label htmlFor="date">Date:</label></h6>
                            <input name ="date" type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value={this.state.date} onChange={this.handleChange} />
                             <span className="validity"></span>
                        
                        </div>


                        {/* <div>
                            <label for="bday">Enter your birthday:</label>
                            <input name ="date" type="date" id="bday" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"></input>
                            <span class="validity"></span>
                        </div> */}


                        
                        <br />
                        <br />

                        {/* <div>
                            <label for="bday">Enter your birthday:</label>
                            <input type="date" id="bday" name="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"></input>
                            <span className="validity"></span>
                        </div> */}

                        {/* <div className="form-group" onSubmit={this.handleSubmit}>

                            <h6><label>Date:</label></h6>

                            <select name="date" value={this.state.date} onChange={this.handleChange} itemType={"datetime-local"}>
                                <option itemType="datetime-local"></option>
                            </select>
                            <br />
                            <br />
                        </div> */}

                    </form>

                    {/* <Input
                        label="Date:"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        type="date"
                    /> */}


                    <FormBtn
                        onClick={this.handleFormSubmit}>
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

