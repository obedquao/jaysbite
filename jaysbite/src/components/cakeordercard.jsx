import React, { useState } from "react";

const CakeOrderCard = () => {
  const PRICE_MATRIX = {
    "5 inches": {
      "1 layer": 250,
      "2 layers": 450,
      "3 layers": 650,
      "4 layers": 850,
    },
    "6 inches": {
      "1 layer": 300,
      "2 layers": 600,
      "3 layers": 800,
      "4 layers": 1100,
    },
    "7 inches": {
      "1 layer": 350,
      "2 layers": 700,
      "3 layers": 900,
      "4 layers": 1250,
    },
    "8 inches": {
      "1 layer": 400,
      "2 layers": 750,
      "3 layers": 1000,
      "4 layers": 1350,
    },
    "10 inches": {
      "1 layer": 500,
      "2 layers": 900,
      "3 layers": 1250,
      "4 layers": 1500,
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    size: "6 inches",
    layers: "2 layers",
    date: "",
  });

  const WHATSAPP_NUMBER = "233550280582";

  const availableSizes = Object.keys(PRICE_MATRIX);
  const availableLayers = Object.keys(PRICE_MATRIX[formData.size]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const currentPrice = PRICE_MATRIX[formData.size]?.[formData.layers] || 0;

  const handleOrder = (e) => {
    e.preventDefault();

    const message =
      `*NEW CAKE ORDER - JAYS BITE* 🎂\n\n` +
      `👤 Customer: ${formData.name}\n` +
      `📏 Size: ${formData.size}\n` +
      `🥞 Layers: ${formData.layers}\n` +
      `📅 Date: ${formData.date}\n` +
      `💰 Total Price: GHS ${currentPrice}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-6 py-16 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        {/* Image Section */}
        <div className="relative hidden md:block">
          <img
            src="/images/white.jpeg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 text-white">
            <div>
              <h2 className="text-4xl font-bold">Jays Bite</h2>
              <p className="text-sm opacity-90">
                Create your perfect custom cake 🎂
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleOrder} className="p-8 space-y-6">
          <h3 className="text-2xl font-bold text-purple-800">
            Custom Cake Order
          </h3>

          {/* Name */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Customer Name
            </label>

            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:border-purple-600 outline-none"
            />
          </div>

          {/* Size */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Cake Size
            </label>

            <div className="grid grid-cols-3 gap-2 mt-3">
              {availableSizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => setFormData({ ...formData, size })}
                  className={`p-2 rounded-xl border text-sm transition
                  ${
                    formData.size === size
                      ? "bg-purple-800 text-white border-purple-800"
                      : "hover:bg-purple-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Layers */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Cake Height
            </label>

            <div className="grid grid-cols-4 gap-2 mt-3">
              {availableLayers.map((layer) => (
                <button
                  type="button"
                  key={layer}
                  onClick={() => setFormData({ ...formData, layers: layer })}
                  className={`p-2 rounded-xl border text-sm transition
                  ${
                    formData.layers === layer
                      ? "bg-purple-800 text-white border-purple-800"
                      : "hover:bg-purple-50"
                  }`}
                >
                  {layer}
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Pickup / Delivery Date
            </label>

            <input
              required
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:border-purple-600 outline-none"
            />
          </div>

          {/* Price */}
          <div className="bg-purple-50 rounded-2xl p-4 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400">Estimated Total</p>
              <p className="text-3xl font-bold text-purple-800">
                GHS {currentPrice}
              </p>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-sm text-gray-600">
            <p>
              If you have a{" "}
              <span className="font-semibold text-purple-800">
                cake inspiration
              </span>
              ,<span className="font-semibold text-purple-800"> allergies</span>
              , or special
              <span className="font-semibold text-purple-800">
                {" "}
                design requests
              </span>
              , please include them in the WhatsApp message after submitting
              your order.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-900 text-white py-4 rounded-xl font-semibold text-lg shadow-md transition"
          >
            Order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default CakeOrderCard;
