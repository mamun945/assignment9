"use client";

import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/allpets">All Pets</NavLink>
    </>
  );

  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log({user})

  return (
    <div className="navbar sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg px-4 lg:px-8 shadow-sm">

      {/* Left */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl gap-2"
          >
            {navLink}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          {/* Logo Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-500 overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=200&q=80"
              alt="cute pet image"
              width={50}
              height={50}
              className="object-cover scale-[1.5]"
            />

          </div>

          {/* Brand Name */}
          <div>

            <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              PetNest
            </h1>

            <p className="text-[10px] uppercase tracking-[3px] text-slate-400">
              Pet Adoption
            </p>

          </div>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-3 px-1">
          {navLink}
        </ul>

      </div>

      {/* Right */}
      <div className="navbar-end">

        {user ? (

          <div className="dropdown dropdown-end">

            {/* Avatar */}
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer"
            >

              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  referrerPolicy="no-referrer"
                  src={user?.image}
                />

                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[100] w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl gap-2"
            >

              {/* User Info */}
              <div className="border-b border-slate-100 pb-3 mb-2">

                <h2 className="font-semibold text-slate-800">
                  {user?.name}
                </h2>

                <p className="text-xs text-slate-500 truncate">
                  {user?.email}
                </p>

              </div>

              {/* Profile */}
              <li>
                <Link
                  href="/profile"
                  className="rounded-xl hover:bg-emerald-50 hover:text-emerald-600"
                >
                  👤 Profile
                </Link>
              </li>

              {/* Dashboard */}
              <li>
                <Link
                  href="/dashboard"
                  className="rounded-xl hover:bg-teal-50 hover:text-teal-600"
                >
                  📊 Dashboard
                </Link>
              </li>

              {/* Logout */}
              <li>
                <button
                  onClick={() => authClient.signOut()}
                  className="rounded-xl text-red-500 hover:bg-red-50"
                >
                  🚪 Logout
                </button>
              </li>

            </ul>

          </div>

        ) : (

          <Link href={"/login"}>

            <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Login
            </button>

          </Link>

        )}

      </div>
    </div>
  );
};

export default Navbar;