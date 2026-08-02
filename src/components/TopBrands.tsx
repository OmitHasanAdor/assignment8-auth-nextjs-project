type Brand = {
  name: string;
  category: string;
};

const brands: Brand[] = [
  { name: "SunShade", category: "Premium Eyewear" },
  { name: "EcoShield", category: "Organic Skincare" },
  { name: "HydroPeak", category: "Smart Hydration" },
  { name: "CoolBreeze", category: "Personal Cooling" },
];

const TopBrands = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[85%] px-6">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-left">
          Our Top Brands
        </h2>

        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-xl border-2 border-gray-100 bg-gray-50/50 p-8"
            >
              <p className="text-xl font-black uppercase italic text-gray-800">
                {brand.name}
              </p>
              <p className="mt-1 text-xs uppercase text-gray-400">
                {brand.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;