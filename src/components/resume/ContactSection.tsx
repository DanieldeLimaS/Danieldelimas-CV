
import { Phone, Mail, Globe, MapPin, Wifi, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactItems = [
    { icon: Phone, text: "(35) 99816-1377", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
    { icon: Mail, text: "devdanieldelima@gmail.com", color: "text-green-400", bgColor: "bg-green-500/10" },
    { icon: Globe, text: "devlima.com.br", color: "text-purple-400", bgColor: "bg-purple-500/10" },
    { icon: MapPin, text: "Paraguaçu, MG", color: "text-orange-400", bgColor: "bg-orange-500/10" },
  ];

  return (
    <Card className="bg-black/80 backdrop-blur-xl border border-gray-700/50 shadow-xl shadow-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <Server className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-xl font-bold text-white font-mono">
            <span className="text-gray-500">&lt;</span>
            <span className="text-cyan-400">contact</span>
            <span className="text-gray-500">/&gt;</span>
          </h2>
          <div className="flex items-center gap-1 ml-auto">
            <Wifi className="w-4 h-4 text-green-500" />
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="space-y-3">
          {contactItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg hover:${item.bgColor} transition-all duration-300 border border-transparent hover:border-gray-600 group cursor-pointer`}>
              <div className={`p-2 ${item.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">{item.text}</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-current rounded-full animate-ping"></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
