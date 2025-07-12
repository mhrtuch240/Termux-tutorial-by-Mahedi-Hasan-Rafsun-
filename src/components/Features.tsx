import { CheckCircle, Smartphone, Github, Zap, Users, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'No Root Needed',
      description: 'Works on any Android device without requiring root access or system modifications.'
    },
    {
      icon: Github,
      title: 'Open Source',
      description: 'Completely free and open-source with active community development and transparent code.'
    },
    {
      icon: Zap,
      title: '100+ Linux Tools',
      description: 'Access to over 100 essential Linux utilities and development tools in your pocket.'
    },
    {
      icon: CheckCircle,
      title: 'Git & Python Supported',
      description: 'Full support for Git version control, Python development, and Node.js applications.'
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join thousands of developers sharing knowledge, scripts, and helping each other learn.'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Built with security in mind, perfect for ethical hacking and penetration testing education.'
    }
  ];

  const stats = [
    { label: 'No Root Required', value: '100%', description: 'Safe for all devices' },
    { label: 'Package Availability', value: '1000+', description: 'Linux packages' },
    { label: 'File System Access', value: 'Full', description: 'Complete control' },
    { label: 'Performance', value: 'Native', description: 'ARM optimized' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Developers
            </span>{' '}
            Choose Termux
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features that make Termux the ultimate mobile development environment.
            Everything you need to code, learn, and create on your Android device.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-scale group cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Termux vs Traditional Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">❌ Traditional Setup</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Requires expensive laptop/desktop</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Limited mobility and portability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Complex installation and setup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>High power consumption</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Requires dedicated workspace</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">✅ Termux Advantage</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Works on any Android phone</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Code anywhere, anytime</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>One-click installation from Play Store</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Battery efficient and lightweight</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Learn and code on the go</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;