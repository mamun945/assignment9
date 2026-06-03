export default function HomeExtra() {
  const successStories = [
    {
      id: 1,
      name: "Bella",
      type: "Golden Retriever",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
      story:
        "Bella found a loving family after months in a shelter and now enjoys daily park adventures.",
    },
    {
      id: 2,
      name: "Milo",
      type: "Persian Cat",
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
      story:
        "Milo was rescued as a kitten and now lives happily with a caring family full of love.",
    },
    {
      id: 3,
      name: "Rocky",
      type: "German Shepherd",
      image:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop",
      story:
        "Rocky transformed from a shy rescue dog into a confident and playful companion.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Why Adopt Pets */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Why Adopt Pets
          </span>

          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Give a Pet a Loving Home and Change a Life
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Pet adoption gives animals a second chance at happiness while
            bringing joy and companionship into your life. Every adopted pet
            becomes part of a caring family and receives the love they deserve.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                ✓
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Save Animal Lives
                </h4>
                <p className="text-gray-500 text-sm">
                  Adoption helps reduce the number of homeless pets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                ✓
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Build Strong Bonds
                </h4>
                <p className="text-gray-500 text-sm">
                  Pets bring unconditional love and emotional support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"
            alt="cat"
            className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
          />

          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-5 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200&auto=format&fit=crop"
              alt="dog avatar"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h4 className="font-bold text-gray-800">Thousands Adopted</h4>
              <p className="text-sm text-gray-500">
                Loving homes created every year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Slider */}
      <section>
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>

          <h2 className="text-4xl font-bold text-gray-800">
            Happy Pets & Families
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-500">{story.type}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pet Care */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 relative">
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop"
            alt="pet care"
            className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
          />

          <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=200&auto=format&fit=crop"
              alt="dog avatar"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold text-gray-800">Healthy Pets</h4>
              <p className="text-sm text-gray-500">
                Proper care keeps pets happy.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Pet Care
          </span>

          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Caring for Pets the Right Way
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Proper nutrition, regular exercise, grooming, and veterinary care
            are essential for keeping pets healthy and active. Responsible pet
            ownership creates a strong and lasting relationship.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-2xl p-5">
              <h4 className="font-bold text-gray-800 mb-2">
                Healthy Food
              </h4>
              <p className="text-sm text-gray-500">
                Balanced meals for better growth.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <h4 className="font-bold text-gray-800 mb-2">
                Daily Exercise
              </h4>
              <p className="text-sm text-gray-500">
                Keep pets active and energetic.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <h4 className="font-bold text-gray-800 mb-2">
                Grooming
              </h4>
              <p className="text-sm text-gray-500">
                Maintain cleanliness and comfort.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <h4 className="font-bold text-gray-800 mb-2">
                Vet Checkups
              </h4>
              <p className="text-sm text-gray-500">
                Regular health monitoring is important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Volunteers */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Meet Our Volunteers
          </span>

          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Caring Hearts Behind Every Rescue
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our dedicated volunteers work tirelessly to rescue, feed, and care
            for homeless pets. Their compassion and commitment help animals
            find safe and loving homes every day.
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop"
              alt="volunteer dog"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=400&auto=format&fit=crop"
              alt="volunteer cat"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-8 space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-xl font-bold text-gray-800">
              Rescue Operations
            </h3>
            <p className="text-gray-500 mt-2">
              Volunteers actively rescue abandoned and injured pets.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-xl font-bold text-gray-800">
              Shelter Support
            </h3>
            <p className="text-gray-500 mt-2">
              Daily feeding, cleaning, and medical support for animals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Adoption Assistance
            </h3>
            <p className="text-gray-500 mt-2">
              Helping families find the perfect furry companion.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section>
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            FAQs
          </span>

          <h2 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=300&auto=format&fit=crop"
                alt="dog avatar"
                className="w-14 h-14 rounded-full object-cover"
              />

              <h3 className="text-xl font-bold text-gray-800">
                How long does adoption take?
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              The adoption process usually takes a few days depending on
              verification and pet availability.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=300&auto=format&fit=crop"
                alt="cat avatar"
                className="w-14 h-14 rounded-full object-cover"
              />

              <h3 className="text-xl font-bold text-gray-800">
                Are pets vaccinated before adoption?
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Yes, all pets receive necessary vaccinations and health checkups
              before being listed for adoption.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=300&auto=format&fit=crop"
                alt="dog avatar"
                className="w-14 h-14 rounded-full object-cover"
              />

              <h3 className="text-xl font-bold text-gray-800">
                Can I adopt more than one pet?
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Absolutely! If you can provide proper care and space, you may
              adopt multiple pets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
