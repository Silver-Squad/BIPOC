import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from '../../hooks/useForm'

export default function GetHired (props) {
 

    return (
      <div  className="ml-20 mr-20">

      {/* header container */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="mt-6 text-6xl text-black font-bold flex">Under Construction</h2>

            </div>
            <div className="mt-10">
              <img width="500"
              src="/images/undraw-under-construction.png"
              alt='celebration'
              />
              </div>
            </div>
      </div>
      </div>
    );
  }
