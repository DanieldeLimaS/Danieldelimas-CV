
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Cloud, GitBranch, Settings, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Backend & Frameworks",
      skills: ['.NET 6', '.NET Core', '.NET Framework', 'Java', 'Web API', 'ASP.NET MVC', 'Windows Forms', 'WCF'],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Code2,
      title: "Frontend & UI",
      skills: ['Angular', 'HTML/CSS', 'JavaScript', 'jQuery', 'Bootstrap 5', 'Metro Framework'],
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Database,
      title: "Banco de Dados & ORM",
      skills: ['SQL Server', 'MySQL', 'MongoDB', 'Entity Framework', 'Dapper', 'AutoMapper'],
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ['GCP (Google Cloud)', 'AWS', 'GitHub Actions', 'Azure DevOps', 'Cloud Build', 'CI/CD'],
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: GitBranch,
      title: "Arquitetura & Metodologias",
      skills: ['DDD (Domain-Driven Design)', 'SOLID Principles', 'Clean Architecture', 'Layered Architecture', 'Design Patterns', 'Scrum', 'Kanban', 'Fluent Validation'],
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <Card className="bg-black/80 backdrop-blur-xl border border-gray-700/50 shadow-xl shadow-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Code2 className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-xl font-bold text-white font-mono">
            <span className="text-gray-500">const </span>
            <span className="text-purple-400">skills</span>
            <span className="text-gray-500"> = [</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <category.icon className={`w-4 h-4 ${category.color}`} />
                <span className={`text-sm font-mono font-semibold ${category.color}`}>
                  {category.title}:
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2 ml-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`flex items-center gap-3 p-2 rounded-lg hover:${category.bgColor} transition-all duration-300 border border-transparent hover:border-gray-600 group cursor-pointer`}>
                    <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-current transition-colors"></div>
                    <span className="text-gray-300 font-mono text-xs group-hover:text-white transition-colors">
                      "{skill}"
                    </span>
                    <span className="text-gray-500 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-gray-500 font-mono text-xs">
          <span>];</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
