import React, { Component } from "react";
import API from "../../utils/API";
import Hero from "../../components/Hero";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import SignupForm from "../../components/SignupForm";
import SearchResults from "../../components/SearchResults";

class Signup extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };


  handleInputChange = event => {
    this.setState({ signup: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.signup)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  
  render() {
    return (

      <div>
      <Hero backgroundImage="http://volunteercentrewi.org/wp-content/uploads/2017/02/become-a-volunteer.png" alt="Volunteer Hands">
          {/* alternate link = https://gt20.org/wp-content/uploads/2016/09/volunteer.png */}     
          <h1>Volunteer YOUR TIME and GIVE BACK !</h1>
      </Hero>

      <Container style={{ marginTop: 30 }}>
          <Row>
              <Col size="md-12">
              <h1 className="text-center">Sign Up!</h1>
              <br />

          <SignupForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />

        </Col>
      </Row>
    </Container>
    </div>
    );
  }
}

export default Signup;
