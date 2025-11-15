import { motion } from "framer-motion";
import BouncyText from "@/components/BouncyText";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingNav from "@/components/navigation/FloatingNav";
import PersonalBranding from "@/components/branding/PersonalBranding";
import ProfileImage from "@/components/branding/ProfileImage";
import Timeline from "@/components/timeline/Timeline";
import ScrollIndicator from "@/components/navigation/ScrollIndicator";
import Skills from "@/components/sections/Skills";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background">
      <ProfileImage />
      <FloatingNav />
      <ScrollIndicator />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatedBackground />
        
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-start justify-center w-full h-full pt-24 md:pt-32"
        >
          <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
            <PersonalBranding />
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <Skills />

      {/* Stats Section */}
      <Stats />

      {/* Timeline Section */}
      <Timeline />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
