import React, { Component } from "react";
import API from "../../utils/API";
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

    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">

          <h1 className="text-center">Sign Up!</h1>
          <SignupForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />

        </Col>
      </Row>
    </Container>
    );
  }
}

export default Signup;
