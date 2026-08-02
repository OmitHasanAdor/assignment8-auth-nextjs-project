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
    <section className="bg-linear-to-b from-slate-50 via-white to-slate-100 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Trusted Brands
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Our Top Brands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Discover carefully selected brands that combine innovation,
            premium quality, and customer satisfaction.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Gradient */}
              <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-blue-600 to-cyan-500" />

              {/* Brand Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                {brand.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-800">
                {brand.name}
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-slate-500">
                {brand.category}
              </p>

              <div className="mt-6 h-px w-full bg-slate-200" />

              <p className="mt-5 text-sm text-slate-500">
                Premium quality products trusted by thousands of customers.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;