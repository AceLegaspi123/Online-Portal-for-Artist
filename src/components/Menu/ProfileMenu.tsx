import React from "react";

const ProfileMenu = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col bg-gray-800 rounded-lg w-[350px] h-[428px] p-4 text-white relative items-center">
        <div className="flex items-center justify-center bg-gray-800 h-screen">
          <div className="p-[5px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
            <img
              src=""
              alt=""
              className="w-25 h-25 rounded-full bg-gray-800 object-cover"
            />
          </div>
        </div>

        <div className="text-center pb-6 p-3 gap-2 flex flex-col">
          <h1 className="text-3xl font-bold">ChristianJay69</h1>
          <p className="text-sm text-gray-300">
            christianjayEscasa69@gmail.com
          </p>
        </div>

        <div className="w-full border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <span className="font-bold">Theme</span>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-black border border-[#6D449F] flex items-center justify-center">
                🌙
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-600 border border-gray-400 flex items-center justify-center">
                ☀️
              </button>
              <div></div>
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <span className="font-bold">Browsing Mode</span>
            <span className="text-gray-400">Standard</span>
          </div>

          <div className="py-3">
            <span className="font-bold h-2">Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
