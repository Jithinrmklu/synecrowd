import Header from './Header'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Us
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Synecrowd Foundation is a registered charitable trust established with a vision 
                to create positive social change and empower communities across the nation. Founded 
                on the principles of compassion, integrity, and service, we have been working 
                tirelessly to address critical social issues and improve the quality of life for 
                those in need.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our organization brings together passionate individuals, dedicated volunteers, and 
                generous donors who share a common goal: to make a meaningful difference in the 
                lives of others. We believe that every act of kindness, no matter how small, 
                contributes to building a better world.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our History</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since our inception, Synecrowd Foundation has grown from a small community initiative 
                to a recognized charitable organization. We started with a simple mission: to help those 
                who need it most. Over the years, we have expanded our reach and impact, touching 
                thousands of lives through various programs and initiatives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our journey has been marked by numerous successful projects, partnerships with 
                like-minded organizations, and the unwavering support of our community. Each milestone 
                has strengthened our resolve to continue serving with dedication and compassion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with transparency, honesty, and accountability in all our actions 
                    and decisions.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
                  <p className="text-gray-600">
                    We approach every situation with empathy and understanding, treating all 
                    individuals with dignity and respect.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace creative solutions and innovative approaches to address complex 
                    social challenges.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h3>
                  <p className="text-gray-600">
                    We believe in the power of partnerships and work together with communities, 
                    organizations, and stakeholders.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-lg">Lives Touched</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-lg">Active Volunteers</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg">Projects Completed</div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team consists of dedicated professionals, passionate volunteers, and committed 
                board members who bring diverse expertise and perspectives. Together, we work 
                collaboratively to plan, execute, and monitor our programs, ensuring maximum impact 
                and sustainable outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are always looking for individuals who share our vision and want to contribute 
                to our mission. Whether you're interested in volunteering, partnering with us, or 
                supporting our cause, we welcome you to join our community.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutUs

