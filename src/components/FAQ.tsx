import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need to root my Android device to use Termux?',
      answer: 'No! Termux works perfectly on any Android device without requiring root access. It operates within Android\'s security framework while providing full Linux functionality. This makes it safe and accessible for everyone.'
    },
    {
      question: 'Is Termux really free? Are there any hidden costs?',
      answer: 'Termux is completely free and open-source. You can download it from F-Droid or GitHub without any costs. Our tutorials and courses are also free. The only optional paid content is our premium eBook with advanced projects.'
    },
    {
      question: 'Can I really do ethical hacking on my phone?',
      answer: 'Yes! Termux supports many ethical hacking and penetration testing tools like Nmap, Metasploit, Aircrack-ng, and more. However, remember to only use these tools on networks you own or have explicit permission to test.'
    },
    {
      question: 'What programming languages are supported?',
      answer: 'Termux supports numerous programming languages including Python, JavaScript (Node.js), Ruby, Perl, PHP, C/C++, Go, Rust, and many more. You can install compilers and interpreters using the APT package manager.'
    },
    {
      question: 'How much storage space does Termux require?',
      answer: 'The basic Termux installation is quite small (around 50MB). However, as you install packages and development tools, it can grow. We recommend having at least 2-3GB of free space for a full development setup.'
    },
    {
      question: 'Can I connect to remote servers via SSH?',
      answer: 'Absolutely! Termux includes full SSH client and server capabilities. You can connect to remote Linux servers, manage cloud instances, and even allow others to SSH into your Android device if needed.'
    },
    {
      question: 'Is it suitable for complete beginners?',
      answer: 'Yes! Our course starts from absolute basics and gradually builds up your skills. We explain every command and concept clearly. Many students with zero Linux experience have successfully completed our program.'
    },
    {
      question: 'How does Termux compare to other mobile terminals?',
      answer: 'Termux is unique because it provides a complete Linux environment, not just a terminal emulator. It has its own package repository with over 1000 packages and doesn\'t require root access, making it more powerful and accessible than alternatives.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers! Here are the most common questions 
            about Termux and our learning platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pl-10">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our community is here to help! Join our Discord server or GitHub discussions 
              for real-time support from fellow Termux enthusiasts and experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Join Discord Community
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Browse GitHub Discussions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;