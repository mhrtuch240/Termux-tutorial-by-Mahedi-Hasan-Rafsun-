import { Github, Youtube, MessageCircle, Mail, Terminal, Smartphone, Code, Shield } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'Community', href: '#community' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const resourceLinks = [
    { label: 'Documentation', href: '#' },
    { label: 'Termux Wiki', href: '#' },
    { label: 'Package List', href: '#' },
    { label: 'Troubleshooting', href: '#' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#' }
  ];

  const courseLinks = [
    { label: 'Beginner Setup', href: '#' },
    { label: 'Linux Commands', href: '#' },
    { label: 'Python Scripting', href: '#' },
    { label: 'Ethical Hacking', href: '#' },
    { label: 'Advanced Tools', href: '#' },
    { label: 'Automation', href: '#' }
  ];

  const socialLinks = [
    { 
      icon: Youtube, 
      label: 'YouTube', 
      href: '#',
      color: 'hover:text-red-400'
    },
    { 
      icon: MessageCircle, 
      label: 'Telegram', 
      href: '#',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: '#',
      color: 'hover:text-primary'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: '#',
      color: 'hover:text-green-400'
    }
  ];

  const features = [
    { icon: Terminal, text: 'No Root Required' },
    { icon: Smartphone, text: 'Mobile Optimized' },
    { icon: Code, text: '100+ Packages' },
    { icon: Shield, text: 'Security Focused' }
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-muted/20 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Terminal className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">TermuxTutorial</h3>
                <p className="text-sm text-muted-foreground">by LWMHR - Learn With Mahedi Hasan Rafsun</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering developers to master Linux terminal skills on Android devices. 
              Learn, code, and hack ethically - all from your smartphone.
            </p>

            {/* Feature Tags */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <feature.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Courses</h4>
            <ul className="space-y-3">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 rounded-lg bg-muted/50 text-muted-foreground transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 WebLearner Pro / LWMHR. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <div className="text-muted-foreground">
                Made with ❤️ for the mobile dev community
              </div>
            </div>
          </div>
          
          {/* Open Source Notice */}
          <div className="mt-4 pt-4 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground">
              Termux is open source software. This tutorial platform is community-driven and educational.
              <br />
              <span className="text-primary">Learn responsibly • Code ethically • Share knowledge</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;