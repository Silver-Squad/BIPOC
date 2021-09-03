import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'

export default function Login (props) {
  const history = useHistory();
  // const formRef = useRef();
  const [message, updateMessage] = useState('')
  // const [formInvalid, setValidForm] = useState(true)
  const [loginValue, handleChange] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    const { handleSignupOrLogin } = props;
    console.log(loginValue.email, loginValue.password)
    e.preventDefault();
    try {
      await authService.login(loginValue);
      handleSignupOrLogin()
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

    return (
      <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-center">
          <img width="150"
          src="/images/diversify-logo.png"
          alt='logo'
          />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login to your account</h2>
          <div className="mt-8">

            <div className="mt-6">
              <form autoComplete='off' onSubmit={handleSubmit}className="space-y-6">
              {message && <p>{message}</p>}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      onChange={handleChange}
                      value={loginValue.email}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={handleChange}
                      value={loginValue.password}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-test text-white rounded-full w-4/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold"
                  >
                    Log In
                  </button>
                </div>
              </form>
              &nbsp;&nbsp;
              <Link to='/signup'>
              <h3>Don't have an account?<p className='text-red-500 font-bold'>Sign Up</p></h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
    );
  }
