import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiPhone,
  FiMail,
  FiHome,
  FiStar,
  FiCalendar,
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
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    experience: "8+ years",
    specialty: "Luxury Residential Properties",
    bio: "Michael is an experienced real estate professional specializing in luxury residential properties across Lagos. He helps clients find quality homes that match their lifestyle, preferences, and budget.",
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
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    experience: "7+ years",
    specialty: "Residential & Commercial Properties",
    bio: "Sarah helps buyers, renters, and investors discover exceptional properties in some of Lagos's most desirable locations.",
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
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    experience: "6+ years",
    specialty: "Luxury & Investment Properties",
    bio: "David specializes in helping clients discover premium properties and investment opportunities throughout Lagos.",
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
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    experience: "9+ years",
    specialty: "Residential Properties",
    bio: "Grace is passionate about helping individuals and families find comfortable, secure, and valuable properties in Lagos.",
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
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    experience: "10+ years",
    specialty: "Property Investment",
    bio: "Daniel works with property buyers and investors looking for strong opportunities in the Lagos real estate market.",
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
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    experience: "7+ years",
    specialty: "Residential & Luxury Homes",
    bio: "Amaka helps clients find beautiful residential properties while providing personalized guidance throughout the buying and renting process.",
  },
];

const AgentProfile = () => {
  const { id } = useParams();

  const agent = agents.find((agent) => agent.id === Number(id));

  if (!agent) {
    return (
      <main className="min-h-screen bg-[#F8F7F4] px-6 pt-32">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-12 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-[#263D35]">
            Agent not found
          </h1>

          <p className="mt-3 text-[#66756D]">
            The agent you're looking for does not exist.
          </p>

          <Link
            to="/agents"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#263D35] px-6 py-3 font-semibold text-white"
          >
            <FiArrowLeft />
            Back to Agents
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-24">

      {/* HERO */}
      <section className="bg-[#263D35] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <Link
            to="/agents"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <FiArrowLeft />
            Back to Agents
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[320px_1fr]">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={agent.image}
                alt={agent.name}
                className="h-[380px] w-full object-cover"
              />
            </div>

            {/* BASIC INFO */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E9A28F]">
                Real Estate Professional
              </p>

              <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                {agent.name}
              </h1>

              <p className="mt-3 text-xl text-white/70">
                {agent.company}
              </p>

              <div className="mt-6 flex items-center gap-2 text-white/70">
                <FiMapPin />
                {agent.location}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">

                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#263D35]"
                >
                  <FiPhone />
                  Call Agent
                </a>

                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C96F52] px-6 py-3 font-semibold text-white"
                >
                  <FiMail />
                  Email Agent
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_350px]">

            {/* ABOUT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
                About the agent
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#263D35]">
                Meet {agent.name}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#66756D]">
                {agent.bio}
              </p>

              {/* STATS */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <FiHome className="text-[#C96F52]" size={24} />

                  <p className="mt-4 text-2xl font-bold text-[#263D35]">
                    {agent.properties}
                  </p>

                  <p className="mt-1 text-sm text-[#718078]">
                    Properties Listed
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <FiStar className="text-[#C96F52]" size={24} />

                  <p className="mt-4 text-2xl font-bold text-[#263D35]">
                    {agent.rating}
                  </p>

                  <p className="mt-1 text-sm text-[#718078]">
                    Agent Rating
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <FiCalendar className="text-[#C96F52]" size={24} />

                  <p className="mt-4 text-2xl font-bold text-[#263D35]">
                    {agent.experience}
                  </p>

                  <p className="mt-1 text-sm text-[#718078]">
                    Experience
                  </p>
                </div>

              </div>

            </div>

            {/* CONTACT CARD */}
            <div className="h-fit rounded-3xl bg-white p-7 shadow-lg">

              <h3 className="text-xl font-bold text-[#263D35]">
                Agent Information
              </h3>

              <div className="mt-6 space-y-5">

                <div className="flex gap-4">
                  <FiMapPin className="mt-1 text-[#C96F52]" />

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#718078]">
                      Location
                    </p>

                    <p className="mt-1 font-medium text-[#263D35]">
                      {agent.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiPhone className="mt-1 text-[#C96F52]" />

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#718078]">
                      Phone
                    </p>

                    <p className="mt-1 font-medium text-[#263D35]">
                      {agent.phone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiMail className="mt-1 text-[#C96F52]" />

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#718078]">
                      Email
                    </p>

                    <p className="mt-1 break-all font-medium text-[#263D35]">
                      {agent.email}
                    </p>
                  </div>
                </div>

              </div>

              <Link
                to={`/book-appointment/${agent.id}`}
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-[#263D35] px-5 py-4 font-semibold text-white transition hover:bg-[#1d3029]"
              >
                Book an Appointment
              </Link>

            </div>

          </div>

          {/* SPECIALTY */}
          <div className="mt-16 rounded-3xl bg-[#E9E1D5] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
              Specialization
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#263D35]">
              {agent.specialty}
            </h3>
          </div>

        </div>
      </section>
    </main>
  );
};

export default AgentProfile;