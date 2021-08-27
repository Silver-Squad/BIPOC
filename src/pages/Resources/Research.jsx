import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'
import "./Resources.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Research (props) {
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

        <div className="flex items-center justify-center">
          <div className="mt-8 ml-6">
            <h2 className="m-6 text-6xl text-black font-bold">Articles</h2>
          </div>
        </div>

        <div className="pb-10">
          <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-4 ml-20 mr-20 rounded-lg min-w-min">
            <div className="bg-askfor border-none leading-4 box-border h-15 w-275 p-10 rounded-lg min-w-min">
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.un.org/sustainabledevelopment/economic-growth/">United Nations Sustainable Development Goals - Economic Growth</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank"href="https://www.fromdayone.co/2021/03/12/how-to-be-anti-racist-in-your-tech-hiring/">How to Be Anti-racist in Your Tech Hiring - From Day One</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.cnbc.com/2021/06/06/tech-industry-2020-anti-racism-commitments-progress-check.html">Tech Companies Made Big Pledges To fight Racism Last Year - here’s how they’re doing so far</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://afrotech.com/report-reveals-67-percent-of-bipoc-employees-in-tech-have-a-diversity-inclusion-team-yet-they-still-arent-supported">Report Reveals 67 Percent of BIPOC in Tech Have a D&I Team, Yet Still Aren’t Supported - AfroTech</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.trustradius.com/vendor-blog/people-of-color-in-tech-report">2020 POC in Tech Report</a></li>
              <li className="mb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.wired.com/story/five-years-tech-diversity-reports-little-progress/">Five Years of Tech Diversity Reports—and Little Progress</a></li>
              <li className="mb-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="https://www.vox.com/2020/6/30/21300294/bipoc-what-does-it-mean-critical-race-linguistics-jonathan-rosa-deandra-miles-hercules/">Why the term “BIPOC” is so complicated, explained by linguists</a></li>
              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold mb-4"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Savanta_BLM_report.pdf" Download>Savanta BLM Everywhere - Download Report PDF</a></button>
              <button className="bg-test text-white rounded-full w-5/12 p-2 hover:bg-homepage focus:outline-none flex items-center justify-center font-extrabold"><a class="btn btn-secondary btn-xl rounded-pill" rel="noopener noreferrer" target="_blank" href="./pdfs/Racial_Diversity_Roadmap.pdf" Download>Roadmap for Anti-Racism in Tech Pact - Download PDF</a></button>
            </div>
          </div>
        </div>

      </div>
    );
  }
