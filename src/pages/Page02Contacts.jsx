import React from "react";

import { Field } from "../components/Field.jsx";
import { Select } from "../components/Select.jsx";
import { Button } from "../components/Button.jsx";

export class Page02Contacts extends React.Component {
  onLocalChange = e => {
    const { onChange, stateName } = this.props;

    onChange(e, stateName);
  };

  validateEmail = email => {
    const reg = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);

    if (!reg) {
      return true;
    } else {
      return false;
    }
  };

  validateMobile = mobile => {
    const reg = mobile.match(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    );
    if (!reg) {
      return true;
    } else {
      return false;
    }
  };

  validate = () => {
    const { pageState } = this.props;
    const { email, mobile, city } = pageState;

    const errors = {};

    if (this.validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (this.validateMobile(mobile) || mobile.length < 10) {
      errors.mobile = "Invalid mobile";
    }

    if (+city < 1) {
      errors.city = "Required";
    }

    return errors;
  };

  onClickNextPage = () => {
    const { stateName, onChangeErrors, onNextPage } = this.props;

    const errors = this.validate();
    const isInvalid = Object.keys(errors).length > 0;

    if (isInvalid) {
      onChangeErrors(stateName, errors);
    } else {
      onChangeErrors(stateName, {});
      onNextPage();
    }
  };

  render() {
    const { pageState, onPrevPage } = this.props;
    const {
      email,
      mobile,
      country,
      countries,
      cities,
      city,
      errors
    } = pageState;

    return (
      <div className="wrapper">
        <Field
          id="email"
          labelText="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.onLocalChange}
          placeholder="Enter email"
          error={errors.email}
        />

        <Field
          id="mobile"
          labelText="Mobile"
          type="text"
          name="mobile"
          value={mobile}
          onChange={this.onLocalChange}
          placeholder="Enter mobile"
          error={errors.mobile}
        />

        <Select
          id="country"
          labelText="Country"
          name="country"
          value={country}
          onChange={this.onLocalChange}
          error={errors.country}
          array={countries}
        />

        <Select
          id="city"
          labelText="City"
          name="city"
          value={city}
          onChange={this.onLocalChange}
          error={errors.city}
          array={cities[+country]}
        />

        <div className="form-group my-form-group">
          <Button
            text="Previous"
            onClick={onPrevPage}
            className="btn-light mr-4"
          />
          <Button
            text="Next"
            onClick={this.onClickNextPage}
            className="btn-secondary"
          />
        </div>
      </div>
    );
  }
}
