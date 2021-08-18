import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'

export default function Homepage (props) {
  const history = useHistory();
  const formRef = useRef();
  const [message, updateMessage] = useState('')
  const [formInvalid, setValidForm] = useState(true)
  const [formValue, handleChange] = useForm({
    email: "",
    password: "",
    passwordConf: "",
  });

  // useEffect(() => {
  //   formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  //   updateMessage('');
  // }, [formValue]);

  // const handleSubmit = async (e) => {
  //   const { handleSignupOrLogin } = props;
  //   console.log(formValue.email, formValue.password)
  //   e.preventDefault();
  //   try {
  //     if(formValue.password !== formValue.passwordConf)
  //       throw Error("Passwords must match")
  //     await authService.signup(formValue);
  //     handleSignupOrLogin()
  //     history.push("/");
  //   } catch (err) {
  //     updateMessage(err.message);
  //   }
  // };

    return (
      // header container
      <div>
        <div className="flex mb-4 justify-center">
          <div className="flex justify-center">
            <img width="500"
            src="/images/team-spirt.png"
            alt='team-spirit'
            />
          </div>
          <div className="mt-14">
          <h2 className="mt-6 text-4xl text-black font-bold flex items-center justify-left">Diverse world.</h2>
          <h2 className="mt-6 text-6xl text-black font-extrabold flex items-center justify-left">Diverse team.</h2>
          </div>
        </div>

      {/* search section */}
      <div className="bg-homepage">
        <div className="pt-6">
        <h2 className="pl-20 text-4xl text-white flex items-center justify-left">Work culture found easily...</h2>
        <h2 className="pl-20 text-1xl text-white flex items-center justify-left">Search for a company's D&I score here</h2>
        </div>
        <div className="pl-20 pt-2 pb-8">
          <div className="bg-white w-10/12 flex items-center justify-center rounded-full shadow-xl">
            <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="🔍   company name">
            </input>
            <div className="p-4">
              <button className="bg-search text-white rounded-full p-2 w-40 hover:bg-altbox focus:outline-none flex items-center justify-center font-bold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* steps section */}
      <div className="ml-4 mr-4 bg-white">
        <div className="pt-6">
        <h2 className="pb-6 text-4xl text-black flex items-center justify-center">Get your company score in 4 steps</h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4">

            <div className="bg-firstbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg">
              <div className="font-extrabold text-3xl">
              1
              </div>
              <div className="ml-6">
              Answer the questions in the D&I Test and fill out the data needed for a comprehensive score
              </div>
            </div>
            <div className="bg-altbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg">
              <div className="font-extrabold text-3xl">
              2
              </div>
              <div className="ml-6">
              Set up your company account and verify the claim on the company
              </div>
            </div>
            <div className="bg-homepage border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg">
              <div className="font-extrabold text-3xl">
              3
              </div>
              <div className="ml-6">
              Set up your company account and verify the claim on the company
              </div>
            </div>
            <div className="bg-altbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg">
              <div className="font-extrabold text-3xl">
              4
              </div>
              <div className="ml-6">
              Receive your score via e-mail and listed on your profile
              </div>
            </div>

          </div>
        </div>

        <div className="p-10 pt-6 pb-8">
            <div className="p-4 flex items-center justify-center">
              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold">
                Begin Test
              </button>
            </div>
        </div>
      </div>

        <div className="bg-navbar text-white">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 m-20">
              <div>How it works</div>
              <div>Resources</div>
              <div>Contact US</div>
              <div>Company D&I Test</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
