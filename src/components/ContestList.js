import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests }) => {
  return (
    <div>
      {contests.map(contest => {
        return <ContestPreview {...contest} key={contest.id} />;
      })}
    </div>
  );
};

ContestList.propTypes = {
  contests: PropTypes.array
};

export default ContestList;
