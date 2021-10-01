import React from 'react';
import './ErrorTemplate.scss';

const ErrorTemplate = () => {
  return (
    <div className="error-container">
      <h1
        className="error-code-header"
        style={{
          fontFamily: 'HKBold',
          position: 'relative',
          top: 150,
          color: 'papayawhip',
        }}
      >
        500
      </h1>
      <h2
        className="error-desc-header"
        style={{
          fontFamily: 'HKBold',
          position: 'relative',
          top: 141,
          color: 'white',
        }}
      >
        Unexpected Error
      </h2>
      <p
        style={{
          fontFamily: 'HKMedium',
          fontSize: 19,
          textAlign: 'center',
          position: 'relative',
          top: 150,
          color: 'khaki',
          textShadow: '1px 1px royalblue',
        }}
      >
        We have reported this to our team! We will solve this issue as soon as possible.
      </p>
      <div className="gears">
        <div className="gear one">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <div className="gear two">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <div className="gear three">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </div>
  );
};

export default ErrorTemplate;
