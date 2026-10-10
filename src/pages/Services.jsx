import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: '💻', name: 'Web Development', text: 'Responsive and modern websites for every screen.' },
  { icon: '🎨', name: 'UI/UX Design', text: 'Clear and attractive interfaces built around users.' },
  { icon: '☁️', name: 'Cloud Solutions', text: 'Flexible digital services to help your business grow.' },
  { icon: '📱', name: 'Mobile Apps', text: 'Practical applications with smooth mobile experiences.' },
];

export default function Services() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-emerald-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-200">Services Theme</span>
          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">Discover helpful digital services designed for your ideas and projects.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.name} className="rounded-2xl border border-emerald-500/30 bg-emerald-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-800">
              <div className="mb-5 text-4xl">{service.icon}</div>
              <h2 className="text-xl font-bold text-emerald-100">{service.name}</h2>
              <p className="mt-3 text-sm leading-6 text-emerald-200">{service.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-900/80 p-7">
          <div>
            <h2 className="text-xl font-bold">Back to the overview?</h2>
            <p className="mt-1 text-emerald-200">Return to your Dashboard at any time.</p>
          </div>
          <Link to="/" className="rounded-xl bg-lime-300 px-6 py-3 font-semibold text-emerald-950 transition hover:bg-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-300/40">← Back to Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
