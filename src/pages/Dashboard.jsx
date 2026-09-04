import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiHeart,
  FiUser,
  FiPlus,
  FiMapPin,
  FiLogOut,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";

const Dashboard = () => {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            WELCOME SECTION
        ========================== */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold text-amber-500">
              HAVENNG DASHBOARD
            </p>

            <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
              Welcome back 👋
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              {currentUser?.email}
            </p>
          </div>

          <Link
            to="/list-property"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-500"
          >
            <FiPlus size={18} />
            List a Property
          </Link>

        </div>


        {/* =========================
            STAT CARDS
        ========================== */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Properties */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                <FiHome size={21} />
              </div>

              <span className="text-xs font-semibold text-slate-400">
                Properties
              </span>

            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              0
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your listed properties
            </p>

          </div>


          {/* Saved */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <FiHeart size={21} />
              </div>

              <span className="text-xs font-semibold text-slate-400">
                Saved
              </span>

            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              0
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Saved properties
            </p>

          </div>


          {/* Profile */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <FiUser size={21} />
              </div>

              <span className="text-xs font-semibold text-slate-400">
                Account
              </span>

            </div>

            <h2 className="mt-5 text-lg font-extrabold text-slate-900">
              Active
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your account status
            </p>

          </div>


          {/* Location */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-500">
                <FiMapPin size={21} />
              </div>

              <span className="text-xs font-semibold text-slate-400">
                Location
              </span>

            </div>

            <h2 className="mt-5 text-lg font-extrabold text-slate-900">
              Nigeria
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Property marketplace
            </p>

          </div>

        </div>


        {/* =========================
            DASHBOARD CONTENT
        ========================== */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Quick Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">

            <h2 className="text-lg font-extrabold text-slate-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your HavenNG account.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <Link
                to="/list-property"
                className="group rounded-xl border border-slate-200 p-4 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-500 group-hover:text-white">
                    <FiPlus size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      List Property
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Add a property for sale or rent
                    </p>
                  </div>

                </div>
              </Link>


              <Link
                to="/properties"
                className="group rounded-xl border border-slate-200 p-4 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-500 group-hover:text-white">
                    <FiHome size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Browse Properties
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Find your next property
                    </p>
                  </div>

                </div>
              </Link>


              <Link
                to="/profile"
                className="group rounded-xl border border-slate-200 p-4 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-500 group-hover:text-white">
                    <FiUser size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Edit Profile
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Manage your account
                    </p>
                  </div>

                </div>
              </Link>


              <Link
                to="/saved-properties"
                className="group rounded-xl border border-slate-200 p-4 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-amber-500 group-hover:text-white">
                    <FiHeart size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Saved Properties
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      View properties you saved
                    </p>
                  </div>

                </div>
              </Link>

            </div>

          </div>


          {/* Account */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <h2 className="text-lg font-extrabold text-slate-900">
              Your Account
            </h2>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
                {currentUser?.email?.charAt(0).toUpperCase()}
              </div>

              <p className="mt-4 break-all text-sm font-semibold text-slate-900">
                {currentUser?.email}
              </p>

              <p className="mt-1 text-xs text-green-600">
                ● Account active
              </p>

            </div>

            <button
              onClick={handleLogout}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-bold text-red-500 transition hover:bg-red-50"
            >
              <FiLogOut size={17} />
              Sign Out
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;