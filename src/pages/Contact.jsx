import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =========================
          HERO
      ========================== */}
      <section className="bg-slate-950 pb-16 pt-36">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Get in Touch
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's find your
              <span className="text-amber-400"> perfect place.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Whether you're buying, renting, selling, or simply have a
              question, our team is ready to help you every step of the way.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          CONTACT CONTENT
      ========================== */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            {/* =========================
                LEFT SIDE
            ========================== */}
            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
                Contact HavenNG
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                We're here to help.
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-slate-500">
                Have a question about a property? Looking to list your
                property? Our team would love to hear from you.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">

                {/* Email */}
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <FiMail size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Email us
                    </p>

                    <a
                      href="mailto:hello@havenng.com"
                      className="mt-1 block font-bold text-slate-900 transition hover:text-amber-500"
                    >
                      hello@havenng.com
                    </a>
                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <FiPhone size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Call us
                    </p>

                    <a
                      href="tel:+2348000000000"
                      className="mt-1 block font-bold text-slate-900 transition hover:text-amber-500"
                    >
                      +234 800 000 0000
                    </a>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <FiMapPin size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Our office
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      Lagos, Nigeria
                    </p>
                  </div>

                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                    <FiClock size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-400">
                      Opening hours
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Saturday: 9:00 AM - 3:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* =========================
                CONTACT FORM
            ========================== */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill out the form and our team will get back to you as soon
                  as possible.
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">

                  <FiCheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <div>
                    <p className="font-bold text-green-800">
                      Message sent successfully!
                    </p>

                    <p className="mt-1 text-sm text-green-700">
                      Thank you for contacting HavenNG. We'll get back to you
                      shortly.
                    </p>
                  </div>

                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                </div>

                {/* Phone + Subject */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Subject
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                    >
                      <option value="">
                        Select a subject
                      </option>

                      <option value="Buying a property">
                        Buying a property
                      </option>

                      <option value="Renting a property">
                        Renting a property
                      </option>

                      <option value="Selling a property">
                        Selling a property
                      </option>

                      <option value="Listing my property">
                        Listing my property
                      </option>

                      <option value="General enquiry">
                        General enquiry
                      </option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                  />

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-amber-500"
                >
                  <FiSend size={18} />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          MAP / LOCATION
      ========================== */}
      <section className="pb-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-slate-950">

            <div className="grid lg:grid-cols-2">

              {/* Text */}
              <div className="flex flex-col justify-center p-8 sm:p-12">

                <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
                  Visit HavenNG
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-white">
                  Come and see us.
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Our team is available to help you find the right property,
                  answer your questions and guide you through your real estate
                  journey.
                </p>

                <div className="mt-6 flex items-start gap-3">

                  <FiMapPin
                    size={22}
                    className="mt-1 shrink-0 text-amber-400"
                  />

                  <div>
                    <p className="font-bold text-white">
                      HavenNG Office
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Lagos, Nigeria
                    </p>
                  </div>

                </div>

              </div>

              {/* Map Placeholder */}
              <div className="flex min-h-[320px] items-center justify-center bg-slate-800">

                <div className="text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                    <FiMapPin size={30} />
                  </div>

                  <p className="mt-4 font-bold text-white">
                    Lagos, Nigeria
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    HavenNG Headquarters
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;