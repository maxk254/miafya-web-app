import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [state, setState] = useState("sign Up");

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-5 m-auto items-center p-8 min-w[340px] sm:min-w-95 border border-teal-100 rounded-xl text-gray-600 text-sm shadow-lg  bg-teal-50">
        <p className="text-2xl font-semibold text-black">
          {state === `sign Up` ? "Create Account" : "Login"}
        </p>
        <p>
          please {state === `sign Up` ? "Create Account" : "Login"} to book
          appointment
        </p>
        {state === "sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-500 rounded-2xl w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.text)}
              value={name}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-500 rounded-2xl w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.email)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-500 rounded-2xl w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.password)}
            value={password}
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-2xl text-base">
          {state === `sign Up` ? "Create Account" : "Login"}
        </button>

        {state === "sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-800 underline cursor-pointer">
              Login here
            </span>{" "}
          </p>
        ) : (
          <p>
            {" "}
            Create an account?{" "}
            <span
              onClick={() => setState("sign Up")}
              className="text-blue-800 underline cursor-pointer">
              {" "}
              Click here
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
}

export default Login