import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { team } from "../../data/teamData";

export default function Team() {
  return (
    <section id="team" className="section-padding bg-bg-card/30">
      <Container>
        <SectionTitle 
          title="The Minds Behind the Magic" 
          subtitle="Our Team" 
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="aspect-square rounded-full overflow-hidden mb-8 border-2 border-transparent group-hover:border-brand-primary transition-all duration-500 p-2">
                <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center relative overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-brand-primary uppercase tracking-widest text-xs font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
