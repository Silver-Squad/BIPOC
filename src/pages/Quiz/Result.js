import React from 'react';
import PropTypes from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <div className="result">
      You scored <strong>{props.quizResult}</strong>!
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="enter email" aria-label="Full name"></input>
          <button className="bg-search text-white rounded-full hover:bg-altbox focus:outline-none pl-10 pr-10 font-bold">
            Send Results
          </button>
        </div>
      </form>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
