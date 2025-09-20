
import Image from 'next/image';

export const DashboardPreview = () => {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 mt-8 md:mt-[-2rem]">
      <div className="container">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-2">
            <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
            <Image
              src="/assets/dashboard.png"
              alt="Dashboard preview showing financial analytics and charts"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
