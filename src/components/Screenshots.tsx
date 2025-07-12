import { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import phoneScreenshot from '@/assets/phone-screenshot.jpg';

const Screenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      id: 1,
      title: 'Terminal Interface',
      description: 'Clean, responsive terminal with syntax highlighting and command history',
      image: phoneScreenshot,
      category: 'Interface'
    },
    {
      id: 2,
      title: 'Python Development',
      description: 'Write and execute Python scripts directly on your mobile device',
      image: phoneScreenshot,
      category: 'Development'
    },
    {
      id: 3,
      title: 'Package Management',
      description: 'Easy installation of Linux packages using APT package manager',
      image: phoneScreenshot,
      category: 'Packages'
    },
    {
      id: 4,
      title: 'Git Integration',
      description: 'Full Git support for version control and repository management',
      image: phoneScreenshot,
      category: 'Tools'
    },
    {
      id: 5,
      title: 'File System',
      description: 'Navigate and manage files with familiar Linux commands',
      image: phoneScreenshot,
      category: 'Files'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            Termux in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Action
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Termux transforms your Android device into a powerful development environment.
            Real screenshots from actual terminal sessions.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Screenshot */}
              <div className="relative">
                <div className="aspect-[9/16] max-w-xs mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-muted/50 shadow-terminal">
                  <img
                    src={screenshots[currentSlide].image}
                    alt={screenshots[currentSlide].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Phone Frame Overlay */}
                  <div className="absolute inset-0 border-8 border-gray-800 rounded-2xl pointer-events-none"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  <Terminal className="w-4 h-4 mr-2" />
                  {screenshots[currentSlide].category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {screenshots[currentSlide].title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {screenshots[currentSlide].description}
                </p>
                
                {/* Terminal Demo */}
                <div className="terminal-window p-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-terminal-green">$ termux-setup-storage</div>
                    <div className="text-muted-foreground">Permission granted</div>
                    <div className="text-terminal-cyan">$ pkg install git python nodejs</div>
                    <div className="text-terminal-yellow">Installing packages...</div>
                    <div className="text-primary">✓ Ready to code!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary shadow-glow-primary'
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
            <p className="text-muted-foreground">
              Touch-friendly interface designed specifically for mobile devices
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Terminal className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real Terminal</h3>
            <p className="text-muted-foreground">
              Authentic Linux terminal experience with full command support
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Monitor className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Portable Workspace</h3>
            <p className="text-muted-foreground">
              Your complete development environment wherever you go
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;