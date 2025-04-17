import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-[30rem] max-w-4xl flex shadow-2xl rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/3 bg-[#1AEBB7] flex flex-col items-center justify-center text-white p-8">
          <div className="text-center">
            <div className="text-5xl mb-4">
              <div className=" mx-auto  rounded-full flex-col flex items-center justify-center text-teal-400 text-3xl">
              <img
            src="/SwasticHMS.png"
            alt="SwastikHMS Logo"
            loading="lazy"
            className="w-[10rem] h-auto object-contain loa brightness-100 contrast-125 drop-shadow "
          />
             <span className="hidden text-white font-[700] sm:inline">SwastikHMS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 flex flex-col justify-center items-center p-10 bg-white">
          <div className="w-full max-w-sm">
            <div className="flex justify-end text-sm mb-2">
              <a href="#" className="text-gray-600 hover:underline">
                Need help?
              </a>
            </div>
            <h2 className="text-2xl text-center font-semibold mb-6">Log in</h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="joe@email.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <div className="text-right text-sm mt-1">
                  <a href="#" className="text-gray-600 hover:underline">
                    forgot password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-400 text-white font-semibold py-2 rounded hover:bg-teal-500 transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
