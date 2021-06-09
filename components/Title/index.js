import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='row title'>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </div>
  );
};

export default Title;
