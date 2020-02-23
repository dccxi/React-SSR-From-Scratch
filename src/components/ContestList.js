import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div>
      {contests.map(contest => {
        return (
          <ContestPreview
            {...contest}
            key={contest.id}
            onClick={onContestClick}
          />
        );
      })}
    </div>
  );
};

ContestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
