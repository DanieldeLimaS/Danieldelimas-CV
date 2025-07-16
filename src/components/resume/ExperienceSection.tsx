import { Card, CardContent } from "@/components/ui/card";
import { Building, Clock, Code, Zap, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Grupo Hiper Saúde",
      role: "DESENVOLVEDOR DE SISTEMAS", 
      period: "Outubro 2023 – Atual",
      description: "Engenheiro de Software com experiência em integração de dados utilizando .NET 6 e Java. Possuo sólidos conhecimentos em Google Cloud Platform (GCP), incluindo Cloud Build, e domino ferramentas de CI/CD como GitHub Actions. Atuo em todas as fases do desenvolvimento de software, desde a concepção de novos produtos até a implementação de soluções tecnológicas robustas. Atualmente estou atuando no time de frontend com Angular desenvolvendo o Manager (core da empresa) onde concentra cadastros de clientes e suas documentações e gestão atual.",
      status: "active",
      tech: [".NET 6", "Java", "GCP", "GitHub Actions", "Cloud Build", "Angular", "Frontend", "CI/CD"],
      sortOrder: 1
    },
    {
      company: "ABC Fitness",
      role: "DEV BACKEND .NET",
      period: "Julho 2023 – Setembro 2023 (3 meses)",
      description: "Desenvolvedor .NET com foco em projetos de Empréstimo Consignado no Banco BMG. Expertise em .NET Core e versões mais recentes, Web API, bancos de dados SQL Server e NoSQL (MongoDB), além de arquitetura DDD. Familiaridade com ferramentas de CI/CD (Azure DevOps), cloud (AWS) e metodologias ágeis (Kanban).",
      status: "completed",
      tech: [".NET Core", "Web API", "SQL Server", "MongoDB", "DDD", "Azure DevOps", "AWS", "Kanban"],
      sortOrder: 2
    },
    {
      company: "ACT Digital",
      role: "DEV BACKEND .NET",
      period: "2022 – 2023 (1 ano e 4 meses)",
      description: "Desenvolvedor .NET com foco em projetos de Empréstimo Consignado no Banco BMG. Integrações com o dataprev para fluxo de empréstimo em .NET Core e versões mais recentes, Web API, bancos de dados SQL Server e NoSQL (MongoDB), além de arquitetura DDD. Familiaridade com ferramentas de CI/CD (Azure DevOps), cloud (AWS) e metodologias ágeis (Kanban).",
      status: "completed",
      tech: [".NET Core", "Web API", "SQL Server", "MongoDB", "DDD", "Azure DevOps", "AWS", "Kanban"],
      sortOrder: 3
    },
    {
      company: "Função Sistemas",
      role: "DEV FULL-STACK .NET",
      period: "2022 (4 meses)",
      description: "Atuando como Dev Full Stack .NET, resolvi desafios complexos em projetos legados Web Forms, garantindo a estabilidade e evolução da plataforma. Entreguei soluções eficientes e escaláveis, utilizando tecnologias como ASP.NET MVC, Web API e SQL Server.",
      status: "completed",
      tech: ["Web Forms", "ASP.NET MVC", "Web API", "SQL Server", "Full Stack"],
      sortOrder: 4
    },
    {
      company: "SUM Software",
      role: "DESENVOLVEDOR .NET",
      period: "2021 (6 meses)",
      description: "Desenvolvimento de sistemas de automação comercial e sistemas fiscais, com destaque para o desenvolvimento de um módulo do sistema para geração do SPED fiscal e manutenção da parte financeira. Tecnologias utilizadas: .NET Framework (Windows Forms), AutoMapper, Fluent Validation, Metro Framework, WCF, ORM (Entity Framework e Core, Dapper), SQL Server, Crystal Report, metodologia ágil Scrum, Git e GitHub.",
      status: "completed",
      tech: [".NET Framework", "Windows Forms", "AutoMapper", "Fluent Validation", "Metro Framework", "WCF", "Entity Framework", "Dapper", "SQL Server", "Crystal Reports", "SPED Fiscal", "Scrum", "Git", "GitHub"],
      sortOrder: 5
    },
    {
      company: "Grupo Hiper Saúde",
      role: "DEV FULL-STACK .NET PLENO",
      period: "2020 – 2021 (1 ano e 1 mês)",
      description: "Atuação em projetos internos com integrações com Power BI e novas plataformas de controle de gestão interna de equipamentos. Tecnologias utilizadas: .NET Framework 4.8, .NET Core 5, Web API, ORM (Entity Framework e Dapper), MySQL, SQL Server, Power BI, HTML, CSS, JavaScript, jQuery, Bootstrap 5.",
      status: "completed",
      tech: [".NET Framework 4.8", ".NET Core 5", "Web API", "Entity Framework", "Dapper", "MySQL", "SQL Server", "Power BI", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap 5"],
      sortOrder: 6
    },
    {
      company: "Grupo Hiper Saúde",
      role: "AUXILIAR T.I. / DEV .NET JÚNIOR",
      period: "2018 – 2020 (2 anos)",
      description: "Suporte técnico e Atendimento ao cliente, Instalação de software e manutenção de computadores, Treinamento do sistema de gestão interna para novos colaboradores. Desenvolvedor .NET Framework com experiência em Windows Forms, Entity Framework e Dapper. Responsável pela criação e manutenção do sistema de gestão interna, incluindo modelagem de banco de dados SQL Server, construção de queries e desenvolvimento de procedures.",
      status: "completed",
      tech: [".NET Framework", "C#", "SQL Server", "Windows Forms", "Entity Framework", "Dapper", "Crystal Reports", "Suporte Técnico", "Treinamento"],
      sortOrder: 7
    },
    {
      company: "First Soluções",
      role: "DESENVOLVEDOR .NET JÚNIOR",
      period: "2015 – 2017 (2 anos e 1 mês)",
      description: "Desenvolvimento de sistemas de automação comercial, manutenção e novas implementações com windows forms, atuação em banco de dados sql server, além de prestar suporte técnico de software, desenvolvimento .Net Framework (Windows Forms), ajustes de Sintegras, montagem e manutenção de computadores, treinamento ao cliente do sistema de gestão",
      status: "completed",
      tech: ["C#","SQL Server","Windows Forms","Crystal Reports", "Suporte Técnico", "Treinamento"],
      sortOrder: 8
    }
  ];

  // Sort experiences by chronological order first
  const sortedExperiences = experiences.sort((a, b) => a.sortOrder - b.sortOrder);
  
  // Group consecutive experiences from the same company
  const groupedExperiences: Array<{
    company: string;
    roles: typeof experiences;
    isGrouped: boolean;
  }> = [];
  
  let currentGroup: typeof experiences = [];
  let currentCompany = '';
  
  sortedExperiences.forEach((experience) => {
    if (experience.company === currentCompany) {
      // Same company, add to current group
      currentGroup.push(experience);
    } else {
      // Different company, save previous group and start new one
      if (currentGroup.length > 0) {
        groupedExperiences.push({
          company: currentCompany,
          roles: [...currentGroup],
          isGrouped: currentGroup.length > 1
        });
      }
      currentGroup = [experience];
      currentCompany = experience.company;
    }
  });
  
  // Don't forget the last group
  if (currentGroup.length > 0) {
    groupedExperiences.push({
      company: currentCompany,
      roles: [...currentGroup],
      isGrouped: currentGroup.length > 1
    });
  }

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? { border: 'border-green-500/50', glow: 'shadow-green-500/20', dot: 'bg-green-500' }
      : { border: 'border-gray-600/50', glow: 'shadow-gray-500/20', dot: 'bg-gray-500' };
  };

  const renderExperienceGroup = (group: { company: string; roles: typeof experiences; isGrouped: boolean }) => {
    const hasActiveRole = group.roles.some(role => role.status === 'active');
    const statusColors = getStatusColor(hasActiveRole ? 'active' : 'completed');
    
    if (group.isGrouped) {
      // Multiple roles in same company - show as timeline
      return (
        <div key={group.company} className={`bg-gray-900/50 border ${statusColors.border} rounded-lg p-6 relative overflow-hidden group hover:shadow-xl ${statusColors.glow} transition-all duration-300`}>
          {/* Tech pattern overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
            <Code className="w-full h-full text-cyan-500 transform rotate-12" />
          </div>
          
          {/* Company status indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <div className={`w-2 h-2 ${statusColors.dot} rounded-full ${hasActiveRole ? 'animate-pulse' : ''}`}></div>
            <span className="text-xs font-mono text-gray-400">{hasActiveRole ? 'active' : 'completed'}</span>
          </div>
          
          <div className="relative z-10">
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
              <div>
                <h3 className="font-bold text-xl text-white font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                  <span className="text-cyan-400">company:</span> "{group.company}"
                </h3>
              </div>
            </div>
            
            {/* Timeline of roles */}
            <div className="space-y-6">
              {group.roles.map((role, roleIndex) => {
                const roleStatusColors = getStatusColor(role.status);
                const isLastRole = roleIndex === group.roles.length - 1;
                
                return (
                  <div key={roleIndex} className="relative">
                    {/* Timeline connector */}
                    {!isLastRole && (
                      <div className="absolute left-6 top-16 w-px h-6 bg-gradient-to-b from-purple-500/50 to-cyan-500/50"></div>
                    )}
                    
                    <div className="flex gap-4">
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 mt-2">
                        <div className={`w-3 h-3 ${roleStatusColors.dot} rounded-full ${role.status === 'active' ? 'animate-pulse' : ''} border-2 border-gray-800`}></div>
                      </div>
                      
                      {/* Role content */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-purple-400" />
                          <span className="text-purple-400 font-mono text-sm font-semibold">
                            {role.role}
                          </span>
                          <div className={`ml-2 w-1.5 h-1.5 ${roleStatusColors.dot} rounded-full ${role.status === 'active' ? 'animate-pulse' : ''}`}></div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-4 h-4 text-orange-400" />
                          <span className="text-orange-400 font-mono text-sm">{role.period}</span>
                        </div>
                        
                        <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mb-4">
                          <p className="text-gray-300 text-sm leading-relaxed font-mono">
                            <span className="text-green-400">// </span>
                            {role.description}
                          </p>
                        </div>
                        
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {role.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400 hover:scale-105 transition-transform cursor-pointer">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      // Single role - show as individual experience
      const role = group.roles[0];
      const roleStatusColors = getStatusColor(role.status);
      
      return (
        <div key={`${role.company}-${role.sortOrder}`} className={`bg-gray-900/50 border ${roleStatusColors.border} rounded-lg p-6 relative overflow-hidden group hover:shadow-xl ${roleStatusColors.glow} transition-all duration-300`}>
          {/* Tech pattern overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden">
            <Code className="w-full h-full text-cyan-500 transform rotate-12" />
          </div>
          
          {/* Status indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <div className={`w-2 h-2 ${roleStatusColors.dot} rounded-full ${role.status === 'active' ? 'animate-pulse' : ''}`}></div>
            <span className="text-xs font-mono text-gray-400">{role.status}</span>
          </div>
          
          <div className="relative z-10">
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
              <div>
                <h3 className="font-bold text-xl text-white font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                  <span className="text-cyan-400">company:</span> "{role.company}"
                </h3>
              </div>
            </div>
            
            {/* Role content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-mono text-sm font-semibold">
                  {role.role}
                </span>
                <div className={`ml-2 w-1.5 h-1.5 ${roleStatusColors.dot} rounded-full ${role.status === 'active' ? 'animate-pulse' : ''}`}></div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-mono text-sm">{role.period}</span>
              </div>
              
              <div className="bg-black/30 border border-gray-700 rounded-lg p-4 mb-4">
                <p className="text-gray-300 text-sm leading-relaxed font-mono">
                  <span className="text-green-400">// </span>
                  {role.description}
                </p>
              </div>
              
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {role.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400 hover:scale-105 transition-transform cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Card className="bg-black/80 backdrop-blur-xl border border-gray-700/50 shadow-xl shadow-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <Building className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-xl font-bold text-white font-mono">
            <span className="text-gray-500">array </span>
            <span className="text-cyan-400">experience</span>
            <span className="text-gray-500">[9 anos] = {`{`}</span>
          </h2>
          <div className="ml-auto flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-mono">runtime: active</span>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* All experiences in chronological order with grouped consecutive roles */}
          {groupedExperiences.map((group) => renderExperienceGroup(group))}
        </div>
        
        <div className="mt-6 text-gray-500 font-mono text-xs">
          <span>{`}`}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
