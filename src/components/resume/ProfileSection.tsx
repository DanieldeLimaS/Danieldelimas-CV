
import { Download, Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import TypingAnimation from "@/components/animated/TypingAnimation";

const ProfileSection = () => {
  const handleDownloadCV = () => {
    // URL do PDF no Google Drive (convertida para visualização direta)
    const pdfUrl = "https://drive.google.com/file/d/1NFLOkj8ih4FlCE-_22anQ7maM9fw7Nnc/view?usp=sharing";
    
    // Abre o PDF em uma nova aba
    window.open(pdfUrl, '_blank');
  };

  return (
    <Card className="bg-black/80 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden relative">
      {/* Tech overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-green-500 to-purple-500"></div>
      
      <CardContent className="p-8 relative z-10">
        {/* Header Section - Name and Avatar aligned */}
        <div className="flex items-center gap-8 mb-8">
          {/* Terminal Header */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-mono text-sm">~/developer $</span>
              <TypingAnimation text="whoami" speed={150} className="text-gray-400 text-sm" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 font-mono">
              Daniel de Lima dos Santos
            </h1>
            
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-cyan-500" />
              <p className="text-xl text-cyan-400 font-semibold font-mono">.NET Developer</p>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Avatar aligned with name */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Avatar className="w-36 h-36 border-4 border-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 shadow-xl shadow-cyan-500/50">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Daniel de Lima dos Santos"
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 text-white text-2xl font-bold">
                  DD
                </AvatarFallback>
              </Avatar>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 opacity-20 animate-pulse -z-10 blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Main Content - About and Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 font-mono">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-3 font-semibold text-lg">about.txt</span>
              </div>
              <div className="text-gray-300 leading-relaxed text-lg space-y-2">
                <div className="text-purple-400">/**</div>
                <div className="text-purple-400">* Meu maior conhecimento está em .NET, especialmente no desenvolvimento backend. No entanto, não me limito a uma única tecnologia e vejo cada novo aprendizado como uma oportunidade de crescimento.</div>
                <div className="text-purple-400">* Utilizo principalmente Google Cloud Platform, .NET, Java, Angular, Python, BQ, PostgreSQL, SQL Server e outras linguagens para criar soluções inovadoras, mas estou sempre aberto a explorar novas ferramentas e tecnologias.</div>
                <div className="text-purple-400">*/</div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 border border-cyan-500/50 group text-lg"
              >
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                <span className="font-mono">DOWNLOAD_CV.exe</span>
              </Button>
            </div>
          </div>

          {/* Tech Stack Section - Compact and Creative */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-3 font-semibold text-lg">tech-stack.ts</span>
              </div>
              
              {/* Compact Technology Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-cyan-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Core" className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">.NET</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-orange-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">Java</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-red-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">Angular</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">React</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-green-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">SQL</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-green-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">Mongo</span>
                </div>
              </div>
              
              {/* Cloud & DevOps Row */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="w-4 h-4 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">GCP</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-orange-500/50 transition-colors group">
                  <img src="https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-File.png" alt="AWS" className="w-4 h-4 mb-1 group-hover:scale-110 transition-transform object-contain" />
                  <span className="text-xs text-gray-400 font-mono">AWS</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-orange-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">GitHub</span>
                </div>
                
                <div className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-colors group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure DevOps" className="w-4 h-4 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 font-mono">Azure</span>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="flex items-center justify-center p-3 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono font-semibold">Senior Developer</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;

