import React from "react";

import Field from "../components/Field.jsx";
import { Button } from '../components/Button.jsx';

export class Page01Base extends React.Component {
  onLocalChange = e => {
    const { onChange, stateName } = this.props;
    onChange(e, stateName);
  };

  validate = () => {
    const { pageState } = this.props;
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
    } = pageState;

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
  }

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
  }

  render() {
    const { pageState } = this.props;
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      errors,
    } = pageState;

    return (
      <div className="form card-body">
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
        <div className="form-group my-form-group">
          <Button
            text="Prev"
            disabled
          />
          <Button
            text="Next"
            onClick={this.onClickNextPage}
          />
        </div>
      </div>
    );
  }
}
