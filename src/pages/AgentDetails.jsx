import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiPhone,
  FiMail,
  FiStar,
  FiHome,
  FiCalendar,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

const agents = [
  {
    id: 1,
    name: "Michael Johnson",
    company: "HavenNG Realty",
    location: "Lekki, Lagos",
    properties: 24,
    rating: 4.9,
    reviews: 86,
    phone: "+234 801 234 5678",
    email: "michael@havenng.com",
    experience: "8+ years",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Michael is an experienced real estate professional specializing in residential properties across Lagos. He helps clients find quality homes that match their lifestyle and budget.",
    specialties: [
      "Residential Properties",
      "Luxury Apartments",
      "Property Investment",
      "Property Management",
    ],
  },

  {
    id: 2,
    name: "Sarah Williams",
    company: "Prime Homes Nigeria",
    location: "Victoria Island, Lagos",
    properties: 31,
    rating: 4.8,
    reviews: 74,
    phone: "+234 802 345 6789",
    email: "sarah@primehomes.com",
    experience: "10+ years",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Sarah is a dedicated property consultant with extensive experience helping families, professionals and investors discover exceptional properties in Lagos.",
    specialties: [
      "Luxury Homes",
      "Family Apartments",
      "Property Investment",
      "Commercial Properties",
    ],
  },

  {
    id: 3,
    name: "David Anderson",
    company: "Urban Living NG",
    location: "Ikoyi, Lagos",
    properties: 18,
    rating: 4.7,
    reviews: 63,
    phone: "+234 803 456 7890",
    email: "david@urbanliving.com",
    experience: "7+ years",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "David specializes in helping clients discover modern properties in some of Lagos's most desirable neighborhoods.",
    specialties: [
      "Modern Apartments",
      "Luxury Properties",
      "Property Sales",
      "Property Investment",
    ],
  },

  {
    id: 4,
    name: "Grace Okafor",
    company: "Lagos Property Hub",
    location: "Yaba, Lagos",
    properties: 27,
    rating: 4.9,
    reviews: 91,
    phone: "+234 804 567 8901",
    email: "grace@lagospropertyhub.com",
    experience: "9+ years",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Grace is passionate about connecting people with comfortable and affordable properties throughout Lagos.",
    specialties: [
      "Affordable Housing",
      "Family Homes",
      "Rental Properties",
      "Property Management",
    ],
  },

  {
    id: 5,
    name: "Daniel Williams",
    company: "Elite Properties NG",
    location: "Ikeja, Lagos",
    properties: 35,
    rating: 4.8,
    reviews: 102,
    phone: "+234 805 678 9012",
    email: "daniel@eliteproperties.com",
    experience: "12+ years",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Daniel has built a strong reputation helping clients buy, sell and invest in premium real estate across Lagos.",
    specialties: [
      "Luxury Real Estate",
      "Property Investment",
      "Commercial Properties",
      "Property Sales",
    ],
  },

  {
    id: 6,
    name: "Amaka Eze",
    company: "Prime Estate Africa",
    location: "Ajah, Lagos",
    properties: 21,
    rating: 4.9,
    reviews: 79,
    phone: "+234 806 789 0123",
    email: "amaka@primeestate.com",
    experience: "8+ years",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    bio: "Amaka helps individuals and families find properties that provide comfort, convenience and long-term value.",
    specialties: [
      "Residential Properties",
      "New Developments",
      "Rental Properties",
      "Property Investment",
    ],
  },
];

