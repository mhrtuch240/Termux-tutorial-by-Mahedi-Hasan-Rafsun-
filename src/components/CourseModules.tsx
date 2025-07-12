import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Terminal, 
  Code, 
  Package, 
  Shield, 
  Smartphone,
  Clock,
  Users
} from 'lucide-react';

const CourseModules = () => {
  const modules = [
    {
      icon: Settings,
      title: 'Termux Setup',
      description: 'Complete installation guide, initial configuration, and essential settings for optimal performance.',
      level: 'Beginner',
      duration: '2 hours',
      students: '5.2K',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Terminal,
      title: 'Linux Commands',
      description: 'Master essential command-line operations, file management, and navigation in the terminal.',
      level: 'Beginner',
      duration: '4 hours',
      students: '4.8K',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Python & Shell Scripting',
      description: 'Learn Python programming and bash scripting to automate tasks and build powerful scripts.',
      level: 'Intermediate',
      duration: '6 hours',
      students: '3.9K',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Package,
      title: 'Package Management',
      description: 'Understand APT package manager, installing software, and managing dependencies effectively.',
      level: 'Intermediate',
      duration: '3 hours',
      students: '3.2K',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Termux Hacking Tools',
      description: 'Ethical hacking fundamentals, security tools, and penetration testing basics in mobile environment.',
      level: 'Advanced',
      duration: '8 hours',
      students: '2.7K',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Automation',
      description: 'Create automation scripts, mobile development setup, and advanced mobile-specific workflows.',
      level: 'Advanced',
      duration: '5 hours',
      students: '2.1K',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            Course{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Modules
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive learning path from basic setup to advanced hacking techniques. 
            Each module is designed to build upon previous knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="glass-card hover-scale group cursor-pointer transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader className="relative">
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center group-hover:animate-glow`}>
                  <module.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors pr-16">
                  {module.title}
                </CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className={getLevelColor(module.level)}>
                    {module.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {module.description}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/30">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {module.students}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Path */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Learning Path</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted-foreground">Beginner</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-gradient-to-r from-green-500 to-yellow-500"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-gradient-to-r from-yellow-500 to-red-500"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModules;