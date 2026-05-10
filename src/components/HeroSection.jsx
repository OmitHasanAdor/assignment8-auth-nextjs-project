import Image from 'next/image';
import products from '@/lib/summer_products.json';

const HeroSection = () => {

  const featuredProduct = products[0];

  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Summer is here, <br />
              get ready for <br />
              the beach.
            </h1>

            <p className="text-xl text-gray-700 max-w-lg">
              Check out our latest collection of summer gear, including the {featuredProduct.name} for just ${featuredProduct.price}. Built for performance and style.
            </p>

            <div>
              <button className="inline-block bg-black hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded transition">
                Shop Our Collection
              </button>
            </div>
          </div>


          <div className="relative">

            <div className="absolute  border-2  border-gray-200 rounded-lg transform translate-x-3 translate-y-3 hidden md:block"></div>

            <div className="relative bg-gray-50 border border-gray-100 p-6 rounded-lg shadow-inner">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                width={500}
                height={400}
                className="rounded-md object-contain w-full h-auto"
                priority
              />
              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">{featuredProduct.name}</h2>
                <p className="text-sm font-medium text-gray-600">Brand: {featuredProduct.brand}</p>
               
               
                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 shadow-sm mx-auto absolute top-12 left-20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Summer Sale 50% OFF
                </span>

                <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 shadow-sm mx-auto absolute top-12 right-20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Hot Deal!!!
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;