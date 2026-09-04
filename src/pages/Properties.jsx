import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMapPin,
  FiHeart,
  FiSliders,
  FiChevronDown,
  FiHome,
} from "react-icons/fi";
import { LuBed } from "react-icons/lu";

const Properties = () => {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [listingType, setListingType] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 3;

  // ==========================================
  // PROPERTY DATA
  // ==========================================

  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      title: "Modern Luxury Apartment",
      location: "Lekki Phase 1, Lagos",
      price: "₦85,000,000",
      type: "Apartment",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "240 sqm",
      yearBuilt: 2024,
      parking: "2 Cars",
      furnished: "Fully Furnished",
      latitude: 6.4341,
      longitude: 3.4822,
      description:
        "A beautifully designed modern apartment located in the heart of Lekki Phase 1. This property features spacious rooms, modern finishes and excellent security.",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      title: "Elegant Family Home",
      location: "Victoria Island, Lagos",
      price: "₦8,500,000 / year",
      type: "House",
      listing: "For Rent",
      beds: 4,
      baths: 4,
      size: "320 sqm",
      yearBuilt: 2023,
      parking: "3 Cars",
      furnished: "Semi Furnished",
      description:
        "A spacious family home located in Victoria Island with beautiful interiors, generous living spaces and easy access to major areas of Lagos.",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      title: "Contemporary Family House",
      location: "Ikoyi, Lagos",
      price: "₦150,000,000",
      type: "House",
      listing: "For Sale",
      beds: 5,
      baths: 5,
      size: "450 sqm",
      yearBuilt: 2025,
      parking: "4 Cars",
      furnished: "Fully Furnished",
      description:
        "A contemporary family house in Ikoyi featuring premium finishes, large bedrooms, modern kitchen facilities and excellent outdoor space.",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      title: "Luxury City Apartment",
      location: "Yaba, Lagos",
      price: "₦5,000,000 / year",
      type: "Apartment",
      listing: "For Rent",
      beds: 2,
      baths: 2,
      size: "180 sqm",
      yearBuilt: 2024,
      parking: "1 Car",
      furnished: "Fully Furnished",
      description:
        "A stylish city apartment in Yaba, perfect for professionals and small families looking for convenience and modern living.",
    },

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
      title: "Spacious Detached Duplex",
      location: "Ajah, Lagos",
      price: "₦120,000,000",
      type: "House",
      listing: "For Sale",
      beds: 4,
      baths: 4,
      size: "380 sqm",
      yearBuilt: 2022,
      parking: "3 Cars",
      furnished: "Unfurnished",
      description:
        "A spacious detached duplex in Ajah offering multiple bedrooms, large living areas, modern bathrooms and a secure compound.",
    },

    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      title: "Modern Serviced Apartment",
      location: "Ikeja, Lagos",
      price: "₦6,500,000 / year",
      type: "Apartment",
      listing: "For Rent",
      beds: 3,
      baths: 3,
      size: "220 sqm",
      yearBuilt: 2025,
      parking: "2 Cars",
      furnished: "Fully Furnished",
      description:
        "A modern serviced apartment in Ikeja with quality finishing, spacious rooms, reliable security and convenient access to the airport.",
    },

    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      title: "Modern Duplex",
      location: "Ikoyi, Lagos",
      price: "₦2,000,000,000",
      type: "House",
      listing: "For Sale",
      beds: 5,
      baths: 6,
      size: "440 sqm",
      yearBuilt: 2025,
      parking: "4 Cars",
      furnished: "Fully Furnished",
      description:
        "A stunning modern duplex located in Ikoyi with luxurious interiors, spacious bedrooms, multiple bathrooms and premium facilities.",
    },

    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop",
      title: "Luxury City House",
      location: "Lekki, Lagos",
      price: "₦5,000,000,000",
      type: "House",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: 2024,
      parking: "3 Cars",
      furnished: "Fully Furnished",
      description:
        "A luxury property in Lekki designed for comfortable modern living with spacious rooms, quality finishes and excellent parking facilities.",
    },

    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop",
      title: "Luxury Family House",
      location: "Lekki, Lagos",
      price: "₦5,000,000,000",
      type: "House",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: 2023,
      parking: "3 Cars",
      furnished: "Semi Furnished",
      description:
        "A beautiful family property in Lekki offering comfortable bedrooms, spacious living areas and a peaceful residential environment.",
    },

    {
      id: 10,
      image:
        "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1331&auto=format&fit=crop",
      title: "Modern Serviced Apartment",
      location: "Lekki, Lagos",
      price: "₦5,000,000 / year",
      type: "Apartment",
      listing: "For Rent",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: 2025,
      parking: "2 Cars",
      furnished: "Fully Furnished",
      description:
        "A modern serviced apartment in Lekki offering beautiful interiors, excellent security and convenient access to shopping and entertainment.",
    },

    {
      id: 11,
      image:
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop",
      title: "Luxury City Apartment",
      location: "Eko Atlantic, Lagos",
      price: "₦5,000,000,000",
      type: "Apartment",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: 2025,
      parking: "2 Cars",
      furnished: "Fully Furnished",
      description:
        "A premium apartment in Eko Atlantic offering spectacular city views, modern architecture, luxury facilities and high-end finishes.",
    },
  ];

  // ==========================================
  // FILTER
  // ==========================================

  const filteredProperties = properties.filter((property) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText);

    const matchesType =
      propertyType === "All Types" ||
      property.type === propertyType;

    const matchesListing =
      listingType === "All" ||
      property.listing === listingType;

    return matchesSearch && matchesType && matchesListing;
  });

  // ==========================================
  // SORT
  // ==========================================

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "Newest") {
      return b.id - a.id;
    }

    if (sortBy === "Price: Low to High") {
      const priceA = Number(a.price.replace(/[^0-9]/g, ""));
      const priceB = Number(b.price.replace(/[^0-9]/g, ""));

      return priceA - priceB;
    }

    if (sortBy === "Price: High to Low") {
      const priceA = Number(a.price.replace(/[^0-9]/g, ""));
      const priceB = Number(b.price.replace(/[^0-9]/g, ""));

      return priceB - priceA;
    }

    return 0;
  });

  // ==========================================
  // PAGINATION
  // ==========================================

  const totalPages = Math.ceil(
    sortedProperties.length / propertiesPerPage
  );

  const startIndex =
    (currentPage - 1) * propertiesPerPage;

  const currentProperties = sortedProperties.slice(
    startIndex,
    startIndex + propertiesPerPage
  );

  // ==========================================
  // CLEAR FILTERS
  // ==========================================

  const clearFilters = () => {
    setSearch("");
    setPropertyType("All Types");
    setListingType("All");
    setSortBy("Newest");
    setCurrentPage(1);
  };

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <section className="bg-slate-950 pb-12 pt-36">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              HavenNG Properties
            </p>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Find a property you'll love
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Explore homes, apartments and properties available
              for sale or rent across Nigeria.
            </p>

          </div>


          {/* =====================================
              SEARCH BAR
          ====================================== */}

          <div className="mt-8 rounded-2xl bg-white p-3 shadow-xl">

            <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px_auto]">

              {/* Search */}

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

                <FiSearch
                  size={20}
                  className="shrink-0 text-amber-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search by location or property name"
                  className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                />

              </div>


              {/* Property Type */}

              <div className="relative">

                <select
                  value={propertyType}
                  onChange={(e) => {
                    setPropertyType(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="h-full w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 outline-none"
                >

                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>

                </select>

                <FiChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />

              </div>


              {/* Listing Type */}

              <div className="relative">

                <select
                  value={listingType}
                  onChange={(e) => {
                    setListingType(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="h-full w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 outline-none"
                >

                  <option>All</option>
                  <option>For Sale</option>
                  <option>For Rent</option>

                </select>

                <FiChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
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


      {/* =====================================
          PROPERTIES SECTION
      ====================================== */}

      <section className="py-12">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


          {/* =====================================
              TOP CONTROLS
          ====================================== */}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-xl font-extrabold text-slate-900">
                Available Properties
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {sortedProperties.length} properties found
              </p>

            </div>


            <div className="flex items-center gap-2">

              {/* Filter */}

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >

                <FiSliders size={16} />

                Filters

              </button>


              {/* Sort */}

              <div className="relative">

                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-sm font-semibold text-slate-700 outline-none"
                >

                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>

                </select>

                <FiChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={15}
                />

              </div>

            </div>

          </div>


          {/* =====================================
              PROPERTY GRID
          ====================================== */}

          {currentProperties.length > 0 ? (

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {currentProperties.map((property) => (

                <Link
                  to={`/properties/${property.id}`}
                  key={property.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >

                  {/* =================================
                      PROPERTY IMAGE
                  ================================== */}

                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                    {/* Listing */}

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow">
                      {property.listing}
                    </span>


                    {/* Heart */}

                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 transition hover:bg-amber-500 hover:text-white"
                    >

                      <FiHeart size={17} />

                    </button>


                    {/* Price */}

                    <div className="absolute bottom-4 left-4">

                      <p className="text-xl font-extrabold text-white">
                        {property.price}
                      </p>

                    </div>

                  </div>


                  {/* =================================
                      NORMAL PROPERTY DETAILS
                  ================================== */}

                  <div className="p-5">

                    <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-amber-500">
                      {property.title}
                    </h3>


                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">

                      <FiMapPin
                        size={15}
                        className="shrink-0 text-amber-500"
                      />

                      {property.location}

                    </div>


                    {/* Features */}

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


                  {/* =================================
                      HOVER DETAILS
                  ================================== */}

                  <div
                    className="
                      absolute inset-0
                      flex flex-col justify-end
                      bg-slate-950/95
                      p-6
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >

                    {/* Property Type + Listing */}

                    <div className="mb-3 flex items-center justify-between">

                      <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                        {property.type}
                      </span>

                      <span className="text-xs font-semibold text-slate-400">
                        {property.listing}
                      </span>

                    </div>


                    {/* Title */}

                    <h3 className="text-xl font-extrabold text-white">
                      {property.title}
                    </h3>


                    {/* Location */}

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">

                      <FiMapPin
                        size={15}
                        className="text-amber-400"
                      />

                      {property.location}

                    </div>


                    {/* Description */}

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
                      {property.description}
                    </p>


                    {/* Property Information */}

                    <div className="mt-5 grid grid-cols-2 gap-3">


                      {/* Bedrooms */}

                      <div className="rounded-xl bg-white/5 p-3">

                        <div className="flex items-center gap-2 text-amber-400">

                          <LuBed size={16} />

                          <span className="text-xs text-slate-400">
                            Bedrooms
                          </span>

                        </div>

                        <p className="mt-1 font-bold text-white">
                          {property.beds}
                        </p>

                      </div>


                      {/* Bathrooms */}

                      <div className="rounded-xl bg-white/5 p-3">

                        <div className="flex items-center gap-2 text-amber-400">

                          <FiHome size={16} />

                          <span className="text-xs text-slate-400">
                            Bathrooms
                          </span>

                        </div>

                        <p className="mt-1 font-bold text-white">
                          {property.baths}
                        </p>

                      </div>


                      {/* Size */}

                      <div className="rounded-xl bg-white/5 p-3">

                        <p className="text-xs text-slate-400">
                          Property Size
                        </p>

                        <p className="mt-1 font-bold text-white">
                          {property.size}
                        </p>

                      </div>


                      {/* Parking */}

                      <div className="rounded-xl bg-white/5 p-3">

                        <p className="text-xs text-slate-400">
                          Parking
                        </p>

                        <p className="mt-1 font-bold text-white">
                          {property.parking}
                        </p>

                      </div>

                    </div>


                    {/* Extra Information */}

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">

                      <span>
                        Built: {property.yearBuilt}
                      </span>

                      <span>
                        {property.furnished}
                      </span>

                    </div>


                    {/* View Property */}

                    <div className="mt-5">

                      <span className="block w-full rounded-xl bg-amber-500 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-400">
                        View Property
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            /* =================================
                NO RESULTS
            ================================== */

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">

                <FiSearch
                  size={24}
                  className="text-slate-400"
                />

              </div>


              <h3 className="mt-5 text-lg font-bold text-slate-900">
                No properties found
              </h3>


              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or filters.
              </p>


              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-amber-500"
              >
                Clear Filters
              </button>

            </div>

          )}


          {/* =====================================
              PAGINATION
          ====================================== */}

          {totalPages > 1 && (

            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">

              {/* Previous */}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                disabled={currentPage === 1}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  currentPage === 1
                    ? "cursor-not-allowed border-slate-100 bg-slate-100 text-slate-300"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                Previous
              </button>


              {/* Page Numbers */}

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition ${
                    currentPage === page
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>

              ))}


              {/* Next */}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  currentPage === totalPages
                    ? "cursor-not-allowed border-slate-100 bg-slate-100 text-slate-300"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                Next
              </button>

            </div>

          )}

        </div>

      </section>

    </div>
  );
};

export default Properties;