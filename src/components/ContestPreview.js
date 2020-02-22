import React from 'react';

const ContestPreview = contest => {
  return (
    <div className='ContestPreview'>
      <div className='category-name'>{contest.categoryName}</div>
      <div className='contest-name'>{contest.contestName}</div>
      <br/>
    </div>
  );
}

export default ContestPreview;
