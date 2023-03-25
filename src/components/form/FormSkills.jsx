import React from 'react';

class FormSkills extends React.Component {
  render() {
    const { id, name, type, onChangeFn, value } = this.props;
    return (
      <>
        <label htmlFor={id}>First Name: </label>
        <input
          onChange={onChangeFn}
          type={type}
          name={name}
          id={id}
          value={value}
        />
      </>
    );
  }
}

export default FormSkills;
