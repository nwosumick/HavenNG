import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiHeart,
  FiHome,
  FiPhone,
  FiMail,
  FiCheckCircle,
} from "react-icons/fi";
import { LuBed, LuBath, LuRuler } from "react-icons/lu";

const PropertyDetails = () => {
  const { id } = useParams();

  console.log()

  // =========================
  // PROPERTY DATA
  // =========================
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      title: "Modern Luxury Apartment",
      location: "Lekki Phase 1, Lagos",
      price: "₦85,000,000",
      type: "Apartment",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "240 sqm",
      yearBuilt: "2024",
      parking: "2 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "Experience sophisticated waterfront living in this premium apartment located in Eko Atlantic City, Lagos. Designed for residents who value comfort, privacy, convenience and modern luxury, this property offers a beautiful combination of contemporary architecture and an exceptional coastal lifestyle. The apartment features spacious living and dining areas, well-appointed bedrooms, modern bathrooms and a fully fitted kitchen. Large windows allow plenty of natural light into the home while offering beautiful views of the surrounding city and Atlantic waterfront. Residents can enjoy access to lifestyle facilities such as swimming pools, fitness facilities, secure parking, residents lounges and 24-hour security, depending on the specific development. Eko Atlantic itself is designed with modern infrastructure including independent power, treated water, fibre-optic connectivity and extensive road infrastructure. The location also provides convenient access to restaurants, shopping, business districts and the waterfront promenade. With its combination of premium accommodation, modern infrastructure, security and waterfront surroundings, this property is an excellent choice for anyone looking to experience an upscale Lagos lifestyle.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Serviced Apartment",
      ],
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      title: "Elegant Family Home",
      location: "Victoria Island, Lagos",
      price: "₦8,500,000 / year",
      type: "House",
      listing: "For Rent",
      beds: 4,
      baths: 4,
      size: "320 sqm",
      yearBuilt: "2023",
      parking: "3 Parking Spaces",
      furnished: "Semi Furnished",
      description:
        "An elegant family home situated in Victoria Island. This property offers generous living spaces, modern interiors and a peaceful environment suitable for families.",
      features: [
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Garden",
        "Security Gate",
      ],
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      title: "Contemporary Family House",
      location: "Ikoyi, Lagos",
      price: "₦150,000,000",
      type: "House",
      listing: "For Sale",
      beds: 5,
      baths: 5,
      size: "450 sqm",
      yearBuilt: "2025",
      parking: "4 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "A stunning contemporary family house in Ikoyi featuring premium finishes, spacious bedrooms, a modern kitchen and beautifully designed living areas.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Private Garden",
      ],
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      title: "Luxury City Apartment",
      location: "Yaba, Lagos",
      price: "₦5,000,000 / year",
      type: "Apartment",
      listing: "For Rent",
      beds: 2,
      baths: 2,
      size: "180 sqm",
      yearBuilt: "2024",
      parking: "1 Parking Space",
      furnished: "Fully Furnished",
      description:
        "A stylish city apartment located in Yaba. Perfect for professionals and small families looking for a modern home close to major parts of Lagos.",
      features: [
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Air Conditioning",
        "Internet Ready",
      ],
    },

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
      title: "Spacious Detached Duplex",
      location: "Ajah, Lagos",
      price: "₦120,000,000",
      type: "House",
      listing: "For Sale",
      beds: 4,
      baths: 4,
      size: "380 sqm",
      yearBuilt: "2024",
      parking: "4 Parking Spaces",
      furnished: "Semi Furnished",
      description:
        "A spacious detached duplex located in Ajah. The property provides plenty of indoor and outdoor space with modern facilities and excellent security.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Private Compound",
      ],
    },

    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      title: "Modern Serviced Apartment",
      location: "Ikeja, Lagos",
      price: "₦6,500,000 / year",
      type: "Apartment",
      listing: "For Rent",
      beds: 3,
      baths: 3,
      size: "220 sqm",
      yearBuilt: "2025",
      parking: "2 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "A modern serviced apartment in Ikeja offering comfort, convenience and easy access to major business and commercial areas.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Serviced Apartment",
      ],
    },

    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      title: "Modern Duplex",
      location: "Ikoyi, Lagos",
      price: "₦2,000,000,000",
      type: "House",
      listing: "For Sale",
      beds: 5,
      baths: 6,
      size: "440 sqm",
      yearBuilt: "2025",
      parking: "5 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "A premium modern duplex located in Ikoyi with luxurious interiors, spacious rooms and high-quality finishing throughout the property.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Private Garden",
      ],
    },

    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
      title: "Luxury City Apartment",
      location: "Lekki, Lagos",
      price: "₦5,000,000,000",
      type: "House",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: "2024",
      parking: "3 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "A luxury property in Lekki featuring elegant interiors, spacious rooms and premium facilities for comfortable modern living.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Private Garden",
      ],
    },

    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      title: "Luxury Family Home",
      location: "Lekki, Lagos",
      price: "₦5,000,000,000",
      type: "House",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: "2024",
      parking: "3 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "A beautiful luxury family home located in Lekki with spacious living areas and premium facilities.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Garden",
      ],
    },

    {
      id: 10,
      image:
        "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1200&auto=format&fit=crop",
      title: "Modern Serviced Apartment",
      location: "Lekki, Lagos",
      price: "₦5,000,000",
      type: "Apartment",
      listing: "For Rent",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: "2025",
      parking: "2 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "A modern serviced apartment designed for comfortable city living with excellent facilities and convenient access to major locations.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Internet Ready",
      ],
    },

    {
      id: 11,
      image:
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1200&auto=format&fit=crop",
      title: "Luxury City Apartment",
      location: "Eko Atlantic, Lagos",
      price: "₦5,000,000,000",
      type: "Apartment",
      listing: "For Sale",
      beds: 3,
      baths: 3,
      size: "350 sqm",
      yearBuilt: "2025",
      parking: "3 Parking Spaces",
      furnished: "Fully Furnished",
      description:
        "A premium apartment located in Eko Atlantic offering luxury accommodation, beautiful surroundings and modern facilities.",
      features: [
        "Swimming Pool",
        "24/7 Security",
        "Modern Kitchen",
        "Generator",
        "Borehole Water",
        "Parking Space",
        "CCTV Security",
        "Ocean View",
      ],
    },
  ];

  // Find selected property
  const property = properties.find(
    (item) => item.id === Number(id)
  );

  // If property doesn't exist
  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 pt-40 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Property Not Found
        </h1>

        <p className="mt-3 text-slate-500">
          Sorry, we couldn't find this property.
        </p>

        <Link
          to="/properties"
          className="mt-6 inline-flex items-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-500"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =========================
          HERO IMAGE
      ========================== */}
      <section className="bg-slate-950 pb-8 pt-28 md:pt-32">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <Link
            to="/properties"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <FiArrowLeft size={17} />
            Back to Properties
          </Link>

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">

            <img
              src={property.image}
              alt={property.title}
              className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[550px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Listing */}
            <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-lg">
              {property.listing}
            </span>

            {/* Heart */}
            <button
              type="button"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-amber-500 hover:text-white"
            >
              <FiHeart size={19} />
            </button>

            {/* Image Text */}
            <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-8">

              <p className="text-2xl font-extrabold sm:text-4xl">
                {property.price}
              </p>

              <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
                {property.title}
              </h1>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                <FiMapPin className="text-amber-400" />
                {property.location}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          DETAILS
      ========================== */}
      <section className="py-10">

        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">

          {/* LEFT */}
          <div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <LuBed className="mx-auto text-amber-500" size={24} />
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {property.beds}
                </p>
                <p className="text-xs text-slate-500">
                  Bedrooms
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <LuBath className="mx-auto text-amber-500" size={24} />
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {property.baths}
                </p>
                <p className="text-xs text-slate-500">
                  Bathrooms
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <LuRuler className="mx-auto text-amber-500" size={24} />
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {property.size}
                </p>
                <p className="text-xs text-slate-500">
                  Property Size
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <FiHome className="mx-auto text-amber-500" size={24} />
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {property.type}
                </p>
                <p className="text-xs text-slate-500">
                  Property Type
                </p>
              </div>

            </div>

            {/* Description */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">

              <h2 className="text-2xl font-extrabold text-slate-900">
                About this property
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {property.description}
              </p>

            </div>

            {/* Property Information */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">

              <h2 className="text-2xl font-extrabold text-slate-900">
                Property Information
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Property Type
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {property.type}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Listing Type
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {property.listing}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Year Built
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {property.yearBuilt}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Parking
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {property.parking}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Furnishing
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {property.furnished}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-500">
                    Location
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {property.location}
                  </span>
                </div>

              </div>

            </div>

            {/* Features */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">

              <h2 className="text-2xl font-extrabold text-slate-900">
                Property Features
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {property.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FiCheckCircle
                      className="shrink-0 text-amber-500"
                      size={18}
                    />

                    <span className="text-sm text-slate-600">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* =========================
              CONTACT CARD
          ========================== */}
          <aside>

            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold text-slate-500">
                Interested in this property?
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                Contact Agent
              </h2>

              {/* Agent */}
              <div className="mt-6 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-white">
                  HA
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    HavenNG Agent
                  </p>

                  <p className="text-sm text-slate-500">
                    Property Specialist
                  </p>
                </div>

              </div>

              {/* Contact Buttons */}
              <div className="mt-6 space-y-3">

                <a
                  href="tel:+2348000000000"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-amber-500"
                >
                  <FiPhone size={17} />
                  Call Agent
                </a>

                <a
                  href="mailto:agent@havenng.com"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <FiMail size={17} />
                  Email Agent
                </a>

              </div>

              {/* Schedule */}
              <button
                type="button"
                className="mt-3 w-full rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-amber-600"
              >
                Schedule a Viewing
              </button>

              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                By contacting the agent, you agree to HavenNG's
                terms and privacy policy.
              </p>

            </div>

          </aside>

        </div>

      </section>

    </div>
  );
};

export default PropertyDetails;