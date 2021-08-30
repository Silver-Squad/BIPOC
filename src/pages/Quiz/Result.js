import React from 'react';
import PropTypes from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group';
import emailjs from 'emailjs-com';

const handleSubmit = (e) => {
  e.preventDefault(); // Prevents default refresh by the browser
  emailjs.sendForm(`default_service`, 'template_fk00j0x', e.target, 'user_5JYVO8Qec0ur4H6qcI1iC')
  .then((result) => {
  alert("Message Sent, We will get back to you shortly", result.text);
  },
  (error) => {
  alert("An error occurred, Please try again", error.text);
  });
};

function Result(props) {
  return (
    <div className="result">
      You scored <strong>{props.quizResult}</strong>!
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="enter email" aria-label="Full name"></input>
          <button className="bg-search text-white rounded-full hover:bg-altbox focus:outline-none pl-10 pr-10 font-bold" type="submit">
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