const AgentDetails = () => {
  const { id } = useParams();

  const agent = agents.find(
    (item) => item.id === Number(id)
  );

  // If agent doesn't exist
  if (!agent) {
    return (
      <main className="min-h-screen bg-[#F8F7F4] px-6 pt-32">

        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-12 text-center shadow-sm">

          <h1 className="text-3xl font-bold text-[#263D35]">
            Agent not found
          </h1>

          <p className="mt-3 text-[#718078]">
            The agent you are looking for does not exist.
          </p>

          <Link
            to="/agents"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C96F52] px-6 py-3 font-semibold text-white hover:bg-[#B85F46]"
          >
            <FiArrowLeft />
            Back to Agents
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4] pt-28 pb-24">

      {/* BACK BUTTON */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <Link
          to="/agents"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#526159] transition hover:text-[#C96F52]"
        >
          <FiArrowLeft size={17} />
          Back to Agents
        </Link>

      </div>


      {/* PROFILE */}

      <section className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-[#263D35]/10 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[420px_1fr]">

            {/* IMAGE */}

            <div className="relative h-[450px] lg:h-full">

              <img
                src={agent.image}
                alt={agent.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#263D35] shadow-lg">

                <FiStar
                  size={15}
                  className="fill-[#C96F52] text-[#C96F52]"
                />

                {agent.rating}

              </div>

            </div>


            {/* INFORMATION */}

            <div className="p-8 lg:p-12">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
                Real Estate Agent
              </span>

              <h1 className="mt-3 text-4xl font-bold text-[#263D35] md:text-5xl">
                {agent.name}
              </h1>

              <p className="mt-2 text-lg font-medium text-[#C96F52]">
                {agent.company}
              </p>


              {/* DETAILS */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#F8F7F4] p-5">

                  <FiMapPin
                    size={20}
                    className="text-[#C96F52]"
                  />

                  <p className="mt-3 text-xs uppercase tracking-wide text-[#8A9991]">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-[#263D35]">
                    {agent.location}
                  </p>

                </div>


                <div className="rounded-2xl bg-[#F8F7F4] p-5">

                  <FiHome
                    size={20}
                    className="text-[#C96F52]"
                  />

                  <p className="mt-3 text-xs uppercase tracking-wide text-[#8A9991]">
                    Properties
                  </p>

                  <p className="mt-1 font-semibold text-[#263D35]">
                    {agent.properties} Listed
                  </p>

                </div>


                <div className="rounded-2xl bg-[#F8F7F4] p-5">

                  <FiCalendar
                    size={20}
                    className="text-[#C96F52]"
                  />

                  <p className="mt-3 text-xs uppercase tracking-wide text-[#8A9991]">
                    Experience
                  </p>

                  <p className="mt-1 font-semibold text-[#263D35]">
                    {agent.experience}
                  </p>

                </div>


                <div className="rounded-2xl bg-[#F8F7F4] p-5">

                  <FiStar
                    size={20}
                    className="text-[#C96F52]"
                  />

                  <p className="mt-3 text-xs uppercase tracking-wide text-[#8A9991]">
                    Reviews
                  </p>

                  <p className="mt-1 font-semibold text-[#263D35]">
                    {agent.reviews} Reviews
                  </p>

                </div>

              </div>


              {/* BUTTONS */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href={`tel:${agent.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C96F52] px-6 py-4 font-semibold text-white transition hover:bg-[#B85F46]"
                >
                  <FiPhone />
                  Call Agent
                </a>

                <a
                  href={`mailto:${agent.email}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#263D35]/15 px-6 py-4 font-semibold text-[#263D35] transition hover:bg-[#F8F7F4]"
                >
                  <FiMail />
                  Email Agent
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT + SPECIALTIES */}

      <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">

        <div className="grid gap-7 lg:grid-cols-3">

          {/* ABOUT */}

          <div className="rounded-3xl border border-[#263D35]/10 bg-white p-8 lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
              About the Agent
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#263D35]">
              Get to know {agent.name.split(" ")[0]}
            </h2>

            <p className="mt-5 leading-8 text-[#66756D]">
              {agent.bio}
            </p>

          </div>


          {/* CONTACT */}

          <div className="rounded-3xl bg-[#263D35] p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E9A28F]">
              Contact
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white">
              Let's find your next home.
            </h2>

            <div className="mt-7 space-y-5">

              <a
                href={`tel:${agent.phone}`}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white"
              >
                <FiPhone className="text-[#E9A28F]" />
                {agent.phone}
              </a>

              <a
                href={`mailto:${agent.email}`}
                className="flex items-center gap-3 break-all text-sm text-white/80 hover:text-white"
              >
                <FiMail className="text-[#E9A28F]" />
                {agent.email}
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* SPECIALTIES */}

      <section className="mx-auto mt-7 max-w-7xl px-6 lg:px-8">

        <div className="rounded-3xl border border-[#263D35]/10 bg-white p-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C96F52]">
            Areas of Expertise
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#263D35]">
            Specialties
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            {agent.specialties.map((specialty) => (

              <div
                key={specialty}
                className="flex items-center gap-2 rounded-full bg-[#F8F7F4] px-4 py-3 text-sm font-medium text-[#526159]"
              >
                <FiCheck
                  size={15}
                  className="text-[#C96F52]"
                />

                {specialty}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">

        <div className="rounded-3xl bg-[#EBDDD5] px-6 py-14 text-center sm:px-12">

          <h2 className="text-3xl font-bold text-[#263D35] md:text-4xl">
            Looking for a property?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#66756D]">
            Browse available properties and find your next home with help
            from our trusted agents.
          </p>

          <Link
            to="/properties"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C96F52] px-7 py-4 font-semibold text-white transition hover:bg-[#B85F46]"
          >
            Browse Properties
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default AgentDetails;