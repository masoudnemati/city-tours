import React from "react";
import logo from "../../logo.svg";

export default function Navbar() {
  return (
    <header className="bg-gray-700 px-4 py-3 flex items-center justify-between">
      <div className="text-white">
        <ul className="flex pr-20">
          <li>
            <i className="fas fa-home pl-1"></i>
            <a href="/">خانه</a>
          </li>
          <li className="pl-10 pr-10">
            <i className="fas fa-address-card" /> <a href="/">درباره ما</a>
          </li>
          <li>
            <i className="fas fa-globe-americas pl-1" />
            <a href="/">تورهای گردشگری</a>
          </li>
        </ul>
      </div>
      <div>
        <img className="h-6 pl-10" src={logo} alt="city toour" />
      </div>
    </header>
  );
}
