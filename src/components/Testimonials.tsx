import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Cybersecurity Student',
      avatar: '👨‍💻',
      rating: 5,
      quote: 'Termux changed how I learn ethical hacking. Being able to practice penetration testing tools on my phone anywhere is incredible. The tutorials are clear and practical.'
    },
    {
      name: 'Sarah Martinez',
      role: 'Mobile Developer',
      avatar: '👩‍💻',
      rating: 5,
      quote: 'As a developer constantly on the move, Termux has become my go-to solution. I can code Python scripts during my commute and manage my Git repositories seamlessly.'
    },
    {
      name: 'David Kumar',
      role: 'Computer Science Student',
      avatar: '🧑‍🎓',
      rating: 5,
      quote: 'The course structure is perfect for beginners. Started with zero Linux knowledge, now I\'m comfortable with command line and even building my own automation scripts.'
    },
    {
      name: 'Lisa Thompson',
      role: 'IT Professional',
      avatar: '👩‍🔬',
      rating: 5,
      quote: 'Termux tutorials helped me transition from Windows to Linux workflows. The mobile-first approach made learning less intimidating and more accessible.'
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Security Researcher',
      avatar: '🛡️',
      rating: 5,
      quote: 'Outstanding resource for mobile security testing. The hacking tools module is comprehensive and ethically focused. Perfect for security professionals.'
    },
    {
      name: 'Emily Zhang',
      role: 'DevOps Engineer',
      avatar: '⚙️',
      rating: 5,
      quote: 'Love how I can SSH into servers and manage deployments from my phone. Termux has made remote work truly mobile. The package management section was particularly helpful.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Students
            </span>{' '}
            Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of developers, students, and security professionals who have transformed 
            their mobile devices into powerful development environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-scale group cursor-pointer relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Community Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Ready to Join Them?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your Termux journey today and discover the power of mobile development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Free Course
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;