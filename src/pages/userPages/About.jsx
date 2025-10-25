import React from "react";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-white to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
              Our Canadian Story
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From the heart of Toronto to homes across Canada — Maple Leaf
              Pizzeria has been crafting authentic Canadian pizza experiences
              since 1998.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-red-300 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-6">
                  From Our Family to Yours
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Since 1998, Maple Leaf Pizzeria has been serving the community
                  with pride. Founded by the Rossi family in Toronto, we believe
                  in creating more than just pizza — we create memories around
                  the dinner table.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our commitment to quality means using 100% Canadian-grown
                  wheat for our dough, locally sourced vegetables, and premium
                  Canadian cheeses. We proudly support local farmers and
                  producers.
                </p>
                <div className="flex items-center space-x-3 text-green-700 font-medium">
                  <span className="text-xl">🍁</span>
                  <span>Fresh, Local Ingredients — Always Canadian</span>
                </div>
              </div>
            </div>

            {/* Right Info Blocks */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-500 border border-amber-100">
                <h4 className="text-2xl font-bold text-amber-900 mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To bring families and friends together through delicious,
                  high-quality pizza made with Canadian pride and served with
                  genuine hospitality.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-500 border border-amber-100">
                <h4 className="text-2xl font-bold text-amber-900 mb-3">
                  Community First
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  We're proud supporters of local sports teams, schools, and
                  community events. Because to us, you're not just customers —
                  you're neighbours.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="mt-20 text-center">
            <p className="text-lg text-gray-600 italic">
              “Crafted with Canadian ingredients, baked with love, served with
              pride.”
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
