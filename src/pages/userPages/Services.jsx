import React from "react";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-white to-amber-50"
      >
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
              Our Signature Pizzas
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From classic pepperoni to Canadian-inspired creations — every
              pizza tells a story of local pride and premium ingredients.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Pizza Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                title: "The Canadian",
                description:
                  "Pepperoni, bacon, mushrooms, and mozzarella with our signature maple-infused sauce.",
                price: "$24.99",
                img: "https://images.unsplash.com/photo-1601924582975-7e3c88aee38e?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Maple Bacon Deluxe",
                description:
                  "Crispy bacon, caramelized onions, and a touch of real maple syrup for that perfect sweet-salty balance.",
                price: "$26.99",
                img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Montreal Smoked Meat",
                description:
                  "Smoked meat, pickles, and mustard sauce — a true Canadian classic with bold, savoury flavours.",
                price: "$27.99",
                img: "https://images.unsplash.com/photo-1601924579440-8b35e8a3a27b?auto=format&fit=crop&w=800&q=80",
              },
            ].map((pizza, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={pizza.img}
                    alt={pizza.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-amber-900 mb-3">
                    {pizza.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{pizza.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold text-xl">
                      {pizza.price}
                    </span>
                    <button className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-5 py-2 rounded-full shadow hover:from-amber-600 hover:to-red-600 transition-all duration-300">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚗",
                title: "Delivery",
                description:
                  "Fast, hot delivery to your door across the GTA — fresh every time.",
              },
              {
                icon: "🍽️",
                title: "Dine-In",
                description:
                  "Relax and enjoy in our cozy, family-friendly atmosphere with true Canadian hospitality.",
              },
              {
                icon: "🎉",
                title: "Catering",
                description:
                  "Perfect for parties, offices, and community events. Let us bring the pizza to you!",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-500 border border-amber-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Line */}
          <div className="text-center mt-20">
            <p className="text-lg text-gray-600 italic">
              “Crafted with care, baked with passion, delivered with pride.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
