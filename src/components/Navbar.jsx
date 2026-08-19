import React, { useState } from "react";
import log from "../assets/images/log.jpg";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiPlus,
  FiUser,
  FiSearch,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    { name: "Properties", path: "/properties" },
    { name: "Agents", path: "/agents" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]">

        {/* =========================
            MAIN NAVBAR
        ========================== */}
        <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <img
                src={log}
                alt="HavenNG"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="leading-none">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                Haven<span className="text-amber-500">NG</span>
              </h1>

              <p className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block">
                Find your place
              </p>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden items-center gap-1 lg:flex">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

          </div>

          {/* =========================
              DESKTOP ACTIONS
          ========================== */}
          <div className="hidden items-center gap-2 lg:flex">

            {/* Search */}
            <Link
              to="/properties"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              aria-label="Search properties"
            >
              <FiSearch size={18} />
            </Link>

            {/* Sign In */}
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <FiUser size={16} />
              Sign In
            </Link>

            {/* List Property */}
            <Link
              to="/list-property"
              className="group flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:shadow-lg"
            >
              <FiPlus
                size={17}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
              List Property
            </Link>

          </div>

          {/* =========================
              MOBILE BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">

            <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-6">

              {/* Mobile Navigation */}
              <div className="space-y-1">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-amber-50 text-amber-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                  >
                    {link.name}

                    <span className="text-xs">→</span>
                  </NavLink>
                ))}

              </div>

              {/* Mobile Search */}
              <Link
                to="/properties"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <FiSearch size={17} />
                Search Properties
              </Link>

              {/* Mobile Actions */}
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">

                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <FiUser size={16} />
                  Sign In
                </Link>

                <Link
                  to="/list-property"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-amber-500"
                >
                  <FiPlus size={16} />
                  List Property
                </Link>

              </div>

            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;