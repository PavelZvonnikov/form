import React from "react";

import { Button } from "../components/Button.jsx";

export class Page03Avatar extends React.Component {
  validate = () => {
    const { pageState } = this.props;
    const { avatar } = pageState;

    const errors = {};

    if (!avatar) {
      errors.avatar = "Required";
    }
    return errors;
  };

  onLocalChange = e => {
    const { onChange, stateName } = this.props;
    const reader = new FileReader();
    reader.onload = e => {
      onChange(e, stateName);
    };
    reader.readAsDataURL(e.target.files[0]);
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
    const { onPrevPage, pageState } = this.props;
    const { avatar, defaultImage, errors } = pageState;
    const image = !avatar ? defaultImage : avatar;
    const error = errors.avatar;

    return (
      <div className="wrapper">
        <img className="avatar mb-4" src={image} alt="#" />
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            name="avatar"
            id="avatar"
            onChange={this.onLocalChange}
          />
          <label
            className={error ? "custom-file-label error" : "custom-file-label"}
            htmlFor="avatar"
          >
            Choose avatar
          </label>
          {error ? <div className="invalid-feedback">{error}</div> : null}
        </div>

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
