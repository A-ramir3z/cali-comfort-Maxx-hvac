"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    title: "AC Repair & Service",
    description:
      "Reliable air conditioning service to help keep your home cool and comfortable when you need it most.",
    icon: "❄",
  },

  {
    title: "Heating & Furnace Service",
    description:
      "Residential heating services to help keep your home warm and comfortable throughout the colder months.",
    icon: "♨",
  },

  {
    title: "HVAC Installation & Maintenance",
    description:
      "Professional installation and routine maintenance to help keep your heating and cooling system running smoothly.",
    icon: "⚙",
  },
];

const benefits = [
  "Residential heating and cooling services",
  "Service throughout Tulare & Kern Counties",
  "AC and heating repair",
  "HVAC installation and maintenance",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            MAXX <span className="text-sky-400">COOLING SOLUTIONS</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-white/90 transition hover:text-sky-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-white/90 transition hover:text-sky-300"
            >
              About
            </a>
            <a
              href="#service-area"
              className="text-sm font-medium text-white/90 transition hover:text-sky-300"
            >
              Service Area
            </a>
            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Request Service
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Request Service
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950">
        {/* PHOTO PLACEHOLDER */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950" />

        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_70%_30%,_#38bdf8_0,_transparent_35%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-32 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Residential Heating & Cooling
              </p>

              <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Comfort you can count on, all year long.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Reliable residential HVAC services for homeowners throughout Tulare and Kern Counties.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-sky-500 px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
                >
                  Request Service
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Request Service
                </a>
              </div>
            </div>

            {/* HERO IMAGE PLACEHOLDER */}
            <div className="hidden lg:block">
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-500/20 text-4xl">
                    ❄
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                    Professional Residential HVAC Photo
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Image placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              What We Do
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comfort starts with the right service.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From AC repairs and heating service to HVAC maintenance and installation,
              we provide practical solutions to keep your home comfortable year-round.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl transition group-hover:bg-sky-500">
                  {service.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex text-sm font-bold text-sky-600 hover:text-sky-500"
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* ABOUT IMAGE PLACEHOLDER */}
            <div className="order-2 lg:order-1">
              <div className="flex aspect-square max-w-xl items-center justify-center rounded-3xl bg-slate-100">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-3xl">
                    📷
                  </div>
                  <p className="font-semibold text-slate-500">
                    Company / Technician Photo
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Image placeholder
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                Why Maxx Cooling Solutions
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Focused on your home&apos;s comfort.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Maxx Cooling Solutions is focused on providing dependable residential HVAC
                service to homeowners throughout Tulare and Kern Counties. Our goal is to
                help homeowners maintain a comfortable home with heating and cooling
                solutions that fit their needs.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm font-semibold text-slate-500">
                Serving Tulare & Kern Counties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="service-area" className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                Service Area
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Serving Tulare & Kern Counties.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Maxx Cooling Solutions provides residential heating and cooling
                services throughout Tulare and Kern Counties, helping homeowners
                stay comfortable year-round.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white">
                  Tulare County
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white">
                  Kern County
                </span>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-white/5">
              <div className="text-center">
                <div className="mx-auto mb-4 text-5xl">📍</div>
                <p className="font-semibold text-slate-300">
                  Service Area Map
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Map placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Service Request */}
<section id="contact" className="bg-sky-500 py-20">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      
      {/* Contact Information */}
      <div className="pt-4">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">
          Need Service?
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let&apos;s keep your home comfortable.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-sky-50">
          Tell us a little about what your home needs, and Maxx Cooling
          Solutions will have the information needed to follow up with you.
        </p>

        <div className="mt-8 space-y-4 text-sm text-sky-50">
          <p>
            <span className="font-semibold text-white">Service Area:</span>{" "}
            Tulare & Kern Counties
          </p>

          <p>
            <span className="font-semibold text-white">Owner:</span>{" "}
            Max Bracamontes
          </p>
        </div>
      </div>

      {/* Service Request Form */}
{submitted ? (
  <div className="rounded-3xl bg-white p-8 text-center shadow-2xl">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-3xl text-sky-600">
      ✓
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-900">
      Request Received
    </h3>

    <p className="mt-3 text-slate-600">
      Thank you for reaching out to Maxx Cooling Solutions. We have received
      your service request and will follow up using your preferred contact
      method.
    </p>

    <button
      type="button"
      onClick={() => setSubmitted(false)}
      className="mt-6 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
    >
      Submit Another Request
    </button>
  </div>
) : (
  <form
    onSubmit={(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    }}
    className="rounded-3xl bg-white p-8 shadow-2xl"
  >
        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-900"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-slate-900"
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(555) 555-5555"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-900"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          {/* Service */}
          <div className="sm:col-span-2">
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-slate-900"
            >
              Service Needed
            </label>

            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="AC Repair & Service">
                AC Repair & Service
              </option>
              <option value="Heating & Furnace Service">
                Heating & Furnace Service
              </option>
              <option value="HVAC Installation">
                HVAC Installation
              </option>
              <option value="HVAC Maintenance">
                HVAC Maintenance
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-900"
            >
              Tell us about the issue
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Describe what is happening with your HVAC system..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          {/* Preferred Contact */}
          <div className="sm:col-span-2">
            <label
              htmlFor="contact-method"
              className="block text-sm font-semibold text-slate-900"
            >
              Preferred Contact Method
            </label>

            <select
              id="contact-method"
              name="contact-method"
              required
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Phone">Phone</option>
              <option value="Text">Text</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-full bg-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
        >
          Submit Service Request
        </button>

        <p className="mt-4 text-center text-xs leading-5 text-slate-400">
          This form is currently a demonstration. Submission will be connected
          to the company&apos;s preferred contact method later.
        </p>
      </form>
)}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-white">
                MAXX <span className="text-sky-400">COOLING SOLUTIONS</span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6">
                Residential heating and cooling services throughout Tulare and Kern Counties.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">Services</h4>

              <ul className="mt-4 space-y-2 text-sm">
              <li>AC Repair & Service</li>
              <li>Heating & Furnace Service</li>
              <li>HVAC Installation & Maintenance</li>
            </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">Contact</h4>

              <ul className="mt-4 space-y-2 text-sm">
                <li>Max Bracamontes</li>
                <li>Tulare County</li>
                <li>Kern County</li>
                <li>Phone: Coming Soon</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-sm">
            © {new Date().getFullYear()} Maxx Cooling Solutions. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}