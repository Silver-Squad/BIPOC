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
      <div  className="ml-20 mr-20">

      {/* header container */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="mt-6 text-6xl text-black font-bold flex">Increasing Diversity in Tech</h2>
                <h2 className="mt-6 text-md text-black flex">
                A compilation of resources for companies and underrepresented groups can use to proactively learn of opportunities to adovocate for diversity in tech.</h2>

                <h2 className="mt-6 text-md text-black flex">
                Once a week, we’ll send you more up-to-date scholarships, events, job opportunities and more!</h2>

            </div>
            <div className="mt-10">
              <img width="500"
              src="/images/undraw-celebration.png"
              alt='celebration'
              />
              </div>
            </div>
      </div>

      <div>
        <div className="p-4 mt-5">
          <button className="bg-search text-white rounded-full p-2 w-40 hover:bg-altbox focus:outline-none flex items-center justify-center font-bold">
            Subscribe
          </button>
        </div>
      </div>

      {/* steps section */}
      <div className="pb-7">

        <div className="flex items-center justify-center">
          <div className="">

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5">
                <div className="font-extrabold text-6xl mt-0 absolute ml-5">
                Get Hired
                </div>
              </div>

              <div className="bg-firstbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
                <div className="ml-10 p-10">
                Job Board for underrepresented folks in tech
                </div>
                <div className="flex justify-end mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="/resources/gethired">
                Read More</a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5 flex justify-end">
                <div className="font-extrabold text-6xl mt-0 absolute mr-10">
                Events
                </div>
              </div>
              <div className="bg-altbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
                <div className="ml-10 p-10">
                Compilation of ongoing and upcoming conferences, hackathons, meet-ups and networking communities to help people support each other in tech
                </div>
                <div className="flex justify-end mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="/resources/events">
                Read More</a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5">
                <div className="font-extrabold text-6xl mt-0 absolute ml-5">
                Acceleration
                </div>
              </div>

              <div className="bg-firstbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
                <div className="ml-10 p-10">
                Collection of resources of different diversity intiatives that companies can use to practice within their workplace
                </div>
                <div className="flex justify-end mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="/resources/acceleration">
                Read More</a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5 flex justify-end">
                <div className="font-extrabold text-6xl absolute mr-10">
                Community
                </div>
              </div>
              <div className="bg-altbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
                <div className="ml-10 p-10">
                Underrepresented people and communities share their stories and experiences in tech
                </div>
                <div className="flex justify-end mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="/resources/community">
                Read More</a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5">
                <div className="font-extrabold text-6xl absolute ml-5">
                Education
                </div>
              </div>
              <div className="bg-firstbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
                <div className="ml-10 p-10">
                Scholarships for bootcamps, universities and tuition-free bootcamps to help underrepresented students and career-changers break into tech without the financial roacdblock
                </div>
                <div className="flex justify-end mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="/resources/education">
                Read More</a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-none border-none box-border pb-7 pl-4 mt-5 flex justify-end">
                <div className="font-extrabold text-6xl absolute mr-10">
                Research
                </div>
              </div>
              <div className="bg-altbox border-none leading-4 box-border h-130 w-275 p-4 rounded-lg min-w-min">
                <div className="ml-10 p-10">
                Informational resources that provide insight into the status of diversity and inclusion in the workplace
                </div>
                <div className="flex justify-end mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="/resources/research">
                Read More</a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      </div>
    );
  }
