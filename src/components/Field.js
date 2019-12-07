import React from 'react'

const Field = props => {
	const {
		labelText,
		type,
		placeholder,
		name,
		value,
		onChange,
		id,
		error,
	} = props
	return (
		<div className="form-group">
			<label htmlFor={id}>{labelText}</label>
			<input
				id={id}
				type={type}
				name={name}
				className={error ? 'form-control error' : 'form-control'}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error ? <div className="invalid-feedback">{error}</div> : null}
		</div>
	)
}

export default Field
