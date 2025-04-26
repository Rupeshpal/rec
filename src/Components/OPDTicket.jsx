import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const GeneralInformationForm = () => {
  const [formData, setFormData] = useState({
    payer: "",
    paymentType: "",
    uhid: "",
    patient_title: "",
    patient_firstname: "",
    patient_middlename: "",
    patient_lastname: "",
    patient_dob: "",
    patient_age: "",
    patient_contact: "",
    patient_district: "",
    municipality: "",
    village: "",
    maritalStatus: "",
    bloodGroup: "",
    patient_gender: "",
    patient_ethnicity: "",
    department: "",
    consultant: "",
    panOrNid: "",
    email: "",
    patientType: "",
    chargeCategory: "",
    chargeItem: "",
    charge_amount: "",
    discountScheme: "",
    discountAmount: "",
    paymentMethod: "",
    paymentAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const requiredFields = [
        "patient_firstname",
        "patient_lastname",
        "patient_gender",
        "patient_dob",
        "maritalStatus",
        "bloodGroup",
        "patientType",
        "patient_ethnicity",
        "department",
        "consultant",
        "paymentAmount",
      ];

      for (const field of requiredFields) {
        if (!formData[field] || formData[field].trim() === "") {
          toast.error(
            `The ${field
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()} field is required.`
          );
          return;
        }
      }

      const token = localStorage.getItem("authToken");

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/billing/opd`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Submitted successfully:", res.data);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);

      if (error.response) {
        if (error.response.status === 422) {
          const errors = error.response.data.errors;
          const errorMessages = Object.values(errors).flat();
          errorMessages.forEach((msg) => {
            toast.error(msg);
          });
        } else {
          toast.error(error.response.data.message || "Something went wrong!");
        }
      } else {
        toast.error("Server not reachable!");
      }
    }
  };

  return (
    <div className="w-full min-h-screen p-4 py-1 flex gap-4">
      <div className="w-[65%] bg-white p-2 shadow rounded">
        <div className="grid grid-cols-3 gap-2">
          <select
            name="payer"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              Payer
            </option>
            <option value="private">Private</option>
            <option value="insurance">Insurance</option>
            <option value="ssf">SSF</option>
          </select>
          <select
            name="paymentType"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option value="cash">Cash</option>
            <option value="insurance">Insurance</option>
            <option value="ssf">SSF</option>
          </select>
          <input
            name="uhid"
            onChange={handleChange}
            type="text"
            placeholder="Search by UHID"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
        </div>

        <h2 className="text-md font-bold mt-5">GENERAL INFORMATION</h2>
        <div className="grid grid-cols-3 gap-4">
          <select
            name="patient_title"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              Title
            </option>
            <option value="Mr">Mr.</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
          </select>
          <input
            name="patient_firstname"
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <input
            name="patient_middlename"
            onChange={handleChange}
            type="text"
            placeholder="Middle Name"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <input
            name="patient_lastname"
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <input
            name="patient_dob"
            onChange={handleChange}
            type="date"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <input
            name="patient_age"
            onChange={handleChange}
            type="number"
            placeholder="Age*"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <input
            name="patient_contact"
            onChange={handleChange}
            type="number"
            placeholder="Mobile No*"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <select
            name="patient_district"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              District
            </option>
            <option value="Parsa">Parsa</option>
            <option value="Bara">Bara</option>
          </select>
          <input
            name="municipality"
            onChange={handleChange}
            type="text"
            placeholder="Municipality*"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <input
            name="village"
            onChange={handleChange}
            type="text"
            placeholder="Village/Tole*"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <select
            name="maritalStatus"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              Marital Status*
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
          <select
            name="bloodGroup"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="O+">O+</option>
          </select>
          <select
            name="patient_gender"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            name="patient_ethnicity"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              Religion
            </option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
          </select>
          <select
            name="department"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              Department
            </option>
            <option value="Farmer">Farmer</option>
            <option value="Businessman">Businessman</option>
          </select>
          <select
            name="consultant"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option value="Consultant">Consultant</option>
            <option value="1">Dr. Madhurendra</option>
            <option value="2">Dr.IT</option>
          </select>
          <input
            name="panOrNid"
            onChange={handleChange}
            type="text"
            placeholder="PAN/NID*"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <input
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="Email"
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          />
          <select
            name="patientType"
            onChange={handleChange}
            className="w-full mt-1 border-b border-gray-300 focus:outline-none"
          >
            <option disabled selected>
              P. Type/Co-Pay Type
            </option>
            <option value="Normal">Normal</option>
            <option value="Disabled">Disabled</option>
          </select>
        </div>
      </div>

      <div className="w-[35%] bg-white p-4 shadow rounded space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Payment Method</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <select
              name="chargeCategory"
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none"
            >
              <option disabled selected>
                Charge Category
              </option>
              <option value="Opd">Opd</option>
              <option value="Emergency">Emergency</option>
            </select>
            <select
              name="chargeItem"
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none"
            >
              <option disabled selected>
                Select
              </option>
              <option value="Opd Ticket">Opd Ticket</option>
              <option value="FollowUp">FollowUp</option>
            </select>
            <input
              name="charge_amount"
              onChange={handleChange}
              type="number"
              placeholder="Rs 0"
              className="w-full border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="discountScheme"
              onChange={handleChange}
              className="w-full border-b border-gray-300  focus:outline-none"
            >
              <option disabled selected>
                Discount Scheme
              </option>
              <option value="5%">5%</option>
              <option value="10%">10%</option>
            </select>
            <input
              name="discountAmount"
              onChange={handleChange}
              type="number"
              placeholder="Rs 0"
              className="w-full border-b border-gray-300  focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="paymentMethod"
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none"
            >
              <option disabled selected>
                Select Payment
              </option>
              <option value="Cash">Cash</option>
              <option value="Insurance">Insurance</option>
            </select>
            <input
              name="paymentAmount"
              onChange={handleChange}
              type="number"
              placeholder="Rs 0"
              className="w-full border-b border-gray-300  focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="flex h-[4rem] w-[9rem] items-center justify-center border rounded-lg hover:shadow-md cursor-pointer">
            <img src="/esewa.png" alt="eSewa" className="w-30 h-auto" />
          </div>
          <div className="flex bg-pink-900 h-[4rem] w-[9rem] items-center justify-center border rounded-lg hover:shadow-md cursor-pointer">
            <img src="/khalti.png" alt="Khalti" className="w-30 h-auto" />
          </div>
          <div className="flex h-[4rem] w-[9rem] items-center justify-center border rounded-lg p-4 hover:shadow-md cursor-pointer">
            <img src="/Fone-pe.png" alt="IME Pay" className="w-30 h-auto" />
          </div>
        </div>
        <button
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          onClick={handleSubmit}
        >
          Pay Rs.599,00
        </button>
      </div>
    </div>
  );
};

export default GeneralInformationForm;
