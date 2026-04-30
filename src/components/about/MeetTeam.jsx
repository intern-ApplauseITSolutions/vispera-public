import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import team1 from "../../assets/images/our-team-1.jpg";
import team2 from "../../assets/images/our-team-2.jpg";
import team3 from "../../assets/images/our-team-3.jpg";
import team4 from "../../assets/images/our-team-4.jpg";
import team5 from "../../assets/images/our-team-5.jpg";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const teamData = [
  {
    name: "Kishan Chandore",
    role: "Creative Director",
    img: team1,
    bio: "With over six years of experience in documentary filmmaking, photography, and journalism, Kishan Chandore is a dedicated professional passionate about visual storytelling. As a Digital Content Creator and Communication Specialist, his skills span content creation, social media management, and video production. Kishan has conceptualized and produced impactful short films, documentaries, and educational videos for various projects, adeptly conducting photo documentation to capture key moments and tell compelling visual stories. Additionally, he has collaborated with project managers and coordinators to create informative newsletters, case studies, and project completion reports.\n\nDriven by a passion for social development and sustainable initiatives, Kishan is eager to contribute his expertise in content creation, social media management, and project coordination to organizations committed to making a positive impact.",
    dims: { w: 834, h: 332 }
  },
  {
    name: "Akshay Chandorkar",
    role: "Managing Director",
    img: team2,
    bio: "Akshay Chandorkar is one of the co-founders of The Vispera Studios and a multitalented individual with a variety of interests in the field of print media, web development, audio-visual production, color management, and editing. He holds an engineering degree in Printing Technology and Graphics Communication, and a Master's degree in Color Science from Rochester, New York.\n\nWith his expertise in these fields, he can provide a wide range of services, from writing and printing annual reports to designing websites. Akshay is also known for his quirky interests such as chess, astronomy, and theater, which he brings to his work, adding a unique perspective to his project. He is a great listener, and is always ready to bring the best ideas to the table for your next project. With his passion and expertise in print media, web development, and color science, Akshay is a valuable asset to The Vispera Studios team.",
    dims: { w: 834, h: 332 }
  },
  {
    name: "Priyanka Kadam",
    role: "Content Writer",
    img: team4,
    bio: "Priyanka is the backbone of The Vispera Studios when it comes to content creation. Her exceptional skills in content writing, report writing, and everything in between have made her an invaluable asset to our team.\n\nPriyanka holds a Bachelor's degree from the College of Engineering, Pune, an MBA in Rural Management from Anand, and an impressive degree in Public Policy from Germany. Her diverse educational background and passion for continuous learning enables her to craft compelling narratives and insightful reports that resonate with our audience and clients alike.",
    dims: { w: 834, h: 263 }
  },
  {
    name: "Noman Syed",
    role: "Digital Marketing Expert",
    img: team5,
    bio: "Meet Noman, our Digital Marketing Expert. A highly motivated and dedicated professional with over six years of combined experience in digital marketing and video production, Noman excels in PPC campaigns, social media management, content creation, Google Analytics, Google Ads, and Meta Ads.\n\nHe has a proven ability to drive traffic, generate leads, and manage cross-functional collaborations. Noman's expertise spans video production, direction, storytelling, digital marketing, and digital advertising. Proficient in the latest digital marketing trends and tools, he is committed to continuous learning and delivering quality content.",
    dims: { w: 834, h: 269 }
  },
  {
    name: "Pandhari Kadam",
    role: "Sr. Motion Graphic Artist",
    img: team3,
    bio: "Meet Pandhari Kadam, a seasoned graphic designer with over 16 years of experience. He excels in creating visually compelling designs using various software and tools. Throughout his career, Pandhari has contributed to multiple organizations, enhancing their visual communication through print and digital media, branding, and advertising.\n\nAs a key member of The Vispera Studios, he brings his extensive industry knowledge and creative flair to every project, ensuring exceptional design quality.",
    dims: { w: 834, h: 246 }
  },
];

export default function MeetTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="pt-16 md:pt-20 pb-24 md:pb-32 relative overflow-hidden" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">

        {/* Header */}
        <div className="relative w-fit mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-4xl md:text-5xl lg:text-[32px] font-bold text-[#0A374C] font-heading text-center"
          >
            Meet Our Team
          </motion.h2>
          <div className="absolute -right-3 -top-2 w-9 h-9 opacity-100 pointer-events-none z-0">
            <img src={headingBg} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center items-start gap-6 xl:gap-8 max-w-[1200px] mx-auto relative z-10 px-4">
          {teamData.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              delay={i * 0.1}
              onClick={() => setSelectedMember(member)}
              index={i}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <TeamModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function TeamCard({ member, delay = 0, onClick, index = 0 }) {
  // First 3 cards in first row, last 2 cards in second row (centered)
  const isSecondRow = index >= 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onClick={onClick}
      className={`
        group relative cursor-pointer transition-all duration-500 hover:shadow-2xl flex flex-col shrink-0
        w-full sm:w-[280px] md:w-[280px] aspect-[336/381] p-2 border-[1.5px] border-[#0A374C]/90 bg-white rounded-none
      `}
    >
      <div className="relative overflow-hidden flex-1 h-full w-full mb-2">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105 object-top"
        />
        
        {/* Transparent Teal Hover Screen Animation */}
        <motion.div 
          className="absolute inset-0 bg-[#0A374C]/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out backdrop-blur-[1px]"
        >
           <div className="w-8 h-8 text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
               <circle cx="12" cy="12" r="3" />
             </svg>
           </div>
        </motion.div>
      </div>

      <div className={`
        bg-[#0A374C] flex flex-col justify-center text-center transform transition-transform duration-500
        py-2 px-2 shrink-0
      `}>
        <h4 className="text-white font-bold tracking-wide font-heading mb-0.5 text-[15px]">{member.name}</h4>
        <p className="text-[#5EA4A4] font-medium tracking-wider uppercase text-[10px]">{member.role}</p>
      </div>
    </motion.div>
  );
}

function TeamModal({ member, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative bg-white w-full rounded-[8px] overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default"
          style={{ 
            maxWidth: '920px', 
            minHeight: '400px',
            marginTop: "34px"
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-40 text-white md:text-gray-400 hover:text-[#0A374C] transition-all hover:rotate-90 duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
  
          {/* Left Section: Identity Card */}
          <div className="w-full md:w-[35%] p-8 flex flex-col items-center justify-center text-center bg-[#F7F5F2]/30 border-r border-gray-100 relative">
            <div className="w-40 h-40 xl:w-48 xl:h-48 rounded-[12px] overflow-hidden mb-6 shadow-md border border-gray-100">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale" />
            </div>
            <h3 className="text-[#0A374C] font-bold text-2xl font-heading mb-1">{member.name}</h3>
            <p className="text-[#5EA4A4] font-bold text-sm uppercase tracking-widest">{member.role}</p>
          </div>
  
          {/* Right Section: Deep Bio */}
          <div className="w-full md:w-[65%] p-10 flex items-center">
            <div className="space-y-6">
              {member.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-[#0A374C] text-[14px] xl:text-[15px] leading-[26px] font-medium text-justify">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
    </div>
  );
}
