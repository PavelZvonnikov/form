import React from "react";

import { Field } from "../components/Field.jsx";
import { Button } from "../components/Button.jsx";

export class Page01Base extends React.Component {
  onLocalChange = e => {
    const { onChange, stateName } = this.props;
    onChange(e, stateName);
  };

  validate = () => {
    const { pageState } = this.props;
    const { firstname, lastname, password, repeatPassword } = pageState;

    const newErrors = {};

    if (firstname.length < 5) {
      newErrors.firstname = "Must be 5 characters or more";
    }

    if (lastname.length < 5) {
      newErrors.lastname = "Must be 5 characters or more";
    }

    if (password.length < 6) {
      newErrors.password = "Must be 6 characters or more";
    }

    if (password !== repeatPassword || repeatPassword < 6) {
      newErrors.repeatPassword = "Must be equal password";
    }

    return newErrors;
  };

  onClickNextPage = e => {
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
    const { pageState } = this.props;
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      gender,
      errors
    } = pageState;

    return (
      <div className="wrapper">
        <Field
          id="Firstname"
          labelText="Firstname"
          type="text"
          name="firstname"
          value={firstname}
          onChange={this.onLocalChange}
          placeholder="Enter firstname"
          error={errors.firstname}
        />
        <Field
          id="Lastname"
          labelText="Lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={this.onLocalChange}
          placeholder="Enter lastname"
          error={errors.lastname}
        />
        <Field
          id="Password"
          labelText="Password"
          type="password"
          name="password"
          value={password}
          onChange={this.onLocalChange}
          placeholder="Enter password"
          error={errors.password}
        />
        <Field
          id="RepeatPassword"
          labelText="Repeat password"
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={this.onLocalChange}
          placeholder="Enter repeat password"
          error={errors.repeatPassword}
        />
        <fieldset className="form-group">
          <div>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={this.onLocalChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={this.onLocalChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </fieldset>
        <div className="form-group my-form-group">
          <Button text="Previous" disabled />
          <Button
            text="Next"
            className="btn-secondary"
            onClick={this.onClickNextPage}
          />
        </div>
      </div>
    );
  }
}
