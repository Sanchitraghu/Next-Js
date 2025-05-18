"use client";

import { useMemo } from "react";

export default function SignUp() {
  const inputFieldsArray = useMemo(() => {
    return [
      {
        fieldsName: "Full Name",
        type: "name",
        placeholder: "Enter your username",
      },
      {
        fieldsName: "Email",
        type: "email",
        placeholder: "Enter your valid email",
      },
      {
        fieldsName: "Password",
        type: "password",
        placeholder: "Enter your password",
      },
    ];
  }, []);

  return (
    <div>
      Sign Up Server Side Component
      <div className="mt-10">
        {inputFieldsArray.map((inputField) => {
          return (
            <div key={inputField.fieldsName}>
              <label className="block mb-2 mt-4 text-sm font-medium text-gray-900">
                {inputField.fieldsName}
              </label>
              <input
                type={inputField.type}
                onChange={() => {
                  console.log("hello");
                }}
                id={inputField.fieldsName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder={inputField.placeholder}
                required
              />
            </div>
          );
        })}
        <div>
          <button
            type="button"
            className="text-white w-full cursor-pointer mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
