"use client";
import React from "react";
import { Send, Paperclip, User } from "lucide-react";

const Conversation = () => {
  return (
    <div className="w-full">
      {/* Main Container */}
      <div className="bg-white rounded-xl  shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row h-[85vh]">
        {/* Left Side: Message Area */}
        <div className="flex-1 flex flex-col border-r border-gray-100">
          {/* Header Info */}
          <div className="p-4 md:p-5 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center cursor-pointer gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <User size={18} className="text-gray-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm">App Devs</h4>
                <h6 className="text-xs text-orange-500 font-medium">
                  Ticket ID: #trvXqZTRH9
                </h6>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Pending
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-[#fcfcfc]">
            <h5 className="font-bold text-lg mb-4">Messages</h5>

            {/* Sender Message */}
            <div className="flex items-end gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <User size={14} className="text-gray-500" />
              </div>
              <div className="bg-primary  px-5 py-2 rounded-2xl rounded-bl-none shadow-md">
                <h6 className="text-sm text-white! ">Hi</h6>
              </div>
            </div>

            {/* Self Message */}
            <div className="flex items-end gap-3 justify-end ml-auto max-w-[85%] text-right">
              <div className="bg-primary  px-5 py-2 rounded-2xl rounded-br-none shadow-md">
                <h6 className="text-sm text-white! ">Hello</h6>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <User size={14} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 md:p-4 border-t border-gray-100 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Write something..."
                className="w-full pl-4 pr-14 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-all text-sm"
              />
              <button className="absolute cursor-pointer right-2 p-2 bg-secondery/90 text-white rounded-lg hover:bg-slate-800 transition-all shadow-sm active:scale-95">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Support Details */}
        <div className="w-full md:w-80 p-4 md:p-6 space-y-8 bg-white border-t md:border-t-0">
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-sm font-bold">Pending</span>
            </div>

            <h5 className="font-bold text-md mb-4 border-b pb-2">
              Support Details
            </h5>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-gray-500 font-medium">Subject :</span>
                <span className="font-semibold uppercase text-right">Talking</span>
              </div>

              <div className="space-y-1">
                <span className="text-gray-500 font-medium">Description :</span>
                <p className="text-gray-700 bg-gray-50 p-2 rounded border border-dashed border-gray-200">
                  Hello, I am facing an issue with integrating the payment
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-gray-500 font-medium italic">
                  Attachments - 1:
                </span>
                <div className="flex items-center gap-2 text-indigo-600 hover:underline cursor-pointer group">
                  <Paperclip
                    size={14}
                    className="group-hover:rotate-45 transition-transform"
                  />
                  <span className="text-xs font-medium truncate">
                    Screenshot 2025-12-11 1256628
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
