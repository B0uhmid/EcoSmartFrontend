export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="py-4 bg-gradient-to-t from-white via-green-50 to-white">
        <h1 className="text-3xl font-semibold text-center mx-auto text-green-900">
          About EcoSmart
        </h1>

        <p className="text-sm text-green-700 text-center mt-2 max-w-md mx-auto">
          A smart and eco-friendly platform designed to optimize resources and
          promote sustainable living.
        </p>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 relative">
          {/* Glow effect */}
          <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-green-100"></div>

          {/* Image */}
          <img
            className="max-w-sm w-full rounded-xl h-auto shadow-md"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
            alt=""
          />

          <div>
            <h1 className="text-3xl font-semibold text-green-900">
              Our Features
            </h1>

            <p className="text-sm text-green-700 mt-2">
              Build sustainable and efficient solutions with modern, scalable,
              and eco-conscious design.
            </p>

            <div className="flex flex-col gap-10 mt-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="size-9 p-2 bg-green-50 border border-green-200 rounded">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-green-800">
                    High Performance
                  </h3>
                  <p className="text-sm text-green-600">
                    Optimized for speed and efficiency with minimal resource
                    usage.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="size-9 p-2 bg-green-50 border border-green-200 rounded">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-green-800">
                    Clean & Natural Design
                  </h3>
                  <p className="text-sm text-green-600">
                    A fresh UI inspired by nature for better user experience.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="size-9 p-2 bg-green-50 border border-green-200 rounded">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-green-800">
                    Easy Integration
                  </h3>
                  <p className="text-sm text-green-600">
                    Simple to integrate with React, Vite and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
