import axios from "axios";
import React, { useState } from "react";
import { UAParser } from "ua-parser-js";  // ✅ fix here

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [ipInfo, setIpInfo] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get browser/device info
      const parser = new UAParser();
      const resultData = parser.getResult();

      // Get IP + Location Info
      const res = await axios.get("https://ipapi.co/json/");
      setIpInfo(res.data);

      // Build audit data
      const auditData = {
        email: formData.email,
        browserName: resultData.browser.name,
        deviceType: resultData.device.type || "desktop",
        osName: resultData.os.name,
        osVersion: resultData.os.version,
        userAgent: resultData.ua,
        ipAddress: res.data.ip, // from ipapi
        city: res.data.city,
        region: res.data.region,
        country: res.data.country_name,
        isp: res.data.org,
        timestamp: new Date().toISOString(),
      };

      console.log("Login Data:", formData);
      console.log("Audit Data:", auditData);

     

    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Login to Your Account
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-6">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="username"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <input type="checkbox" className="rounded" /> Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg 
                       hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
