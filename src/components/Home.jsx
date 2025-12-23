import Header from './Header'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to Synecrowd Foundation
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Synecrowd Foundation is a charitable trust dedicated to making a positive impact 
                in our communities. We believe in the power of collective action and the importance 
                of giving back to society.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to create sustainable change through education, healthcare, and 
                community development initiatives. We work tirelessly to support those in need 
                and empower individuals to build better futures for themselves and their families.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To bridge the gap between resources and needs, ensuring that every individual 
                has access to opportunities for growth and development. We strive to create 
                a world where compassion and support are readily available to all.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A society where every person has the opportunity to thrive, regardless of their 
                background or circumstances. We envision communities that are strong, supportive, 
                and united in their commitment to helping one another.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-indigo-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">Building strong, supportive communities</p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact</h3>
                <p className="text-gray-600">Creating meaningful, lasting change</p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
                <p className="text-gray-600">Leading with heart and empathy</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

