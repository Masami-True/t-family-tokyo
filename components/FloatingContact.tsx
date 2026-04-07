"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WeChat Popup */}
      {showWeChat && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-2">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm font-medium text-gray-800">
              Scan to connect on WeChat
            </p>
            <button
              onClick={() => setShowWeChat(false)}
              className="text-gray-400 hover:text-gray-600 ml-2"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="w-32 h-32 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
            <span className="text-xs text-gray-400">QR Code</span>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/message/YLKX2G23XTTKM1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
        </svg>
      </a>

      {/* WeChat Button */}
      <button
        onClick={() => setShowWeChat(!showWeChat)}
        aria-label="WeChat"
        className="w-14 h-14 rounded-full bg-[#07C160] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M8.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          <path d="M12 2C6.48 2 2 5.81 2 10.5c0 2.64 1.42 5 3.65 6.55-.14.53-.58 2.07-.67 2.4-.11.41.15.4.32.29.13-.08 2.07-1.36 2.93-1.93.56.09 1.14.19 1.77.19.36 0 .72-.02 1.07-.07A7.47 7.47 0 0010 14.5C10 10.36 13.58 7 18 7c.34 0 .68.02 1.01.06C17.89 4.03 15.17 2 12 2z" />
          <path d="M22 14.5c0-3.31-3.13-6-7-6s-7 2.69-7 6 3.13 6 7 6c.58 0 1.14-.07 1.68-.18l2.15 1.42c.13.08.33.09.24-.22-.06-.24-.39-1.37-.49-1.76C20.82 18.78 22 16.78 22 14.5z" />
        </svg>
      </button>
    </div>
  );
}
