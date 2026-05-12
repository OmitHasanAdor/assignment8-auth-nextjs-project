

const SummerTips = () => {
    return (
       <section className="py-16 ">
      <div className="max-w-[85%] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Summer Care Tips</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tip 1 */}
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Stay Hydrated</h3>
            <p className="text-gray-600 font-medium">Drink at least 8-10 glasses of water daily to keep your skin glowing and body cool.</p>
          </div>

          {/* Tip 1 */}
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Sun Protection</h3>
            <p className="text-gray-600 font-medium">Always apply SPF 50+ sunscreen 20 minutes before heading out into the sun.</p>
          </div>

          {/* Tip 1 */}
          <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Wear Light Clothes</h3>
            <p className="text-gray-600 font-medium">Choose breathable cotton fabrics and light colors to stay comfortable all day long.</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default SummerTips;