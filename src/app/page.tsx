import React from "react";
import { 
  Bell, 
  Settings, 
  Menu, 
  Home, 
  User, 
  MessageSquare, 
  Calendar 
} from "lucide-react";

const MobileDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <div className="p-4 bg-white relative">
        <div className="flex items-center justify-between">
          <Menu className="text-xl text-gray-700" size={20} />
          <span className="text-purple-800 font-semibold">Home</span>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-700" size={20} />
            <Settings className="text-gray-700" size={20} />
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center mt-4 space-x-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-purple-900 font-semibold">Angelica Jackson</h2>
            <p className="text-gray-400 text-sm">Master Mind</p>
            <p className="text-gray-400 text-xs">Active</p>
            <p className="text-gray-400 text-xs">Due Date: 05/01/2025</p>
          </div>
        </div>
      </div>

      {/* Next Meeting Card */}
      <div className="bg-[#91308d] text-white mx-4 rounded-xl p-4 mt-4">
        <p className="text-sm">Next Meeting</p>
        <h3 className="font-bold text-lg mt-1">Monday, March 05, 2025</h3>
        <span className="bg-gray-100 text-purple-900 px-2 py-1 rounded text-xs mt-2 inline-block">
          Meeting: In-Person
        </span>
        <div className="flex justify-between mt-4 text-sm">
          <div>
            <p className="text-gray-300">TYFCB</p>
            <p>74.5K</p>
          </div>
          <div>
            <p className="text-gray-300">Speakers</p>
            <p>2</p>
          </div>
          <div>
            <p className="text-gray-300">Visitors</p>
            <p>2</p>
          </div>
        </div>
      </div>

      {/* This Week's Slips */}
      <div className="border border-purple-900 mx-4 rounded-xl p-4 mt-4">
        <h4 className="text-purple-900 font-semibold mb-2">This Week's Slips</h4>
        <div className="flex justify-between text-sm">
          <div>TYFCBs</div>
          <div>0+</div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <div>Referrals</div>
          <div>0+</div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <div>CEUs</div>
          <div>0+</div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <div>One-to-Ones</div>
          <div>1+</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center h-16 bg-white border-t border-gray-200">
        <Home className="text-purple-900" size={20} />
        <User className="text-gray-400" size={20} />
        <MessageSquare className="text-gray-400" size={20} />
        <Calendar className="text-gray-400" size={20} />
        <Bell className="text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default MobileDashboard;