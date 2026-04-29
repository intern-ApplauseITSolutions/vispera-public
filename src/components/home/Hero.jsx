import heroVideo from "../../assets/images/Hero/Hero.mp4";

export default function Hero() {
  return (
    <section className="pt-[90px] lg:pt-[90px] pb-12 relative" style={{ backgroundColor: "#F7F5F2" }}>

      {/* Hero video container */}
      <div className="px-4 md:px-16 mt-2 relative group">
        <div className="relative rounded-2xl w-full">
          <div className="relative rounded-2xl overflow-hidden w-full group">
            {/* Video replacing all images */}
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[340px] md:max-h-[400px] lg:max-h-[450px] object-cover"
            />
          </div>

          {/* Overlay on the edge of the hero banner */}
          <div className="absolute bottom-0 inset-x-0 translate-y-[50%] z-20 flex justify-center w-full px-6 md:px-10">
            <div
              className="flex justify-center items-center py-3 md:py-4 lg:py-5 px-6"
              style={{
                width: '100%',
                maxWidth: '1080px',
                minHeight: '50px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(6px)'
              }}
            >
              {/* Desktop/Tablet version */}
              <p
                className="hidden md:block text-center text-[#1a1a1a] align-middle md:text-[16px] lg:text-[22px]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  lineHeight: '20px',
                  letterSpacing: '0.04em',
                  textTransform: 'capitalize'
                }}
              >
                Welcome to Vispera Studios, A Creative Studio for Stories That Matter
              </p>

              {/* Mobile version with exact Figma specs (358x69) - Forced 2-line layout */}
              <div 
                className="block md:hidden w-full max-w-[300px] flex items-center justify-center p-2"
                style={{
                  height: '5px',
                  borderRadius: '5px', 
                }}
              >
                <p 
                  className="text-center text-[#0A374C]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: '10px',
                    lineHeight: '15px',
                    letterSpacing: '0.04em',
                    textTransform: 'capitalize'
                  }}
                >
                  Welcome to Vispera Studios, A Creative Studio for Stories That Matter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
