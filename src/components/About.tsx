import { Terminal, Smartphone, Code, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Terminal,
      title: 'Terminal Power',
      description: 'Full Linux terminal experience on Android'
    },
    {
      icon: Code,
      title: 'Multiple Languages',
      description: 'Python, Bash, Node.js, and more'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Designed for touch interfaces and mobile workflows'
    },
    {
      icon: Shield,
      title: 'Security Tools',
      description: 'Ethical hacking and penetration testing capabilities'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            What is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Termux?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Termux is a mobile terminal app that enables Linux-like functionality directly on Android. 
            It's the perfect platform for coding, scripting, and learning programming on the go - 
            transforming your smartphone into a powerful development environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center hover-scale group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:animate-glow">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Why Choose Termux?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">No Root Required</h4>
                  <p className="text-muted-foreground">Works on any Android device without rooting</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Package Management</h4>
                  <p className="text-muted-foreground">APT package manager with 1000+ packages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Open Source</h4>
                  <p className="text-muted-foreground">Free, transparent, and community-driven</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">SSH & Git Support</h4>
                  <p className="text-muted-foreground">Remote server access and version control</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="terminal-window p-6">
            <div className="font-mono text-sm space-y-2">
              <div className="text-terminal-green">$ pkg update && pkg upgrade</div>
              <div className="text-muted-foreground">Updating package lists...</div>
              <div className="text-terminal-green">$ pkg install git python nodejs</div>
              <div className="text-muted-foreground">Installing development tools...</div>
              <div className="text-terminal-cyan">$ python --version</div>
              <div className="text-terminal-yellow">Python 3.11.2</div>
              <div className="text-terminal-cyan">$ git --version</div>
              <div className="text-terminal-yellow">git version 2.39.0</div>
              <div className="text-terminal-green">$ echo "Ready to code!"</div>
              <div className="text-primary">Ready to code!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;