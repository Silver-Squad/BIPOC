import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'

export default function HowItWorks (props) {
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
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
              <div className="mt-8 ml-6">
                <h2 className="mt-6 text-6xl text-black font-bold flex">How It Works</h2>
                <h2 className="mt-6 text-md text-black flex">
                We utilize qualitative and quantitative data to create a comprehensive score of a company’s diversity and inclusion. We ask companies to be transparent and provide the data and information needed in order to receive a score.   </h2>

                <h2 className="mt-6 text-md text-black flex">
                These scores are imperfect and subject to change just as people and companies are. We focus on providing the tools for success and creating diverse teams to reflect a diverse world. </h2>

            </div>
            <div className="mt-6">
              <img width="500"
              src="/images/undraw-todo.png"
              alt='team-spirit'
              />
              </div>
            </div>
      </div>

      <div>
        <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 mt-10 ml-60 mr-60 rounded-lg min-w-min">
          <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 ml-10 mr-10 rounded-lg min-w-min">
            <div className="mb-4">
            What we ask for:
            </div>
            <li className="mb-1">Company mission and general information</li>
            <li className="mb-1">Demographic makeup of the company</li>
            <li className="mb-1">Gartner Inclusion Index</li>
            <li className="mb-1">Company Hiring Practices</li>
          </div>
        </div>
      </div>

      {/* steps section */}
      <div className="ml-4 mr-4 bg-white">
        <div className="pt-6">
        <h2 className="pb-2 text-4xl text-black flex items-center justify-center">The 4 steps to get a report</h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4">

            <div className="bg-none border-none box-border p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              1
              </div>
            </div>
            <div className="bg-none border-none box-border p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              2
              </div>
            </div>
            <div className="bg-none border-none box-border p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              3
              </div>
            </div>
            <div className="bg-none border-none h-130 w-275 p-4">
              <div className="font-extrabold text-6xl mt-1 absolute">
              4
              </div>
            </div>

            <div className="bg-firstbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-10">
              Answer the questions in the D&I Test and fill out the data needed for a comprehensive score
              </div>
            </div>
            <div className="bg-altbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-12">
              Set up your company account and verify the claim on the company
              </div>
            </div>
            <div className="bg-homepage border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-12">
              Set up your company account and verify the claim on the company
              </div>
            </div>
            <div className="bg-altbox border-none font-bold leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
              <div className="ml-12">
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
