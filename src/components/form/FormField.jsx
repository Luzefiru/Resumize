import React from 'react';

class FormField extends React.Component {
  render() {
    const { label, onChange, type, name, id, value } = this.props;
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          value={value}
        />
      </>
    );
  }
}

export default FormField;
