import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMapPin,
  FiHeart,
  FiChevronDown,
  FiHome,
} from "react-icons/fi";
import { LuBed } from "react-icons/lu";

const Rent = () => {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");

  const rentalProperties = [
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      title: "Elegant Family Home",
      location: "Victoria Island, Lagos",
      price: "₦8,500,000 / year",
      type: "House",
      beds: 4,
      baths: 4,
      size: "320 sqm",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      title: "Luxury City Apartment",
      location: "Yaba, Lagos",
      price: "₦5,000,000 / year",
      type: "Apartment",
      beds: 2,
      baths: 2,
      size: "180 sqm",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      title: "Modern Serviced Apartment",
      location: "Ikeja, Lagos",
      price: "₦6,500,000 / year",
      type: "Apartment",
      beds: 3,
      baths: 3,
      size: "220 sqm",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      title: "Premium Lekki Apartment",
      location: "Lekki Phase 1, Lagos",
      price: "₦7,000,000 / year",
      type: "Apartment",
      beds: 3,
      baths: 3,
      size: "250 sqm",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
      title: "Spacious Family Duplex",
      location: "Ajah, Lagos",
      price: "₦9,000,000 / year",
      type: "House",
      beds: 4,
      baths: 4,
      size: "380 sqm",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
      title: "Modern Ikoyi Apartment",
      location: "Ikoyi, Lagos",
      price: "₦12,000,000 / year",
      type: "Apartment",
      beds: 3,
      baths: 3,
      size: "280 sqm",
    },
  ];

  const filteredProperties = rentalProperties.filter((property) => {
    const searchMatch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const typeMatch =
      propertyType === "All Types" ||
      property.type === propertyType;

    return searchMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="bg-slate-950 pb-12 pt-36">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              HavenNG Rentals
            </p>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Find a place to rent
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Discover apartments, houses and premium rental properties
              available across Lagos and other parts of Nigeria.
            </p>

          </div>


          {/* =========================
              SEARCH
          ========================== */}
          <div className="mt-8 rounded-2xl bg-white p-3 shadow-xl">

            <div className="grid gap-3 md:grid-cols-[1fr_200px_auto]">

              {/* Search */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

                <FiSearch
                  size={20}
                  className="shrink-0 text-amber-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search location or property"
                  className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                />

              </div>


              {/* Property Type */}
              <div className="relative">

                <select
                  value={propertyType}
                  onChange={(e) =>
                    setPropertyType(e.target.value)
                  }
                  className="h-full w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 outline-none"
                >
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>House</option>
                </select>

                <FiChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

              </div>


              {/* Search Button */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-amber-600"
              >
                <FiSearch size={18} />
                Search
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          RENTAL PROPERTIES
      ========================== */}
      <section className="py-12">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-sm font-semibold text-amber-500">
                RENTAL PROPERTIES
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                Homes available for rent
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {filteredProperties.length} rental properties found
              </p>

            </div>

            <Link
              to="/properties"
              className="text-sm font-bold text-slate-700 transition hover:text-amber-500"
            >
              View all properties →
            </Link>

          </div>


          {/* =========================
              PROPERTY GRID
          ========================== */}
          {filteredProperties.length > 0 ? (

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProperties.map((property) => (

                <Link
                  key={property.id}
                  to={`/properties/${property.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Rent Badge */}
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow">
                      For Rent
                    </span>

                    {/* Heart */}
                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 transition hover:bg-amber-500 hover:text-white"
                    >
                      <FiHeart size={17} />
                    </button>

                  </div>


                  {/* Details */}
                  <div className="p-5">

                    <p className="text-xl font-extrabold text-slate-900">
                      {property.price}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-slate-900 transition group-hover:text-amber-500">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">

                      <FiMapPin
                        size={15}
                        className="shrink-0 text-amber-500"
                      />

                      {property.location}

                    </div>


                    {/* Property Details */}
                    <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">

                      <span className="flex items-center gap-1.5">
                        <LuBed size={15} />
                        {property.beds} Beds
                      </span>

                      <span>
                        {property.baths} Baths
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FiHome size={15} />
                        {property.size}
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            /* =========================
                NO RESULTS
            ========================== */
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">

                <FiSearch
                  size={24}
                  className="text-slate-400"
                />

              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                No rental properties found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another location or property type.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setPropertyType("All Types");
                }}
                className="mt-5 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-amber-500"
              >
                Clear Search
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="pb-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12">

            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              HavenNG
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
              Can't find the right rental property?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Explore more properties or let us help you find a home
              that matches your needs and budget.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/properties"
                className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-600"
              >
                Browse Properties
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Rent;