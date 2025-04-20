import React, { useState } from "react";

const LoginForm = () => {
    const [showPopup, setShowPopup] = useState(false);

    function handlepopup() {
        setShowPopup(true);
    }
    function closePopup() {
        setShowPopup(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center scroll-smooth bg-gray-100">
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
                            <p className="text-sm text-black font-[100]  opacity-50  ">
                                Welcome to SwastikHMS, where compassionate care meets cutting-edge technology! Our hospital management software is designed to streamline operations, enhance patient care, and empower healthcare professionals. Whether you're a doctor, nurse, administrator, or staff member, SwastikHMS ensures seamless workflows, secure data management, and efficient service delivery.
                                </p>
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
                        <h2 className="text-2xl text-center text-teal-800 font-semibold mb-6">Log in</h2>

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
                                    <a href="#" className="text-gray-600 hover:underline"
                                        onClick={handlepopup}
                                    >
                                        Forgot Password?
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
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h3 className="text-lg text-gray-700 text-center  font-semibold mb-4">Forgot Password</h3>
                        <p className="mb-4 text-sm text-gray-600 text-justify">
                            Please contact your Hospital Administrator or an Authorized Personnel for login assistance.
                            <br />
                            <br />
                            For security reasons, only approved users can access SwastikHMS.
                            If you believe this is an error, kindly reach out to your system administrator.
                        </p>
                        <button
                            onClick={closePopup}
                            className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
