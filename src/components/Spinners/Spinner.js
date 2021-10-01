import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Spinner = ({active}) => {
  return (
    <Dimmer active={active} inverted page>
      <Loader />
    </Dimmer>
  );
};

Spinner.propTypes = {
  active:PropTypes.bool,
}

Spinner.defaultProps = {
  active: true
};

export default Spinner;