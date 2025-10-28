import React, { useState } from 'react'

const DocReg = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefualt()
  }
  return (
    <div>
      <h1 className="text-primary text-3xl">
        Are a passionate health professional who wants to connect to more
        patients and offer quality health services?
      </h1>
      <br />
      <h3 className="text-2xl mb-2.5">Register to join our platform</h3>
      <form className="min-h-[80vh] w-5" action="submit">
        <div className='flex flex-col gap-5 m-auto  p-8 min-w[340px] sm:min-w-95 border border-teal-100 rounded-xl text-gray-600 text-sm shadow-lg  bg-teal-50"'>
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-500 rounded-2xl w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.text)}
              value={name}
            />
          </div>

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
        </div>
      </form>
    </div>
  );
}

export default DocReg