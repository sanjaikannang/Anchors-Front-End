import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navabar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);

    const payload = {
      email,
      password,
      role,
    };

    try {
      const res = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/homepage");
      } else {
        setErr("Invalid credentials. Please check your email and password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErr("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-blue-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-4 space-y-4">
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="text-xl text-grey font-semibold">Anchors</div>
            <br />
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center ">
              Login
            </h2>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border "
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border "
            />
            <select
              className="w-full p-2 mb-4 border"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="company">Company</option>
            </select>

            <button
              className="w-full font-medium bg-blue-400 text-white py-2 relative rounded-3xl"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading && (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-white mr-2"></div>
                </div>
              )}
              {!loading ? "Login" : ""}
            </button>
            {err && <p className="text-red-500 mt-2">{err}</p>}
            <p className="text-gray-600 mt-2">
              Don't have an account?
              <button
                onClick={() => navigate("/signup")}
                className="text-blue-600"
              >
                {" "}
                Signup here.
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
