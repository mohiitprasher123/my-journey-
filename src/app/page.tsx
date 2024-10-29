import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Award, Languages, Globe2, MapPin, BarChart, Rocket, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ResumeWebsite = () => {
  const [activeContinent, setActiveContinent] = useState(null);
  
  const revenueData = [
    { month: 'Start', revenue: 160 },
    { month: 'Q1', revenue: 300 },
    { month: 'Q2', revenue: 500 },
    { month: 'Q3', revenue: 800 },
    { month: 'Q4', revenue: 1100 }
  ];

  const skillsData = [
    { category: 'Amazon PPC', value: 95 },
    { category: 'Market Expansion', value: 92 },
    { category: 'Revenue Growth', value: 88 },
    { category: 'Team Leadership', value: 85 }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
    {/* Hero Section */}
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-2 bg-blue-600 rounded-full"></div>
          <h1 className="text-5xl font-bold text-gray-800">Mohit Prasher</h1>
        </div>
        <div className="ml-5 space-y-3">
          <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>404 Webb Dr, Mississauga, ON L5B 3Z</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <Globe2 className="h-4 w-4 text-blue-600" />
              <span>mohitprshr0@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <Target className="h-4 w-4 text-blue-600" />
              <span>+1 5483888953</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Performance marketing leader with proven success in managing multi-million-dollar investments 
            across global markets. Expert in scaling D2C brands through strategic Amazon advertising and 
            data-driven optimization.
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-5">
        <Globe2 className="h-full w-full" />
      </div>
    </div>

    {/* Key Metrics Dashboard */}
    <Card className="max-w-5xl mx-auto mb-8">
      <CardHeader>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BarChart className="h-6 w-6 text-blue-600" />
          Performance Highlights
        </h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Growth Chart */}
          <div className="h-64 bg-gray-50 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Revenue Growth Journey</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  dot={{ fill: '#2563eb', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Annual Revenue', value: '€25M+', color: 'bg-blue-500' },
              { label: 'Revenue Growth', value: '12x', color: 'bg-green-500' },
              { label: 'ROAS Improvement', value: '20%', color: 'bg-purple-500' },
              { label: 'Market Platforms', value: '18+', color: 'bg-indigo-500' }
            ].map((metric, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-2 h-full ${metric.color}`}></div>
                <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Global Experience Section */}
    <Card className="max-w-5xl mx-auto mb-8">
      <CardHeader>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Globe2 className="h-6 w-6 text-blue-600" />
          Global Impact
        </h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              continent: 'Europe',
              icon: <Briefcase className="h-6 w-6 text-blue-600" />,
              color: 'blue',
              achievements: [
                '€25M+ annual revenue',
                '12x revenue increase',
                'Multi-market expansion'
              ]
            },
            {
              continent: 'Asia',
              icon: <Target className="h-6 w-6 text-emerald-600" />,
              color: 'emerald',
              achievements: [
                'Strategic leadership',
                'Team management',
                'Process optimization'
              ]
            },
            {
              continent: 'North America',
              icon: <Rocket className="h-6 w-6 text-purple-600" />,
              color: 'purple',
              status: 'Current Focus',
              opportunities: [
                'Performance Marketing Lead',
                'E-commerce Director',
                'Digital Strategy Head'
              ]
            }
          ].map((region) => (
            <div
              key={region.continent}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                activeContinent === region.continent
                  ? `border-${region.color}-600 shadow-lg`
                  : 'border-gray-200'
              }`}
              onMouseEnter={() => setActiveContinent(region.continent)}
              onMouseLeave={() => setActiveContinent(null)}
            >
              <div className="flex items-center gap-2 mb-4">
                {region.icon}
                <h3 className={`text-xl font-semibold text-${region.color}-600`}>
                  {region.continent}
                </h3>
              </div>
              
              {region.continent === 'North America' ? (
                <div className="space-y-3">
                  <div className={`text-sm font-medium text-${region.color}-600`}>
                    {region.status}
                  </div>
                  {region.opportunities.map((opp, idx) => (
                    <div
                      key={idx}
                      className={`bg-${region.color}-50 p-2 rounded-md text-${region.color}-700`}
                    >
                      {opp}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {region.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full bg-${region.color}-600`} />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Skills & Expertise */}
    <Card className="max-w-5xl mx-auto mb-8">
      <CardHeader>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Target className="h-6 w-6 text-blue-600" />
          Core Competencies
        </h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skill Bars */}
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">{skill.category}</span>
                  <span className="text-blue-600">{skill.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-2 gap-4">
            {[
              'Amazon Advertising',
              'Market Expansion',
              'Revenue Growth',
              'Team Leadership',
              'Data Analytics',
              'Cross-Border E-commerce'
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-gray-700">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Contact Section */}
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-semibold text-center">Let's Connect</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: <Globe2 className="h-6 w-6" />,
              label: 'Location',
              value: '404 Webb Dr, Mississauga, ON L5B 3Z'
            },
            {
              icon: <MapPin className="h-6 w-6" />,
              label: 'Email',
              value: 'mohitprshr0@gmail.com'
            },
            {
              icon: <Target className="h-6 w-6" />,
              label: 'Phone',
              value: '+1 5483888953'
            }
          ].map((contact, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center text-blue-600 mb-2">
                {contact.icon}
              </div>
              <div className="font-medium text-gray-800 mb-1">{contact.label}</div>
              <div className="text-gray-600">{contact.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);
};

export default ResumeWebsite;
