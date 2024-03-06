import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navabar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setLoading(true);

      const payload = {
        name,
        email,
        userType,
      };

      const res = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Server response:", data); // Add this line to check server response

      if (res.ok) {
        // Registration successful
        if (!data.error && data.otp) {
          // OTP sent successfully, save OTP to sessionStorage
          sessionStorage.setItem("otp", data.otp);
          // Navigate to verify-otp page after 3 seconds
          setTimeout(() => {
            navigate("/verify-otp");
          }, 3000);
        } else if (data.token) {
          // Successfully registered, navigate to the login page
          navigate("/login");
        } else {
          // Registration failed, set error message
          setErr(data.error || "Error during signup. Please try again.");
        }
      } else {
        // Registration failed, set error message
        setErr(data.error || "Error during signup. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErr("Error during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-blue-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-4 space-y-4">
          <div className="bg-white p-6  shadow-md">
            <div className="text-xl text-grey font-semibold">Anchors</div>
            <br />
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center ">
              Register
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-4 border "
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border "
            />
            <select
              className="w-full p-2 mb-4 border"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="company">Company</option>
            </select>
            <button
              className="w-full font-medium bg-blue-400 text-white py-2 relative rounded-3xl"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading && (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-white mr-2"></div>
                </div>
              )}
              {!loading ? "Register" : "Sending OTP..."}
            </button>
            {err && <p className="text-red-500 mt-2">{err}</p>}
            {loading && (
              <p className="text-blue-600 mt-2">
                OTP sent to the email, kindly check it out in the email inbox
              </p>
            )}
            <p className="text-gray-600 mt-2">
              Already have an account?
              <Link to="/login" className="text-blue-600">
                {" "}
                Login here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
