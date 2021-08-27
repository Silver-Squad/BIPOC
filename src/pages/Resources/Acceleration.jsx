import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'
import "./Resources.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Acceleration (props) {
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
            <h2 className="m-6 text-6xl text-black font-bold">Downloads</h2>
          </div>
        </div>

        <div className="pb-10">
          <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 ml-20 mr-20 rounded-lg min-w-min">
            <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 rounded-lg min-w-min">
              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold mb-4"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Savanta_BLM_report.pdf" Download>Savanta BLM Everywhere - Download Report PDF</a></button>
              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Racial_Diversity_Roadmap.pdf" Download>Roadmap for Anti-Racism in Tech Pact - Download PDF</a></button>
            </div>
          </div>
        </div>

      </div>
    );
  }
