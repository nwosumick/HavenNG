import React, { useState } from "react";
import {
  FiHome,
  FiMapPin,
  FiDollarSign,
  FiImage,
  FiUser,
  FiCheck,
  FiUpload,
} from "react-icons/fi";

const ListProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    propertyType: "",
    listingType: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    address: "",
    city: "",
    state: "",
    agentName: "",
    agentEmail: "",
    agentPhone: "",
  });

  const [features, setFeatures] = useState([]);

  const [images, setImages] = useState([]);

  const propertyFeatures = [
    "Parking",
    "Swimming Pool",
    "Security",
    "Generator",
    "Air Conditioning",
    "Furnished",
    "Boys Quarters",
    "Garden",
    "CCTV",
    "Gym",
  ];

  // =========================
  // HANDLE INPUTS
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =========================
  // HANDLE FEATURES
  // =========================

  const handleFeatureChange = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };


  // =========================
  // HANDLE IMAGE UPLOAD
  // =========================

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...imagePreviews]);

    // Allows the user to select the same file again
    e.target.value = "";
  };


  // =========================
  // REMOVE IMAGE
  // =========================

  const removeImage = (index) => {
    setImages((prev) => {
      const updatedImages = [...prev];

      URL.revokeObjectURL(updatedImages[index].preview);

      updatedImages.splice(index, 1);

      return updatedImages;
    });
  };


  // =========================
  // SUBMIT FORM
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyData = {
      ...formData,
      features,
      images,
    };

    console.log("Property Details:", propertyData);

    alert("Property submitted successfully!");
  };


  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">

      {/* =========================
          PAGE HEADER
      ========================== */}

      <section className="mx-auto max-w-5xl px-6">

        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            List Your Property
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Put your property in front of
            <span className="block text-amber-600">
              the right people.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Provide the details of your property below and make it easier
            for potential buyers and renters to discover your listing.
          </p>

        </div>


        {/* =========================
            FORM
        ========================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >


          {/* =========================
              PROPERTY INFORMATION
          ========================== */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <FiHome size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Property Information
                </h2>

                <p className="text-sm text-slate-500">
                  Tell us about your property.
                </p>
              </div>

            </div>


            <div className="space-y-5">

              {/* Property Title */}

              <div>

                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Property Title
                </label>

                <input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Luxury 3 Bedroom Apartment in Lekki"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                />

              </div>


              {/* Description */}

              <div>

                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Property Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe the property, surroundings, facilities and anything else buyers should know..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
                />

              </div>


              {/* Property Type + Listing Type */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="propertyType"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Property Type
                  </label>

                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                  >

                    <option value="">
                      Select property type
                    </option>

                    <option value="Apartment">
                      Apartment
                    </option>

                    <option value="House">
                      House
                    </option>

                    <option value="Duplex">
                      Duplex
                    </option>

                    <option value="Villa">
                      Villa
                    </option>

                    <option value="Penthouse">
                      Penthouse
                    </option>

                    <option value="Land">
                      Land
                    </option>

                    <option value="Office">
                      Office
                    </option>

                    <option value="Shop">
                      Shop
                    </option>

                  </select>

                </div>


                <div>

                  <label
                    htmlFor="listingType"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Listing Type
                  </label>

                  <select
                    id="listingType"
                    name="listingType"
                    value={formData.listingType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                  >

                    <option value="">
                      Select listing type
                    </option>

                    <option value="For Sale">
                      For Sale
                    </option>

                    <option value="For Rent">
                      For Rent
                    </option>

                  </select>

                </div>

              </div>

            </div>

          </section>


          {/* =========================
              PRICE & DETAILS
          ========================== */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <FiDollarSign size={20} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Price & Property Details
                </h2>

                <p className="text-sm text-slate-500">
                  Add the property's size and pricing information.
                </p>

              </div>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              {/* Price */}

              <div>

                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Price (₦)
                </label>

                <input
                  id="price"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="3500000"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>


              {/* Bedrooms */}

              <div>

                <label
                  htmlFor="bedrooms"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Bedrooms
                </label>

                <input
                  id="bedrooms"
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  placeholder="3"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>


              {/* Bathrooms */}

              <div>

                <label
                  htmlFor="bathrooms"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Bathrooms
                </label>

                <input
                  id="bathrooms"
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  placeholder="4"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>


              {/* Area */}

              <div>

                <label
                  htmlFor="area"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Property Size (sq ft)
                </label>

                <input
                  id="area"
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="2500"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>

            </div>

          </section>


          {/* =========================
              LOCATION
          ========================== */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <FiMapPin size={20} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Property Location
                </h2>

                <p className="text-sm text-slate-500">
                  Where is the property located?
                </p>

              </div>

            </div>


            <div className="space-y-5">

              {/* Address */}

              <div>

                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Street Address
                </label>

                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="12 Admiralty Way"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>


              <div className="grid gap-5 md:grid-cols-2">

                {/* City */}

                <div>

                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Lekki"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                  />

                </div>


                {/* State */}

                <div>

                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    State
                  </label>

                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                  >

                    <option value="">
                      Select state
                    </option>

                    <option value="Lagos">
                      Lagos
                    </option>

                    <option value="Abuja">
                      Abuja
                    </option>

                    <option value="Rivers">
                      Rivers
                    </option>

                    <option value="Oyo">
                      Oyo
                    </option>

                    <option value="Delta">
                      Delta
                    </option>

                    <option value="Enugu">
                      Enugu
                    </option>

                  </select>

                </div>

              </div>

            </div>

          </section>


          {/* =========================
              FEATURES
          ========================== */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7">

              <h2 className="text-xl font-bold text-slate-900">
                Property Features
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select all features available on the property.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">

              {propertyFeatures.map((feature) => {

                const selected = features.includes(feature);

                return (
                  <button
                    type="button"
                    key={feature}
                    onClick={() => handleFeatureChange(feature)}
                    className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                      selected
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-400"
                    }`}
                  >

                    {selected && (
                      <FiCheck
                        className="mr-1 inline"
                        size={14}
                      />
                    )}

                    {feature}

                  </button>
                );

              })}

            </div>

          </section>


          {/* =========================
              PROPERTY IMAGES
          ========================== */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <FiImage size={20} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Property Images
                </h2>

                <p className="text-sm text-slate-500">
                  Upload high-quality images of your property.
                </p>

              </div>

            </div>


            {/* Upload Area */}

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center transition hover:border-amber-500 hover:bg-amber-50/30">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">

                <FiUpload
                  size={22}
                  className="text-amber-600"
                />

              </div>


              <h3 className="mt-5 font-semibold text-slate-900">
                Upload property images
              </h3>


              <p className="mt-2 text-sm text-slate-500">
                PNG, JPG or WEBP
              </p>


              <p className="mt-1 text-xs text-slate-400">
                You can select multiple images
              </p>


              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />

            </label>


            {/* IMAGE PREVIEWS */}

            {images.length > 0 && (

              <div className="mt-7">

                <div className="mb-4 flex items-center justify-between">

                  <h3 className="font-semibold text-slate-900">
                    Selected Images
                  </h3>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {images.length} image
                    {images.length > 1 ? "s" : ""}
                  </span>

                </div>


                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

                  {images.map((image, index) => (

                    <div
                      key={index}
                      className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100"
                    >

                      {/* Image */}

                      <img
                        src={image.preview}
                        alt={`Property preview ${index + 1}`}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />


                      {/* Dark Overlay */}

                      <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />


                      {/* Remove Button */}

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-lg font-bold text-red-500 shadow-md transition hover:bg-red-500 hover:text-white"
                      >
                        ×
                      </button>


                      {/* Image Number */}

                      <div className="absolute bottom-2 left-2 rounded-lg bg-black/60 px-2 py-1 text-xs font-medium text-white">
                        Image {index + 1}
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            )}

          </section>


          {/* =========================
              CONTACT INFORMATION
          ========================== */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <FiUser size={20} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Contact Information
                </h2>

                <p className="text-sm text-slate-500">
                  How should interested buyers contact you?
                </p>

              </div>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              {/* Name */}

              <div>

                <label
                  htmlFor="agentName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="agentName"
                  type="text"
                  name="agentName"
                  value={formData.agentName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="agentEmail"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="agentEmail"
                  type="email"
                  name="agentEmail"
                  value={formData.agentEmail}
                  onChange={handleChange}
                  placeholder="agent@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>


              {/* Phone */}

              <div className="md:col-span-2">

                <label
                  htmlFor="agentPhone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="agentPhone"
                  type="tel"
                  name="agentPhone"
                  value={formData.agentPhone}
                  onChange={handleChange}
                  placeholder="+234 801 234 5678"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-amber-500"
                />

              </div>

            </div>

          </section>


          {/* =========================
              SUBMIT
          ========================== */}

          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold text-slate-800">
                Ready to publish your property?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Make sure all your property information is correct.
              </p>

            </div>


            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              Submit Property
            </button>

          </div>

        </form>

      </section>

    </main>
  );
};

export default ListProperty;