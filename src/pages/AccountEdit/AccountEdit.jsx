import React, { useState, useEffect, useRef  } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import * as profileService from "../../services/profileService";

export default function AccountEdit(props){
  const location = useLocation();
  //  allow us history access for routing 
  const history = useHistory();
  // initialize form as invalid
  const [formInvalid, setValidForm] = useState(true);
  // initialize object for form validation
  const formRef = useRef();
  //  custom hook to initialize state
  const [state, setAccount] = useForm(location.state);


  // hook to check form validity 
  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
      }, [state]);

  // pass form data via submit to handleAddProfile func 
  async function handleSubmit(e) {
      e.preventDefault();
      await profileService.update(state)
      history.push('/')
  }

  // const accountId = props.match.params.accountid;

  useEffect(() => {
    (async function() {
        const account = await profileService.getOne(props.match.params.id);
        setAccount(account);
    })();
}, []);

  const deleteProfile = () => profileService.deleteOne(props.profile._id);

  return (
    <main className="w-5/6 mt-10 mx-auto">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-8 divide-y divide-gray-200"
      >
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Company Account Information
            </h3>
            <p className="mt-2 mx-auto max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Company Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="company-name"
                    value={state.name}
                    onChange={setAccount}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Website
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    value={state.website}
                    onChange={setAccount}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Street address
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    value={state.address}
                    onChange={setAccount}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  City
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={state.city}
                    onChange={setAccount}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  State / Province
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={state.state}
                    onChange={setAccount}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  ZIP / Postal
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={state.zip}
                    onChange={setAccount}
                    autoComplete="postal-code"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
            Company Initiatives
          </h3>
          <p className="mt-2 mx-auto max-w-2xl text-sm text-gray-500">
            Describe the Initiatives your company is taking to increase minority
            representation
          </p>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Intitiative One
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="intone"
              name="intone"
              rows={3}
              value={state.initiativeOne}
              onChange={setAccount}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Intitiative Two
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="inttwo"
              name="inttwo"
              rows={3}
              value={state.initiativeTwo}
              onChange={setAccount}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
            Company Demographics
          </h3>
          <p className="mt-2 mx-auto max-w-2xl text-sm text-gray-500">
            Choose the option that best represents current minority employee
            makeup
          </p>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Percentage of minority employees
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="empRatio"
              name="empRatio"
              value={state.empRatio}
              onChange={setAccount}
              className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option value='0-5%'>0-5%</option>
              <option value='5-15%'>5-15%</option>
              <option value='15-25%'>15-25%</option>
              <option value='+25%'>+25%</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Percentage of minority employees in leadership positions
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="leaderRatio"
              name="leaderRatio"
              value={state.leaderRatio}
              onChange={setAccount}
              className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option value='0-5%'>0-5%</option>
              <option value='5-15%'>5-15%</option>
              <option value='15-25%'>15-25%</option>
              <option value='+25%'>+25%</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  D&I Score
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="score"
                    id="score"
                    value={state.score}
                    onChange={setAccount}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

        <div className="pt-5">
          <div className="flex justify-center mb-10">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={formInvalid}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
          <div className="justify-center mx-auto mb-10">
            <div className=''>
              <label
                className="text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Delete Profile Permenantley
              </label>
            </div>
            <div>
              <button
                type="submit"
                disabled={formInvalid}
                onClick={deleteProfile}
                className="ml-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Delete
              </button>
            </div>
          
          </div>
        </div>
      </form>
    </main>
  );
}

