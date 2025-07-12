import { Button } from '@/components/ui/button';
import { Play, Github, Sparkles, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-card p-12 text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
          {/* Sparkle Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-8 animate-glow">
            <Sparkles className="h-10 w-10 text-primary-foreground" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="glow-text">Start Your</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Linux Terminal Journey
            </span><br />
            <span className="glow-text">Now!</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your Android device into a powerful development environment. 
            Join thousands of developers who have already discovered the freedom of mobile coding.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Instant Access</h3>
                <p className="text-muted-foreground text-sm">Start learning immediately, no setup required</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Expert Guidance</h3>
                <p className="text-muted-foreground text-sm">Learn from industry professionals and practitioners</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Lifetime Access</h3>
                <p className="text-muted-foreground text-sm">Keep learning with unlimited access to all content</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="glow-button px-12 py-6 text-xl font-bold group bg-gradient-primary border-0 hover:shadow-glow-primary"
            >
              <Play className="mr-3 h-6 w-6" />
              Join Free Course
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-12 py-6 text-xl font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-button group"
            >
              <Github className="mr-3 h-6 w-6" />
              GitHub Repository
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>10,000+ Active Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>4.9/5 Star Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>100% Free to Start</span>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-12 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-primary font-semibold">
              🔥 Limited Time: Get our premium eBook absolutely free with course enrollment!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;