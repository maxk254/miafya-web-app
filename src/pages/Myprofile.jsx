import React, { useState } from "react";
import logged from "../assets/logged.png";
const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Maxwel Geofrey",
    image: "",
    email: "maxwel457@gmail.com",
    phone: "+254123456788",
    address: {
      line1: "Lower Kabete Westlands",
      line2: "Muranga road",
    },
    gender: "male",
    dob: "2004-05-21",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-3">
      <img className="w-36 rounded" src={logged} alt="userimage" />

      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((pre) => ({ ...pre, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-900 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-800">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((pre) => ({ ...pre, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setUserData((pre) => ({
                    ...pre,
                    address: { ...pre.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setUserData((pre) => ({
                    ...pre,
                    address: { ...pre.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-700">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-900 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-900">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((pre) => ({ ...pre, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-700">{userData.gender}</p>
          )}
          <p className="font-medium">BIRTHDAY:</p>
          {isEdit ? (
            <input className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((pre) => ({ ...pre, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-700">{userData.dob}</p>
          )}
        </div>
        <div className="mt-10">
          {isEdit ? (
            <button className="border border-primary px-7 py-1 rounded-3xl hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(false)}>SAVE INFORMATION</button>
          ) : (
            <button className="border border-primary px-7 py-1 rounded-3xl hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(true)}>EDIT</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
