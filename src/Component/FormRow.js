import React from 'react'

const FormRow = ({ name, type, value, onChange, labelName }) => {
  return (
    <div>
      <label htmlFor={name} className='form-label'>
        {labelName || name}
      </label>
      <input
        className='form-input'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormRow
