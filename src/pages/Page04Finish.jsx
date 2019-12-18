import React from "react";

import { Button } from "../components/Button.jsx";

export class Page04Finish extends React.Component {
  render() {
    const { pageState01, pageState02, pageState03, onReset } = this.props;
    const { firstname, lastname } = pageState01;
    const { email, mobile, country, countries, cities, city } = pageState02;
    const { avatar } = pageState03;

    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img className="avatar" src={avatar} alt="#" />
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>
              {firstname} {lastname}
            </h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Mobile:</strong> {mobile}
            </p>
            <p>
              <strong>Location:</strong> {countries[+country].name},{" "}
              {cities[+country][city].name}
            </p>
          </div>
        </div>
        <div className="form-group my-form-group">
          <Button text="Reset" onClick={onReset} className="btn-primary" />
        </div>
      </div>
    );
  }
}
