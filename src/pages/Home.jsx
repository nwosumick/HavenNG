import React from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMapPin,
  FiArrowRight,
  FiHeart,
  FiHome,
  FiKey,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const Home = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      type: "For Sale",
      title: "Modern Luxury Apartment",
      location: "Lekki Phase 1, Lagos",
      price: "₦85,000,000",
      beds: 3,
      baths: 3,
      size: "240 sqm",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      type: "For Rent",
      title: "Elegant Family Home",
      location: "Victoria Island, Lagos",
      price: "₦8,500,000 / year",
      beds: 4,
      baths: 4,
      size: "320 sqm",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      type: "For Sale",
      title: "Contemporary Family House",
      location: "Ikoyi, Lagos",
      price: "₦150,000,000",
      beds: 5,
      baths: 5,
      size: "450 sqm",
    },
  ];

  const categories = [
    {
      icon: <FiHome size={25} />,
      title: "Buy a Property",
      description: "Find your dream home from thousands of listings.",
      link: "/buy",
    },
    {
      icon: <FiKey size={25} />,
      title: "Rent a Property",
      description: "Discover comfortable homes in your preferred location.",
      link: "/rent",
    },
    {
      icon: <FiUsers size={25} />,
      title: "Find an Agent",
      description: "Connect with trusted real estate professionals.",
      link: "/agents",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-slate-950">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-40 sm:px-6 lg:px-8 lg:pb-36 lg:pt-48">

          <div className="max-w-3xl">

            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              Find a place you'll love to live
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Find your
              <span className="text-amber-400"> perfect place </span>
              to call home.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Discover homes, apartments, land and commercial properties
              across Nigeria. Search thousands of listings and find a place
              that feels like home.
            </p>

          </div>

          {/* =========================
              SEARCH BOX
          ========================== */}
          <div className="mt-10 max-w-5xl rounded-2xl border border-white/20 bg-white p-3 shadow-2xl sm:p-4">

            <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px_auto]">

              {/* Location */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <FiMapPin className="shrink-0 text-amber-500" size={20} />

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400">
                    Location
                  </p>

                  <input
                    type="text"
                    placeholder="City or neighbourhood"
                    className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold text-slate-400">
                  Property Type
                </p>

                <select className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-800 outline-none">
                  <option>Any Property</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Land</option>
                  <option>Office</option>
                </select>
              </div>

              {/* Listing Type */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold text-slate-400">
                  Listing Type
                </p>

                <select className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-800 outline-none">
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
              </div>

              {/* Search Button */}
              <Link
                to="/properties"
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-bold text-white transition hover:bg-amber-600"
              >
                <FiSearch size={19} />
                Search
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* =========================
          CATEGORIES
      ========================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
              Explore HavenNG
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to find your next property
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500 transition group-hover:bg-amber-500 group-hover:text-white">
                  {category.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-900">
                  Explore
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* =========================
          FEATURED PROPERTIES
      ========================== */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
                Featured Properties
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Homes worth discovering
              </h2>

              <p className="mt-3 max-w-xl text-slate-500">
                Explore some of the latest properties listed on HavenNG.
              </p>
            </div>

            <Link
              to="/properties"
              className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-500"
            >
              View all properties
              <FiArrowRight />
            </Link>

          </div>

          {/* Property Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => (
              <div
                key={property.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative h-64 overflow-hidden">

                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">

                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                      {property.type}
                    </span>

                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 transition hover:bg-amber-500 hover:text-white"
                    >
                      <FiHeart size={17} />
                    </button>

                  </div>

                </div>

                {/* Details */}
                <div className="p-5">

                  <p className="text-xl font-extrabold text-slate-900">
                    {property.price}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {property.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                    <FiMapPin className="text-amber-500" size={15} />
                    {property.location}
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.size}</span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================
          WHY HAVENNG
      ========================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Image */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                alt="Modern HavenNG property"
                className="h-[450px] w-full rounded-3xl object-cover"
              />

              <div className="absolute -bottom-6 right-6 rounded-2xl bg-white p-5 shadow-xl sm:right-10">
                <p className="text-3xl font-extrabold text-slate-900">
                  10K+
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Properties listed
                </p>
              </div>

            </div>

            {/* Content */}
            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
                Why HavenNG
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A smarter way to find your next home
              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                We make property hunting easier by bringing buyers, renters,
                landlords and trusted agents together in one simple platform.
              </p>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <FiShield size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Trusted Listings
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Discover quality properties from verified agents and
                      property owners.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <FiSearch size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Easy Property Search
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Search by location, property type, price and other
                      preferences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <FiUsers size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Connect With Agents
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Get connected with professionals who can help you find
                      the right property.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="bg-slate-950 py-20">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Your next move starts here
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to find your perfect property?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Browse thousands of properties and discover a place that matches
            your lifestyle, budget and dreams.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/properties"
              className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-amber-600"
            >
              Explore Properties
              <FiArrowRight />
            </Link>

            <Link
              to="/list-property"
              className="rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              List Your Property
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;