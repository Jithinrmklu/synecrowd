import Header from './Header'

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Program Coordinator',
      department: 'Programs',
      location: 'City, State',
      type: 'Full-time',
      description: 'We are looking for an experienced Program Coordinator to manage and oversee our community development programs.'
    },
    {
      id: 2,
      title: 'Fundraising Manager',
      department: 'Fundraising',
      location: 'City, State',
      type: 'Full-time',
      description: 'Join our team as a Fundraising Manager to help us expand our reach and impact through strategic fundraising initiatives.'
    },
    {
      id: 3,
      title: 'Community Outreach Specialist',
      department: 'Outreach',
      location: 'City, State',
      type: 'Full-time',
      description: 'We need a passionate Community Outreach Specialist to build relationships and engage with local communities.'
    },
    {
      id: 4,
      title: 'Volunteer Coordinator',
      department: 'Volunteer Management',
      location: 'City, State',
      type: 'Part-time',
      description: 'Help us manage and coordinate our amazing team of volunteers who are the backbone of our organization.'
    },
    {
      id: 5,
      title: 'Communications Officer',
      department: 'Communications',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are seeking a Communications Officer to manage our social media, content creation, and public relations.'
    },
    {
      id: 6,
      title: 'Finance Assistant',
      department: 'Finance',
      location: 'City, State',
      type: 'Full-time',
      description: 'Join our finance team to help manage budgets, financial reporting, and ensure transparency in our operations.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Career Opportunities
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Join our team and make a difference! We're looking for passionate individuals 
            who want to contribute to meaningful social change.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Meaningful Work</h3>
              <p className="text-gray-600">
                Every day, you'll contribute to making a real difference in people's lives.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Great Team</h3>
              <p className="text-gray-600">
                Work alongside passionate, dedicated professionals who share your values.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Develop your skills and advance your career while making an impact.
              </p>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">How to Apply</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Review Open Positions</h3>
                <p className="text-gray-600">Browse through our current job openings and find a role that matches your skills and interests.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Prepare Your Application</h3>
                <p className="text-gray-600">Prepare your resume and cover letter highlighting your relevant experience and passion for social impact.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Submit Your Application</h3>
                <p className="text-gray-600">Click "Apply Now" on the position you're interested in and submit your application through our portal.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Interview Process</h3>
                <p className="text-gray-600">If selected, you'll be contacted for an interview. Our process typically includes multiple rounds to ensure the best fit.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Career

