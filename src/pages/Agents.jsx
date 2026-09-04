import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiStar,
  FiHome,
} from "react-icons/fi";

const agents = [
  {
    id: 1,
    name: "Michael Johnson",
    company: "HavenNG Realty",
    location: "Lekki, Lagos",
    properties: 24,
    rating: 4.9,
    phone: "+234 801 234 5678",
    email: "michael@havenng.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 2,
    name: "Sarah Williams",
    company: "Prime Homes Nigeria",
    location: "Victoria Island, Lagos",
    properties: 31,
    rating: 4.8,
    phone: "+234 802 345 6789",
    email: "sarah@primehomes.com",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 3,
    name: "David Anderson",
    company: "Urban Living NG",
    location: "Ikoyi, Lagos",
    properties: 18,
    rating: 4.7,
    phone: "+234 803 456 7890",
    email: "david@urbanliving.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 4,
    name: "Grace Okafor",
    company: "Lagos Property Hub",
    location: "Yaba, Lagos",
    properties: 27,
    rating: 4.9,
    phone: "+234 804 567 8901",
    email: "grace@lagospropertyhub.com",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 5,
    name: "Daniel Williams",
    company: "Elite Properties NG",
    location: "Ikeja, Lagos",
    properties: 35,
    rating: 4.8,
    phone: "+234 805 678 9012",
    email: "daniel@eliteproperties.com",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 6,
    name: "Amaka Eze",
    company: "Prime Estate Africa",
    location: "Ajah, Lagos",
    properties: 21,
    rating: 4.9,
    phone: "+234 806 789 0123",
    email: "amaka@primeestate.com",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
  },
];

const Agents = () => {
  const [search, setSearch] = useState("");

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.company.toLowerCase().includes(search.toLowerCase()) ||
      agent.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-24">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F8F7F4] py-20 lg:py-28">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#DCE8E1] blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#EBDDD5] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-[#263D35]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#526159]">
              Our Professionals
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#263D35] md:text-6xl">
              Find a trusted
              <span className="block text-[#C96F52]">
                property agent.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66756D]">
              Connect with experienced real estate agents who can help you
              find the perfect property in Lagos and beyond.
            </p>

          </div>

        </div>
      </section>


      {/* SEARCH */}
      <section className="relative z-10 -mt-5 pb-16">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="rounded-2xl border border-[#263D35]/10 bg-white p-4 shadow-xl">

            <div className="relative">

              <FiSearch
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718B7D]"
              />

              <input
                type="text"
                placeholder="Search agents, companies or locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[#263D35]/10 bg-[#F8F7F4] py-4 pl-12 pr-4 text-sm text-[#263D35] outline-none transition focus:border-[#C96F52] focus:ring-4 focus:ring-[#C96F52]/10"
              />

            </div>

          </div>

        </div>

      </section>


      {/* AGENTS */}
      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
                Real Estate Professionals
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#263D35]">
                Meet our agents
              </h2>

            </div>

            <p className="hidden text-sm text-[#718078] sm:block">
              {filteredAgents.length} agents found
            </p>

          </div>


          {filteredAgents.length > 0 ? (

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {filteredAgents.map((agent) => (

                <div
                  key={agent.id}
                  className="group overflow-hidden rounded-3xl border border-[#263D35]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* IMAGE */}

                  <div className="relative h-[300px] overflow-hidden bg-[#E9E1D5]">

                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#263D35]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    {/* Rating */}

                    <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-[#263D35] shadow-lg">

                      <FiStar
                        size={14}
                        className="fill-[#C96F52] text-[#C96F52]"
                      />

                      {agent.rating}

                    </div>

                    {/* Hover Contact */}

                    <div className="absolute bottom-5 left-5 right-5 flex translate-y-5 gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                      <a
                        href={`tel:${agent.phone}`}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#263D35]"
                      >
                        <FiPhone size={16} />
                        Call
                      </a>

                      <a
                        href={`mailto:${agent.email}`}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C96F52] px-4 py-3 text-sm font-semibold text-white"
                      >
                        <FiMail size={16} />
                        Email
                      </a>

                    </div>

                  </div>


                  {/* INFORMATION */}

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-[#263D35]">
                      {agent.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#C96F52]">
                      {agent.company}
                    </p>


                    <div className="mt-5 space-y-3">

                      <div className="flex items-center gap-3 text-sm text-[#66756D]">

                        <FiMapPin
                          size={17}
                          className="text-[#718B7D]"
                        />

                        {agent.location}

                      </div>

                      <div className="flex items-center gap-3 text-sm text-[#66756D]">

                        <FiHome
                          size={17}
                          className="text-[#718B7D]"
                        />

                        {agent.properties} properties listed

                      </div>

                    </div>


                    {/* BUTTON */}

                    <Link
                      to={`/agents/${agent.id}`}
                      className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-[#263D35]/15 px-4 py-3 text-sm font-semibold text-[#263D35] transition hover:border-[#263D35] hover:bg-[#F8F7F4]"
                    >

                      View Agent Profile

                      <FiArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />

                    </Link>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="rounded-3xl bg-white px-6 py-20 text-center">

              <FiSearch
                size={35}
                className="mx-auto text-[#718B7D]"
              />

              <h3 className="mt-5 text-2xl font-bold text-[#263D35]">
                No agents found
              </h3>

              <p className="mt-2 text-[#718078]">
                Try searching for another agent or location.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#263D35] py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E9A28F]">
            Find your perfect property
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Need help finding a home?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Our experienced agents are ready to help you find a property
            that matches your lifestyle and budget.
          </p>

          <Link
            to="/properties"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C96F52] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#B85F46]"
          >
            Browse Properties
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Agents;