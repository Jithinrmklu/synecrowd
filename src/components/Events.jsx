import Header from './Header'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Health Camp',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Community Center, City',
      description: 'Free health checkup camp for underprivileged families. Includes general health checkups, blood pressure monitoring, and health awareness sessions.',
      category: 'Healthcare',
      image: '🏥'
    },
    {
      id: 2,
      title: 'Education Fair 2024',
      date: '2024-03-22',
      time: '10:00 AM - 4:00 PM',
      location: 'City Convention Center',
      description: 'A comprehensive education fair showcasing scholarship opportunities, career guidance, and educational resources for students from all backgrounds.',
      category: 'Education',
      image: '📚'
    },
    {
      id: 3,
      title: 'Tree Plantation Drive',
      date: '2024-04-05',
      time: '8:00 AM - 12:00 PM',
      location: 'Green Park, City',
      description: 'Join us in our environmental initiative to plant 1000 trees. Help us create a greener future for our community.',
      category: 'Environment',
      image: '🌳'
    },
    {
      id: 4,
      title: 'Fundraising Gala',
      date: '2024-04-20',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Hotel, City',
      description: 'An elegant evening of dinner and entertainment to raise funds for our upcoming community development projects.',
      category: 'Fundraising',
      image: '🎭'
    },
    {
      id: 5,
      title: 'Youth Leadership Workshop',
      date: '2024-05-10',
      time: '2:00 PM - 6:00 PM',
      location: 'Youth Center, City',
      description: 'A workshop designed to empower young leaders with skills in communication, teamwork, and community organizing.',
      category: 'Youth Development',
      image: '👥'
    },
    {
      id: 6,
      title: 'Senior Citizens Day',
      date: '2024-05-25',
      time: '11:00 AM - 3:00 PM',
      location: 'Community Hall, City',
      description: 'A special day dedicated to our senior citizens with entertainment, health checkups, and interactive sessions.',
      category: 'Community',
      image: '👴'
    }
  ]

  const pastEvents = [
    {
      id: 7,
      title: 'Winter Clothing Drive',
      date: '2024-01-15',
      description: 'Successfully collected and distributed 500+ winter clothing items to families in need.',
      category: 'Community Support'
    },
    {
      id: 8,
      title: 'Digital Literacy Program',
      date: '2024-02-10',
      description: 'Completed a month-long digital literacy program training 200+ individuals in basic computer skills.',
      category: 'Education'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Events & Activities
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Join us in our various events and activities designed to create positive 
            change in our communities.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 text-center">
                  <div className="text-6xl mb-4">{event.image}</div>
                  <div className="text-white text-sm font-medium mb-2">{event.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {event.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(event.date)}
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Categories */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Event Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-800">Healthcare</h3>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-800">Education</h3>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-3">🌳</div>
              <h3 className="font-semibold text-gray-800">Environment</h3>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-800">Community</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Events

