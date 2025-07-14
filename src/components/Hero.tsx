import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Play, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-terminal.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const commandText = '$ pkg install python';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= commandText.length) {
        setTypedText(commandText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">
            Learn{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Termux
            </span>{' '}
            on Android
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-muted-foreground">
            — No PC Needed!
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From basic Linux to Ethical Hacking, code like a pro on your phone.
            Master the mobile terminal that brings Linux power to your pocket.
          </p>

          {/* Terminal Demo */}
          <div className="terminal-window max-w-2xl mx-auto mb-12 p-6">
            <div className="font-mono text-left">
              <div className="text-terminal-green mb-2">
                termux@android:~$
              </div>
              <div className="text-terminal-cyan text-lg">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
              {typedText === commandText && (
                <div className="mt-4 text-terminal-yellow fade-in">
                  Installing Python... ✓<br />
                  <span className="text-terminal-green">Ready to code!</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="mailto:mahedihasanrafsun@proton.me">
            <Button 
              size="lg" 
              className="glow-button px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Free Course
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            
            <a href="/beginners_to_advance_termux.pdf" download>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-button"
            >
              <Download className="mr-2 h-5 w-5" />
              Download eBook
            </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="fade-in-delay">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Linux Tools</div>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
            <div className="fade-in-delay" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary">Free</div>
              <div className="text-muted-foreground">Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-secondary rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-10 animate-pulse" style={{ animationDelay: '2s' }}>
        <div className="w-1 h-1 bg-primary rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;