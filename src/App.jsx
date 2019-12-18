import React, { Component } from "react";

import { Page01Base } from "./pages/Page01Base.jsx";
import { Page02Contacts } from "./pages/Page02Contacts.jsx";
import { Page03Avatar } from "./pages/Page03Avatar.jsx";
import { Page04Finish } from "./pages/Page04Finish.jsx";
import { countries } from "./data/countries.js";
import { cities } from "./data/cities.js";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      pageState01: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        errors: {}
      },
      pageState02: {
        email: "",
        mobile: "",
        country: "0",
        city: "",
        countries: countries,
        cities: cities,
        errors: {}
      },
      pageState03: {
        avatar: "",
        defaultImage: "../../img/avatar.jpg",
        errors: {}
      }
    };
  }

  onPrevPage = () => {
    this.setState({
      page: this.state.page - 1
    });
  };

  onNextPage = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  onReset = () => {
    this.setState({
      page: 1,
      pageState01: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        errors: {}
      },
      pageState02: {
        email: "",
        mobile: "",
        country: "0",
        city: "",
        countries: countries,
        cities: cities,
        errors: {}
      },
      pageState03: {
        avatar: "",
        defaultImage: "../../img/avatar.jpg",
        errors: {}
      }
    });
  };

  onChange = (e, stateName) => {
    this.setState({
      [stateName]: {
        ...this.state[stateName],
        [e.target.name]: e.target.value
      }
    });
  };

  onChangeAvatar = (e, stateName) => {
    this.setState({
      [stateName]: {
        ...this.state[stateName],
        avatar: e.target.result
      }
    });
  };

  onChangeErrors = (stateName, errors) => {
    this.setState({
      [stateName]: {
        ...this.state[stateName],
        errors: { ...errors }
      }
    });
  };

  render() {
    const { page, pageState01, pageState02, pageState03 } = this.state;
    let step2 = "step";
    let step3 = "step";
    let step4 = "step";
    if (page === 2) {
      step2 = "step active";
    }
    if (page > 2) {
      step2 = "step completed";
    }
    if (page === 3) {
      step3 = "step active";
    }
    if (page > 3) {
      step3 = "step completed";
    }
    if (page === 4) {
      step4 = "step active";
    }
    return (
      <div className="form-container card">
        <div className="form card-body">
          <div className="steps mb-4">
            <div className={page === 1 ? "step active" : "step completed"}>
              <div className="step__marker">1</div>
              <div className="step__title">Basic</div>
            </div>
            <div className={step2}>
              <div className="step__marker">2</div>
              <div className="step__title">Contacts</div>
            </div>
            <div className={step3}>
              <div className="step__marker">3</div>
              <div className="step__title">Avatar</div>
            </div>
            <div className={step4}>
              <div className="step__marker">4</div>
              <div className="step__title">Finish</div>
            </div>
          </div>

          {page === 1 ? (
            <Page01Base
              pageState={pageState01}
              stateName="pageState01"
              onChange={this.onChange}
              onChangeErrors={this.onChangeErrors}
              onNextPage={this.onNextPage}
            />
          ) : null}

          {page === 2 ? (
            <Page02Contacts
              pageState={pageState02}
              stateName="pageState02"
              onChange={this.onChange}
              onChangeErrors={this.onChangeErrors}
              onNextPage={this.onNextPage}
              onPrevPage={this.onPrevPage}
            />
          ) : null}

          {page === 3 ? (
            <Page03Avatar
              pageState={pageState03}
              stateName="pageState03"
              onChange={this.onChangeAvatar}
              onChangeErrors={this.onChangeErrors}
              onNextPage={this.onNextPage}
              onPrevPage={this.onPrevPage}
            />
          ) : null}

          {page === 4 ? (
            <Page04Finish
              pageState01={pageState01}
              pageState02={pageState02}
              pageState03={pageState03}
              onReset={this.onReset}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
