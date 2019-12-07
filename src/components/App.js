import React, { Component } from 'react'
import Field from '../components/Field'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			page: 1,
			firstname: '',
			lastname: '',
			password: '',
			repeatPassword: '',
			gender: 'male',
			mail: '',
			mobile: '',
			errors: {
				firstname: false,
				lastname: false,
				password: false,
				repeatPassword: false,
				gender: false,
				mail: false,
				mobile: false,
			},
		}
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = e => {
		const errors = {}
		const validMail = this.state.mail.match(
			/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
		)

		if (this.state.firstname.length < 5) {
			errors.firstname = 'Must be 5 characters or more'
		}

		if (this.state.lastname.length < 5) {
			errors.lastname = 'Must be 5 characters or more'
		}

		if (this.state.password.length < 6) {
			errors.password = 'Must be 6 characters or more'
		}

		if (this.state.password !== this.state.repeatPassword) {
			errors.repeatPassword = 'Must be equal password'
		}

		if (!validMail && this.page === 2) {
			errors.mail = 'Invalid email address'
		}

		if (this.state.mobile.length < 10 && this.page === 2) {
			errors.mobile = 'Invalid mobile'
		}

		if (Object.keys(errors).length > 0) {
			this.setState({
				errors: errors,
			})
		} else {
			let page = this.state.page
			this.setState({
				errors: {},
				page: page + 1,
			})
		}
	}

	onPrevious = e => {
		let page = this.state.page
		this.setState({
			page: page - 1,
		})
	}

	render() {
		const pageNumber = this.state.page
		const classNameNext = this.state.page === 4 ? true : false
		const classNamePrevious = this.state.page === 4 ? true : false

		return (
			<div className="form-container card">
				<form className="form card-body">
					{pageNumber === 1 ? (
						<Field
							id="Firstname"
							labelText="Firstname"
							type="text"
							name="firstname"
							value={this.state.firstname}
							onChange={this.onChange}
							placeholder="Enter firstname"
							error={this.state.errors.firstname}
						/>
					) : null}
					{pageNumber === 1 ? (
						<Field
							id="Lastname"
							labelText="Lastname"
							type="text"
							name="lastname"
							value={this.state.lastname}
							onChange={this.onChange}
							placeholder="Enter lastname"
							error={this.state.errors.lastname}
						/>
					) : null}
					{pageNumber === 1 ? (
						<Field
							id="Password"
							labelText="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.onChange}
							placeholder="Enter password"
							error={this.state.errors.password}
						/>
					) : null}
					{pageNumber === 1 ? (
						<Field
							id="RepeatPassword"
							labelText="Repeat password"
							type="password"
							name="repeatPassword"
							value={this.state.repeatPassword}
							onChange={this.onChange}
							placeholder="Enter repeat password"
							error={this.state.errors.repeatPassword}
						/>
					) : null}
					{pageNumber === 1 ? (
						<fieldset className="form-group">
							<div>Gender</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									id="male"
									name="gender"
									value="male"
									checked={this.state.gender === 'male'}
									onChange={this.onChange}
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
									checked={this.state.gender === 'female'}
									onChange={this.onChange}
								/>
								<label className="form-check-label" htmlFor="female">
									Female
								</label>
							</div>
						</fieldset>
					) : null}
					{pageNumber === 2 ? (
						<Field
							id="mail"
							labelText="Email"
							type="text"
							name="mail"
							value={this.state.mail}
							onChange={this.onChange}
							placeholder="Enter email"
							error={this.state.errors.mail}
						/>
					) : null}
					{pageNumber === 2 ? (
						<Field
							id="mobile"
							labelText="Mobile"
							type="text"
							name="mobile"
							value={this.state.mobile}
							onChange={this.onChange}
							placeholder="Enter mobile"
							error={this.state.errors.mobile}
						/>
					) : null}
					<div className="form-group my-form-group">
						<button
							type="button"
							disabled={classNamePrevious}
							className="btn btn-light mr-4"
							onClick={this.onPrevious}
						>
							Previous
						</button>
						<button
							type="button"
							disabled={classNameNext}
							className="btn btn-secondary"
							onClick={this.onSubmit}
						>
							Next
						</button>
					</div>
				</form>
			</div>
		)
	}
}
