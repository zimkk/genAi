import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ZapIcon, PaletteIcon, MessageSquareIcon, CopyIcon, MaximizeIcon, CloudIcon, CheckIcon, ChevronDownIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { SAMPLE_IMAGES, TESTIMONIALS, PRICING_PLANS, FAQ_ITEMS, FEATURES } from '../utils/constants';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

interface Plan {
  title: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <ZapIcon size={24} className="text-primary-400" />;
      case 'Palette':
        return <PaletteIcon size={24} className="text-primary-400" />;
      case 'MessageSquare':
        return <MessageSquareIcon size={24} className="text-primary-400" />;
      case 'Copy':
        return <CopyIcon size={24} className="text-primary-400" />;
      case 'Maximize':
        return <MaximizeIcon size={24} className="text-primary-400" />;
      case 'Cloud':
        return <CloudIcon size={24} className="text-primary-400" />;
      default:
        return <ZapIcon size={24} className="text-primary-400" />;
    }
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return <div className="min-h-screen bg-gradient-to-b from-dark-300 via-dark-200 to-dark-300 text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-300/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  ImaginAI
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <button onClick={() => scrollToSection('features')} className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('faq')} className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                  FAQ
                </button>
                <Link to="/signin">
                  <Button variant="secondary" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    Try for Free
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <Link to="/signin">
                <Button variant="secondary" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary" size="sm">
                  Try Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 bg-clip-text text-transparent">
              Turn your imagination into art with AI
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Create stunning, unique images from simple text descriptions. Our
              advanced AI understands your vision and brings it to life in
              seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Try for Free
                  <ChevronRightIcon size={16} className="ml-1" />
                </Button>
              </Link>
              <Link to="/signin">
                <Button variant="secondary" size="lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          {/* Gallery Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {SAMPLE_IMAGES.slice(0, 6).map((image: Image) => (
              <div key={image.id} className="aspect-square overflow-hidden rounded-xl shadow-xl group relative bg-dark-200">
                <img 
                  src={image.url} 
                  alt={image.prompt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-sm text-white line-clamp-2">
                    {image.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-200">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Powerful Features for Limitless Creativity
            </h2>
            <p className="text-white/70">
              Everything you need to bring your imagination to life with
              AI-powered image generation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature: Feature, index: number) => <Card key={index} variant="glass" hover className="p-6">
                <div className="mb-4 p-3 rounded-full bg-primary-500/10 w-fit">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>)}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Loved by Creative Professionals
            </h2>
            <p className="text-white/70">
              See what our users are saying about their experience with
              ImaginAI.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card variant="glass" className="p-8">
              <p className="text-lg italic mb-6">
                "{TESTIMONIALS[currentTestimonial].content}"
              </p>
              <div className="flex items-center">
                <img src={TESTIMONIALS[currentTestimonial].avatar} alt={TESTIMONIALS[currentTestimonial].name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">
                    {TESTIMONIALS[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-white/70">
                    {TESTIMONIALS[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </Card>
            <div className="flex justify-center mt-8 space-x-2">
              {TESTIMONIALS.map((_: any, index: number) => <button key={index} className={`w-2.5 h-2.5 rounded-full transition-colors ${currentTestimonial === index ? 'bg-primary-500' : 'bg-white/30 hover:bg-white/50'}`} onClick={() => setCurrentTestimonial(index)} aria-label={`View testimonial ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-200">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Choose Your Creative Journey
            </h2>
            <p className="text-white/70">
              Select the plan that fits your creative needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan: Plan, index: number) => <Card key={index} variant={plan.popular ? 'glass' : 'default'} hover className={`p-6 ${plan.popular ? 'border-primary-500 relative' : ''}`}>
                {plan.popular && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-white/70 ml-1">/{plan.period}</span>}
                  </div>
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature: string, featureIndex: number) => <li key={featureIndex} className="flex items-start">
                      <CheckIcon size={18} className="text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>)}
                </ul>
                <Button variant={plan.popular ? 'primary' : 'secondary'} fullWidth>
                  {plan.cta}
                </Button>
              </Card>)}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70">
              Everything you need to know about ImaginAI.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item, index) => <div key={index} className="mb-4">
                <button className={`
                    w-full text-left p-4 rounded-lg flex items-center justify-between
                    ${activeAccordion === index ? 'bg-white/10' : 'bg-white/5'}
                    hover:bg-white/10 transition-colors
                  `} onClick={() => toggleAccordion(index)}>
                  <span className="font-medium">{item.question}</span>
                  <ChevronDownIcon size={20} className={`transition-transform ${activeAccordion === index ? 'transform rotate-180' : ''}`} />
                </button>
                {activeAccordion === index && <div className="p-4 bg-white/5 rounded-b-lg mt-px">
                    <p className="text-white/70">{item.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-dark-300 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                ImaginAI
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Turn your imagination into art with the power of AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-white/60 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} ImaginAI. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Home;