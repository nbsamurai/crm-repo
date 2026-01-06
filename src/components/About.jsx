import { Target, Heart, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#043873] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Crivient</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          We are on a mission to help businesses build stronger, more meaningful relationships with their customers.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#043873] mb-8">Our Story</h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Founded in 2021, Crivient started with a simple idea: that customer relationship management shouldn't be complicated or chaotic. We saw too many businesses struggling with clunky, outdated software that made their work harder, not easier.
          </p>
          <p>
            We built Crivient to be different. A platform that is intuitive, powerful, and designed for the way modern teams work. Today, we're proud to support thousands of growing businesses around the world, helping them stay organized, close more deals, and delight their customers every day.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#043873] mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Target size={48} className="text-[#4F9CF9] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Customer Success</h3>
              <p className="text-gray-600">We only win when our customers win. Your growth is our top priority.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Heart size={48} className="text-[#4F9CF9] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Simplicity</h3>
              <p className="text-gray-600">Great software should be easy to use. We strive for simplicity in everything we do.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Award size={48} className="text-[#4F9CF9] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">We are constantly improving and pushing boundaries to deliver the best solutions.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Team */}
       <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#043873] mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img 
                    src={`https://i.pravatar.cc/300?img=${item + 10}`} 
                    alt="Team Member" 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#043873]">Alex Morgan</h3>
                <p className="text-gray-500">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
