import React, { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiHeart,
  FiSliders,
  FiHome,
} from "react-icons/fi";
import { LuBed, LuBath } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Luxury 3 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    price: 85000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "180 sqm",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    status: "For Sale",
    description:
      "Beautiful modern apartment with spacious rooms, fitted kitchen and excellent security.",
  },

  {
    id: 2,
    title: "Modern 4 Bedroom Duplex",
    location: "Ikoyi, Lagos",
    price: 180000000,
    type: "Duplex",
    bedrooms: 4,
    bathrooms: 5,
    area: "320 sqm",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    status: "For Sale",
    description:
      "Elegant family duplex located in a quiet and secure environment.",
  },

  {
    id: 3,
    title: "Contemporary 2 Bedroom Flat",
    location: "Yaba, Lagos",
    price: 45000000,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "120 sqm",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    status: "For Sale",
    description:
      "Contemporary apartment perfect for young professionals and small families.",
  },

  {
    id: 4,
    title: "Premium 5 Bedroom Detached House",
    location: "Victoria Island, Lagos",
    price: 250000000,
    type: "Detached House",
    bedrooms: 5,
    bathrooms: 6,
    area: "500 sqm",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80",
    status: "For Sale",
    description:
      "Premium detached home with spacious interiors, parking and modern finishing.",
  },

  {
    id: 5,
    title: "Affordable 3 Bedroom Flat",
    location: "Surulere, Lagos",
    price: 55000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "160 sqm",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    status: "For Sale",
    description:
      "Affordable and spacious three-bedroom apartment in a convenient location.",
  },

  {
    id: 6,
    title: "Executive 4 Bedroom Duplex",
    location: "Ajah, Lagos",
    price: 95000000,
    type: "Duplex",
    bedrooms: 4,
    bathrooms: 4,
    area: "300 sqm",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80",
    status: "For Sale",
    description:
      "Executive duplex featuring modern architecture and premium finishing.",
  },
];

const Buy = () => {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [sort, setSort] = useState("Newest");
  const [favorites, setFavorites] = useState([]);

  // =========================
  // FAVORITES
  // =========================
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // =========================
  // FILTER
  // =========================
  const filteredProperties = properties
    .filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        propertyType === "All Types" ||
        property.type === propertyType;

      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sort === "Price Low to High") {
        return a.price - b.price;
      }

      if (sort === "Price High to Low") {
        return b.price - a.price;
      }

      return b.id - a.id;
    });

  // =========================
  // PRICE FORMAT
  // =========================
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-28">

      {/* =========================
          HERO
      ========================= */}
      <section className="px-6 py-14 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
              Properties For Sale
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#263D35] md:text-5xl">
              Find your next
              <span className="block text-[#C96F52]">
                dream home.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-[#68756E]">
              Discover beautiful properties for sale in Lagos and across
              Nigeria. Find a home that matches your lifestyle and budget.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SEARCH & FILTERS
      ========================= */}
      <section className="px-6 pb-12 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-[#263D35]/10 bg-white p-5 shadow-sm">

            <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_auto]">

              {/* SEARCH */}
              <div className="relative">

                <FiSearch
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718B7D]"
                />

                <input
                  type="text"
                  placeholder="Search properties..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-[#263D35]/10 bg-[#F8F7F4] py-4 pl-12 pr-4 text-sm text-[#263D35] outline-none transition focus:border-[#C96F52]"
                />

              </div>


              {/* PROPERTY TYPE */}
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="rounded-xl border border-[#263D35]/10 bg-[#F8F7F4] px-4 py-4 text-sm text-[#263D35] outline-none focus:border-[#C96F52]"
              >
                <option>All Types</option>
                <option>Apartment</option>
                <option>Duplex</option>
                <option>Detached House</option>
              </select>


              {/* SORT */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-[#263D35]/10 bg-[#F8F7F4] px-4 py-4 text-sm text-[#263D35] outline-none focus:border-[#C96F52]"
              >
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>


              {/* FILTER */}
              <button className="flex items-center justify-center gap-2 rounded-xl border border-[#263D35]/10 px-5 py-4 text-sm font-semibold text-[#263D35] transition hover:bg-[#F8F7F4]">
                <FiSliders size={17} />
                Filters
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PROPERTY LIST
      ========================= */}
      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-8 flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
                Available Properties
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#263D35]">
                Homes for sale
              </h2>

            </div>

            <p className="text-sm text-[#718078]">
              {filteredProperties.length} properties found
            </p>

          </div>


          {/* =========================
              PROPERTY GRID
          ========================= */}
          {filteredProperties.length > 0 ? (

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

              {filteredProperties.map((property) => (

                <div
                  key={property.id}
                  className="group overflow-hidden rounded-3xl border border-[#263D35]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#263D35]/10"
                >

                  {/* =========================
                      IMAGE
                  ========================= */}
                  <div className="relative h-[320px] overflow-hidden bg-[#E8E4DD]">

                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />


                    {/* DARK HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-[#263D35]/0 transition-all duration-500 group-hover:bg-[#263D35]/80" />


                    {/* STATUS */}
                    <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#263D35] shadow-lg">
                      {property.status}
                    </div>


                    {/* FAVORITE */}
                    <button
                      type="button"
                      onClick={() => toggleFavorite(property.id)}
                      className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#263D35] shadow-lg transition hover:scale-105"
                    >

                      <FiHeart
                        size={18}
                        className={
                          favorites.includes(property.id)
                            ? "fill-[#C96F52] text-[#C96F52]"
                            : ""
                        }
                      />

                    </button>


                    {/* =========================
                        HOVER DETAILS
                    ========================= */}
                    <div className="absolute inset-0 flex translate-y-8 flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9A28F]">
                        {property.type}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        {property.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-sm text-white/80">

                        <FiMapPin size={15} />

                        {property.location}

                      </div>

                      <p className="mt-3 text-sm leading-6 text-white/70">
                        {property.description}
                      </p>


                      {/* PROPERTY DETAILS */}
                      <div className="mt-5 flex flex-wrap gap-4 border-t border-white/20 pt-4">

                        <div className="flex items-center gap-2 text-sm text-white">
                          <LuBed size={17} />
                          {property.bedrooms} Beds
                        </div>

                        <div className="flex items-center gap-2 text-sm text-white">
                          <LuBath size={17} />
                          {property.bathrooms} Baths
                        </div>

                        <div className="flex items-center gap-2 text-sm text-white">
                          <FiHome size={16} />
                          {property.area}
                        </div>

                      </div>


                      {/* PRICE ON HOVER */}
                      <div className="mt-4">

                        <p className="text-xl font-bold text-white">
                          {formatPrice(property.price)}
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* =========================
                      PROPERTY CARD INFO
                  ========================= */}
                  <div className="p-6">

                    <h3 className="text-lg font-bold text-[#263D35]">
                      {property.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-[#718078]">

                      <FiMapPin size={15} />

                      {property.location}

                    </div>


                    {/* PRICE */}
                    <div className="mt-5">

                      <p className="text-2xl font-bold text-[#C96F52]">
                        {formatPrice(property.price)}
                      </p>

                      <p className="mt-1 text-xs text-[#8A9690]">
                        Asking price
                      </p>

                    </div>


                    {/* DETAILS */}
                    <div className="mt-5 flex items-center gap-5 border-t border-[#263D35]/10 pt-5">

                      <div className="flex items-center gap-2 text-sm text-[#5F6B64]">
                        <LuBed size={17} />
                        {property.bedrooms} Beds
                      </div>

                      <div className="flex items-center gap-2 text-sm text-[#5F6B64]">
                        <LuBath size={17} />
                        {property.bathrooms} Baths
                      </div>

                      <div className="text-sm text-[#5F6B64]">
                        {property.area}
                      </div>

                    </div>


                    {/* VIEW PROPERTY */}
                    <Link
                      to={`/properties/${property.id}`}
                      className="mt-6 inline-block w-full rounded-xl bg-[#263D35] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D3029]"
                    >
                      View Property
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* NO RESULTS */
            <div className="rounded-3xl bg-white px-6 py-20 text-center">

              <FiSearch
                size={35}
                className="mx-auto text-[#718B7D]"
              />

              <h3 className="mt-5 text-2xl font-bold text-[#263D35]">
                No properties found
              </h3>

              <p className="mt-2 text-[#718078]">
                Try changing your search or property type.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
};

export default Buy;