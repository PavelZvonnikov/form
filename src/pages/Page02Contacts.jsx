import React from "react";

import Field from "../components/Field.jsx";
import { Button } from '../components/Button.jsx';

export class Page02Contacts extends React.Component {
  onLocalChange = e => {
    const { onChange, stateName } = this.props;
    onChange(e, stateName);
  };

  validate = () => {
    const { pageState } = this.props;
    const { check } = pageState;

    const errors = {};

    if (check.length < 5) {
      errors.check = "Must be 5 characters or more";
    }

    return errors;
  }

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
  }

  render() {
    const { pageState } = this.props;
    const { check, errors } = pageState;
    const { onPrevPage } = this.props;

    return (
      <div className="form card-body">
        <Field
          id="Check"
          labelText="Check"
          type="text"
          name="check"
          value={check}
          onChange={this.onLocalChange}
          placeholder="Enter check"
          error={errors.check}
        />
        <div className="form-group my-form-group">
          <Button
            text="Prev"
            onClick={onPrevPage}
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
