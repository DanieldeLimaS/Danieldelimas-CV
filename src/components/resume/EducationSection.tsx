
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <Card className="bg-black/80 backdrop-blur-xl border border-gray-700/50 shadow-xl shadow-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <GraduationCap className="w-5 h-5 text-green-400" />
          </div>
          <h2 className="text-xl font-bold text-white font-mono">
            <span className="text-gray-500">class </span>
            <span className="text-green-400">Education</span>
            <span className="text-gray-500"> {`{`}</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {/* Superior Course */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 relative overflow-hidden">
            {/* Circuit pattern */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
              <svg viewBox="0 0 64 64" className="w-full h-full text-green-500">
                <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-bold text-lg text-white font-mono mb-2">
                <span className="text-cyan-400">degree:</span> "Análise e Desenvolvimento de Sistemas"
              </h3>
              
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 font-mono text-sm">
                  <span className="text-purple-400">institution:</span> "Grupo Educacional UNIS"
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 font-mono text-sm">
                  <span className="text-orange-400">period:</span> "2020-2022"
                </span>
              </div>
            </div>
          </div>

          {/* Technical Course */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 relative overflow-hidden">
            {/* Circuit pattern */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
              <svg viewBox="0 0 48 48" className="w-full h-full text-blue-500">
                <rect x="8" y="8" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1"/>
                <rect x="16" y="16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-bold text-base text-white font-mono mb-2">
                <span className="text-cyan-400">course:</span> "Técnico em Informática"
              </h3>
              
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300 font-mono text-sm">
                  <span className="text-purple-400">institution:</span> "Escola Estadual Padre Piccinini"
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 font-mono text-sm">
                  <span className="text-orange-400">period:</span> "2015-2017"
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-gray-500 font-mono text-xs">
          <span>{`}`}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
