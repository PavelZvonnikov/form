import React, { Component } from "react";

import { Page01Base } from './pages/Page01Base.jsx';
import { Page02Contacts } from './pages/Page02Contacts.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      pageState01: {
        firstname: '',
        lastname: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        errors: {},
      },
      pageState02: {
        check: '',
        errors: {},
      }
    };
  }

  onPrevPage = () => {
    this.setState({
      page: this.state.page - 1,
    })
  }

  onNextPage = () => {
    this.setState({
      page: this.state.page + 1,
    })
  }

  onChange = (e, stateName) => {
    this.setState({
      [stateName]: {
        ...this.state[stateName],
        [e.target.name]: e.target.value,
      }
    });
  };

  onChangeErrors = (stateName, errors) => {
    this.setState({
      [stateName]: {
        ...this.state[stateName],
        errors: { ...errors },
      }
    });
  };

  render() {
    const { page, pageState01, pageState02 } = this.state;

    return (
      <div className="form-container card">
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
      </div>
    );
  }
}
