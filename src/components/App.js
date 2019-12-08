import React, { Component } from "react";
// import Field from "../components/Field";
import Basic from "./Basic";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      gender: "male",
      mail: "",
      mobile: "",
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        gender: false,
        mail: false,
        mobile: false
      }
    };
  }

  updateData = value => {
    this.setState({ page: value });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const errors = {};
    // const validMail = this.state.mail.match(
    //   /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    // );

    if (this.state.firstname.length < 5) {
      errors.firstname = "Must be 5 characters or more";
    }

    if (this.state.lastname.length < 5) {
      errors.lastname = "Must be 5 characters or more";
    }

    if (this.state.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }

    if (this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    // if (!validMail && this.state.page === 2) {
    //   errors.mail = "Invalid email address";
    // }

    // if (this.state.mobile.length < 10 && this.state.page === 2) {
    //   errors.mobile = "Invalid mobile";
    // }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      let page = this.state.page;
      this.setState({
        errors: {},
        page: page + 1
      });
    }
  };

  onPrevious = e => {
    let page = this.state.page;
    this.setState({
      page: page - 1
    });
  };

  render() {
    // const pageNumber = this.state.page;
    // const classNameNext = this.state.page === 4 ? true : false;
    // const classNamePrevious = this.state.page === 1 ? true : false;

    return (
      <div className="form-container card">
        <Basic
          updateData={this.updateData}
          // onPrevious={this.onPrevious}
          // onChange={this.onChange}
          // onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
