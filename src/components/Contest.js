import React from 'react';
import PropTypes from 'prop-types';

class Contest extends React.Component {
  render() {
    return (
      <>
        <div className='Contest'>{this.props.description}</div>
        <div className='link home-link' onClick={this.props.contestListClick}>
          Contest List
        </div>
      </>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
};

export default Contest;
