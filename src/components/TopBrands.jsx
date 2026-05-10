
const TopBrands = () => {
    return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Our Top Brands</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Brand 1 */}
          <div className="p-8 border-2 border-gray-100 rounded-xl bg-gray-50/50">
            <p className="text-xl font-black text-gray-800 italic uppercase">SunShade</p>
            <p className="text-xs text-gray-400 mt-1 uppercase">Premium Eyewear</p>
          </div>

          {/* Brand 2 */}
          <div className="p-8 border-2 border-gray-100 rounded-xl bg-gray-50/50">
            <p className="text-xl font-black text-gray-800 italic uppercase">EcoShield</p>
            <p className="text-xs text-gray-400 mt-1 uppercase">Organic Skincare</p>
          </div>

          {/* Brand 3 */}
          <div className="p-8 border-2 border-gray-100 rounded-xl bg-gray-50/50">
            <p className="text-xl font-black text-gray-800 italic uppercase">HydroPeak</p>
            <p className="text-xs text-gray-400 mt-1 uppercase">Smart Hydration</p>
          </div>

          {/* Brand 4 */}
          <div className="p-8 border-2 border-gray-100 rounded-xl bg-gray-50/50">
            <p className="text-xl font-black text-gray-800 italic uppercase">CoolBreeze</p>
            <p className="text-xs text-gray-400 mt-1 uppercase">Personal Cooling</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default TopBrands;