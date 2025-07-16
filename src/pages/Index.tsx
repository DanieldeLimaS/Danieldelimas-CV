
import ProfileSection from "@/components/resume/ProfileSection";
import ContactSection from "@/components/resume/ContactSection";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import FloatingCodeElements from "@/components/animated/FloatingCodeElements";
import CodeBlockAnimation from "@/components/animated/CodeBlockAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Programming Elements */}
      <FloatingCodeElements />
      
      {/* Tech Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Matrix-style grid with enhanced animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-cyan-500/20 animate-pulse hover:animate-ping transition-all duration-300" style={{
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Enhanced floating code snippets with rotation */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg backdrop-blur-sm border border-cyan-500/20 animate-pulse hover:animate-spin transition-all duration-1000"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-lg backdrop-blur-sm border border-purple-500/20 animate-pulse hover:animate-bounce transition-all duration-1000"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-green-400/10 to-cyan-600/10 rounded-lg backdrop-blur-sm border border-green-500/20 animate-pulse hover:animate-ping transition-all duration-1000"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-br from-orange-300/10 to-red-400/10 rounded-lg backdrop-blur-sm border border-orange-500/20 animate-pulse hover:animate-spin transition-all duration-1000"></div>
        
        {/* Enhanced binary numbers with more variety */}
        <div className="absolute top-1/4 left-1/4 text-cyan-500/30 font-mono text-sm animate-pulse hover:animate-bounce transition-all duration-300">
          <div className="space-y-1">
            <div>010101010</div>
            <div>110010110</div>
            <div>101110101</div>
          </div>
        </div>
        <div className="absolute top-3/4 right-1/4 text-green-500/30 font-mono text-sm animate-pulse hover:animate-spin transition-all duration-300">
          <div className="space-y-1">
            <div>function()</div>
            <div>const x = 1;</div>
            <div>return true;</div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/3 text-purple-500/30 font-mono text-sm animate-pulse hover:animate-bounce transition-all duration-300">
          <div className="space-y-1">
            <div>{"{ key: 'value' }"}</div>
            <div>await fetch()</div>
            <div>try { } catch</div>
          </div>
        </div>
      </div>

      {/* Enhanced scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse" 
             style={{ top: '20%', animationDuration: '3s' }}></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-pulse" 
             style={{ top: '60%', animationDuration: '4s' }}></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" 
             style={{ top: '80%', animationDuration: '5s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Profile Section */}
          <ProfileSection />

          {/* Main Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <ContactSection />
              <EducationSection />
              <SkillsSection />
              
              {/* Animated Code Block */}
              <div className="flex justify-center w-full">
                <CodeBlockAnimation />
              </div>
            </div>

            {/* Right Content - Experience */}
            <div className="lg:col-span-3">
              <ExperienceSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
