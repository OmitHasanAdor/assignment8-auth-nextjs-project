type Tip = {
  title: string;
  description: string;
};

const tips: Tip[] = [
  {
    title: "Stay Hydrated",
    description:
      "Drink at least 8-10 glasses of water daily to keep your skin glowing and body cool.",
  },
  {
    title: "Sun Protection",
    description:
      "Always apply SPF 50+ sunscreen 20 minutes before heading out into the sun.",
  },
  {
    title: "Wear Light Clothes",
    description:
      "Choose breathable cotton fabrics and light colors to stay comfortable all day long.",
  },
];

const SummerTips = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[85%] px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Summer Care Tips
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 text-xl font-semibold text-blue-600">
                {tip.title}
              </h3>
              <p className="font-medium text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerTips;