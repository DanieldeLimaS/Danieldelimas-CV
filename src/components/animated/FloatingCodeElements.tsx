
import { Code, Terminal, Braces, GitBranch, Cpu, Database, Zap, Bug } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingCodeElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const codeSnippets = [
    "const developer = { name: 'Daniel', lang: '.NET' };",
    "if (passion === true) { code(); }",
    "while (learning) { improve(); }",
    "function buildSolution() { return success; }",
    "try { innovate(); } catch (e) { learn(e); }",
    "SELECT * FROM experience WHERE years > 9;",
    "git commit -m 'feature: new possibilities'",
    "dotnet run --project MyCareer.csproj"
  ];

  const floatingElements = [
    { icon: Code, delay: 0, duration: 15, color: "text-cyan-400" },
    { icon: Terminal, delay: 2, duration: 20, color: "text-green-400" },
    { icon: Braces, delay: 4, duration: 18, color: "text-purple-400" },
    { icon: GitBranch, delay: 6, duration: 16, color: "text-orange-400" },
    { icon: Cpu, delay: 8, duration: 22, color: "text-pink-400" },
    { icon: Database, delay: 10, duration: 17, color: "text-blue-400" },
    { icon: Zap, delay: 12, duration: 19, color: "text-yellow-400" },
    { icon: Bug, delay: 14, duration: 21, color: "text-red-400" }
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.color} opacity-20 animate-bounce`}
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${15 + (index * 8)}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        >
          <element.icon className="w-8 h-8" />
        </div>
      ))}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute font-mono text-xs text-cyan-500/30 animate-pulse"
          style={{
            left: `${5 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`,
            animationDelay: `${index * 3}s`,
            animationDuration: `${4 + (index % 3)}s`
          }}
        >
          {snippet}
        </div>
      ))}

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#9f7aea" />
            <stop offset="100%" stopColor="#f093fb" />
          </linearGradient>
        </defs>
        
        {/* Animated circuit paths */}
        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M0,200 Q300,150 600,200 T1200,200"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <path
          d="M0,300 Q400,250 800,300 T1600,300"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1.5"
          className="animate-pulse"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Circuit nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 600}
            r="3"
            fill="url(#circuit-gradient)"
            className="animate-ping"
            style={{
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FloatingCodeElements;
