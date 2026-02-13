'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Calendar, Users, DollarSign, TrendingUp, 
  Menu, X, Home, Utensils, CalendarDays, 
  CreditCard, Settings, LogOut, ChevronDown,
  Search, Filter, Eye, Edit, Trash2, Check, XCircle
} from 'lucide-react';

const reservations = [
  { id: 1, code: 'ABC123', name: 'John Smith', email: 'john@email.com', phone: '(555) 123-4567', date: '2026-02-14', time: '7:00 PM', guests: 4, status: 'confirmed', occasion: 'Anniversary' },
  { id: 2, code: 'DEF456', name: 'Sarah Johnson', email: 'sarah@email.com', phone: '(555) 234-5678', date: '2026-02-14', time: '8:00 PM', guests: 2, status: 'pending', occasion: 'Date Night' },
  { id: 3, code: 'GHI789', name: 'Mike Williams', email: 'mike@email.com', phone: '(555) 345-6789', date: '2026-02-15', time: '6:30 PM', guests: 6, status: 'confirmed', occasion: 'Business' },
  { id: 4, code: 'JKL012', name: 'Emily Brown', email: 'emily@email.com', phone: '(555) 456-7890', date: '2026-02-15', time: '7:30 PM', guests: 3, status: 'cancelled', occasion: '' },
  { id: 5, code: 'MNO345', name: 'David Lee', email: 'david@email.com', phone: '(555) 567-8901', date: '2026-02-16', time: '6:00 PM', guests: 8, status: 'confirmed', occasion: 'Birthday' },
];

const stats = [
  { label: 'Today\'s Reservations', value: '24', icon: Calendar, change: '+12%', color: 'amber' },
  { label: 'Total Guests', value: '86', icon: Users, change: '+8%', color: 'blue' },
  { label: 'Revenue (Today)', value: '$4,280', icon: DollarSign, change: '+23%', color: 'green' },
  { label: 'Avg. Party Size', value: '3.6', icon: TrendingUp, change: '+5%', color: 'purple' },
];

const statusColors: Record<string, string> = {
  confirmed: 'bg-green-500/20 text-green-400',
  pending: 'bg-yellow-500/20 text-yellow-400',
  cancelled: 'bg-red-500/20 text-red-400',
  completed: 'bg-blue-500/20 text-blue-400',
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('reservations');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReservations = reservations.filter(res => 
    res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    res.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#1a1a1a] text-white transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          {sidebarOpen && <span className="font-serif text-xl">Bella Italia</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg">
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', icon: Home, label: 'Dashboard' },
            { id: 'reservations', icon: CalendarDays, label: 'Reservations' },
            { id: 'menu', icon: Utensils, label: 'Menu' },
            { id: 'orders', icon: CreditCard, label: 'Orders' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id ? 'bg-amber-600 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}>
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif text-gray-800">Reservations</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-500" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-medium">MR</div>
              {sidebarOpen && <span className="text-sm font-medium">Marco Rossi</span>}
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                </div>
                <p className="text-3xl font-serif text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Reservations Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-800">Recent Reservations</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">Export</button>
                <button className="px-4 py-2 text-sm bg-amber-600 text-white rounded-lg hover:bg-amber-700">Add Reservation</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guest</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guests</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Occasion</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredReservations.map(res => (
                    <tr key={res.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{res.code}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-800">{res.name}</p>
                          <p className="text-sm text-gray-500">{res.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-800">{res.date}</p>
                        <p className="text-sm text-gray-500">{res.time}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{res.guests}</td>
                      <td className="px-6 py-4 text-gray-600">{res.occasion || '-'}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[res.status]}`}>
                          {res.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                          {res.status === 'pending' && (
                            <>
                              <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg">
                                <Check className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                <XCircle className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
