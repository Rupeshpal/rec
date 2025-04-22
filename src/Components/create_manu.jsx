import React, { useState } from "react";

const CreateMenuModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuName, setMenuName] = useState("");
  const [url, setUrl] = useState("");
  const [dropdown, setDropdown] = useState("No");

  return (
    <div className="p-6">
      {/* Trigger Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => setShowModal(true)}
      >
        + Create Menu
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-md shadow-lg p-6 relative">
            <h2 className="text-xl font-semibold mb-4">CREATE MENU</h2>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Menu Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
                placeholder="Article"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">URL</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="controller/action"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Make Dropdown</label>
              <select
                className="w-full border px-3 py-2 rounded-md"
                value={dropdown}
                onChange={(e) => setDropdown(e.target.value)}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 border rounded-md"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save
              </button>
            </div>

            {/* Close icon top right */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMenuModal;
