import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const stats = [
  { label: 'Total Projects', value: '24', icon: '📁' },
  { label: 'Completed Tasks', value: '86', icon: '✅' },
  { label: 'Active Clients', value: '12', icon: '👥' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-100 px-5 py-12 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 rounded-3xl bg-gradient-to-r from-indigo-700 to-violet-600 p-8 text-white shadow-xl md:p-12">
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Dashboard Theme</span>
          <h1 className="mt-5 text-3xl font-bold md:text-5xl">Welcome to your Dashboard</h1>
          <p className="mt-4 max-w-xl text-indigo-100">Track your work, review progress and explore our services from one place.</p>
          <button onClick={() => navigate('/services')} className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-white/40">
            Explore Services →
          </button>
        </div>
        <h2 className="mb-5 text-2xl font-bold">Overview</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-3xl">{item.icon}</div>
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-2 text-4xl font-extrabold text-indigo-700">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
          <h3 className="font-bold text-indigo-900">Ready for your next project?</h3>
          <p className="mt-2 text-indigo-800">Visit the Services page to discover what we offer.</p>
          <Link to="/services" className="mt-3 inline-block font-semibold text-indigo-700 underline hover:text-indigo-900">View all services</Link>
        </div>
      </div>
    </main>
  );
}
