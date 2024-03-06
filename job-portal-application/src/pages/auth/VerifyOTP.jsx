import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navabar";

const VerifyOTP = () => {
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);

      const storedOTP = sessionStorage.getItem("otp"); // Retrieve OTP from session storage

      // Fetch API to verify OTP
      const payload = {
        otp,
      };
      const res = await fetch("http://localhost:3000/user/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        if (data.success) {
          // OTP matches, navigate to login page
          navigate("/login");
        } else {
          // OTP does not match, set error message
          setErr("Incorrect OTP. Please try again.");
        }
      } else {
        setErr(data.message || "Error verifying OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErr("Error verifying OTP. Please try again.");
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
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
              Verify OTP
            </h2>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border"
            />
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="w-full p-2 mb-4 border"
            />
            <button
              className="w-full font-medium bg-blue-400 text-white py-2 relative rounded-3xl"
              onClick={handleVerifyOTP}
              disabled={loading}
            >
              {loading && (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-white mr-2"></div>
                </div>
              )}
              {!loading ? "Verify OTP" : "Verifying..."}
            </button>
            {err && <p className="text-red-500 mt-2">{err}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
