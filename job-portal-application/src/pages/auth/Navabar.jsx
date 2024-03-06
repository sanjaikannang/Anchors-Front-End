import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const handleLogin = () => {
    Navigate("/login");
  };

  const handlesignup = () => {
    Navigate("/signup");
  };

  return (
    <nav className="bg-white-800 p-4 text-grey flex justify-between items-center">
      <div className="text-xl text-grey font-semibold">Anchors</div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogin}
          className="text-white bg-blue-400 font-medium px-4 py-1 rounded-2xl"
        >
          Login
        </button>
        <button
          onClick={handlesignup}
          className="text-white  border bg-blue-400 font-medium px-4 py-1 rounded-2xl"
        >
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
