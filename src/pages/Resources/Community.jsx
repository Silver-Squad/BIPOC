import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'
import "./Resources.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Community (props) {
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
          <div className="mt-8 ml-6">
            <h2 className="m-6 text-6xl text-black font-bold flex items-center justify-center">Sites</h2>
              <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 ml-20 mr-20 rounded-lg min-w-min">
                <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 ml-10 mr-10 rounded-lg min-w-min">
                  <div>
                    <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://code2college.org">Code2College</a></li>
                    <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank"href="https://www.blackgirlscode.com/">Black Girls CODE</a></li>
                    <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://techqueria.org">Techqueria</a></li>
                  </div>
                </div>
              </div>

          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mt-8 ml-6">
            <h2 className="m-6 text-6xl text-black font-bold flex items-center justify-center">Videos</h2>
            <div>

              <div className="App">
                <h1 className="p-2 font-bold">How to Support BIPOC People in Tech</h1>
                <YoutubeEmbed embedId="uXRkscSy2j0" />
              </div>

              <div className="App">
                <h1 className="p-2 font-bold">Black Men in Tech: What's Missing From The Conversation?</h1>
                <YoutubeEmbed embedId="i0SdedFZgP8" />
              </div>

              <div className="App">
                <h1 className="p-2 font-bold">AWS re:Invent 2019: We Power Tech: In diversity and inclusion, details matter</h1>
                <YoutubeEmbed embedId="81YyX1A2CSA" />
              </div>

              <div className="App">
                <h1 className="p-2 font-bold">Tech Diversity & Inclusion Panel-Black Tech Week 2015</h1>
                <YoutubeEmbed embedId="DLpyJGDE22k" />
              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }
