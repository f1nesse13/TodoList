import React from 'react';

const ErrorList = ({ errors }) => {
  const errorList = errors.map((err, i) => <li key={i}>{err}</li>);

  return <ul className="error-list">{errorList}</ul>;
};

export default ErrorList;
