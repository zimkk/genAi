export const SAMPLE_IMAGES = [{
  id: 1,
  url: "https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?q=80&w=1932&auto=format&fit=crop",
  prompt: "Cybernetic astronaut exploring neon city, futuristic, detailed",
  date: "2023-10-15",
  style: "Futuristic"
}, {
  id: 2,
  url: "https://images.unsplash.com/photo-1655720828018-7467e9fa5e9d?q=80&w=1932&auto=format&fit=crop",
  prompt: "Ethereal forest with bioluminescent plants and mystical creatures",
  date: "2023-10-14",
  style: "Fantasy"
}, {
  id: 3,
  url: "https://images.unsplash.com/photo-1655635674520-4c575a2f4ab9?q=80&w=1932&auto=format&fit=crop",
  prompt: "Abstract fluid art with vibrant colors and smooth transitions",
  date: "2023-10-13",
  style: "Abstract"
}, {
  id: 4,
  url: "https://images.unsplash.com/photo-1655720033654-a4239e35bbea?q=80&w=1932&auto=format&fit=crop",
  prompt: "Steampunk cityscape with airships and clockwork mechanisms",
  date: "2023-10-12",
  style: "Steampunk"
}, {
  id: 5,
  url: "https://images.unsplash.com/photo-1655720033726-3dbe9b5ab5b3?q=80&w=1932&auto=format&fit=crop",
  prompt: "Underwater civilization with bioluminescent architecture",
  date: "2023-10-11",
  style: "Sci-Fi"
}, {
  id: 6,
  url: "https://images.unsplash.com/photo-1655720032286-8b9a86e3b0df?q=80&w=1932&auto=format&fit=crop",
  prompt: "Minimalist Japanese garden in autumn with maple trees",
  date: "2023-10-10",
  style: "Minimalist"
}];
export const TESTIMONIALS = [{
  id: 1,
  name: "Alex Chen",
  role: "Digital Artist",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  content: "This platform has completely transformed my creative workflow. The AI understands my artistic vision perfectly and helps me iterate faster than ever before."
}, {
  id: 2,
  name: "Sarah Johnson",
  role: "Game Developer",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  content: "I use this for concept art generation and it's saved me countless hours. The quality and consistency of the outputs is remarkable."
}, {
  id: 3,
  name: "Marcus Williams",
  role: "UI/UX Designer",
  avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  content: "The style control features are incredible. I can maintain brand consistency while exploring creative variations that I wouldn't have thought of myself."
}];
export const PRICING_PLANS = [{
  title: "Free",
  price: "$0",
  features: ["5 image generations per day", "Standard resolution", "Basic styles", "24-hour generation queue", "Community support"],
  cta: "Start Creating",
  popular: false
}, {
  title: "Creator",
  price: "$15",
  period: "month",
  features: ["50 image generations per day", "High resolution", "All styles", "Priority generation queue", "Email support", "Commercial usage"],
  cta: "Go Creative",
  popular: true
}, {
  title: "Professional",
  price: "$39",
  period: "month",
  features: ["Unlimited image generations", "Maximum resolution", "Custom styles", "Instant generation", "Priority support", "API access", "Dedicated account manager"],
  cta: "Get Unlimited",
  popular: false
}];
export const FAQ_ITEMS = [{
  question: "How does the AI image generation work?",
  answer: "Our platform uses advanced neural networks trained on millions of images to generate unique visuals based on your text descriptions. The AI understands concepts, styles, and composition to create images that match your creative vision."
}, {
  question: "Can I use the generated images commercially?",
  answer: "Yes, with our Creator and Professional plans, you receive full commercial rights to all images you generate. The Free plan is limited to personal use only."
}, {
  question: "How long does image generation take?",
  answer: "Generation time varies based on complexity and your subscription plan. Free users typically receive images within 1-2 minutes, while paid plans have priority access with generation times as fast as 15-30 seconds."
}, {
  question: "Can I request specific art styles?",
  answer: "Absolutely! You can specify art styles in your prompts, such as 'cyberpunk', 'impressionist', 'anime', etc. Professional plan users can also create and save custom style presets."
}, {
  question: "Is there a limit to how many images I can generate?",
  answer: "Free users can generate up to 5 images per day, Creator plan users get 50 generations daily, and Professional plan users have unlimited generations."
}];
export const FEATURES = [{
  title: "Fast Generation",
  description: "Create stunning images in seconds with our optimized AI models",
  icon: "Zap"
}, {
  title: "Style Control",
  description: "Fine-tune your creations with precise style parameters and presets",
  icon: "Palette"
}, {
  title: "Smart Prompting",
  description: "Get assistance crafting the perfect prompts for your desired outcomes",
  icon: "MessageSquare"
}, {
  title: "Variations",
  description: "Explore multiple versions of your concept with a single click",
  icon: "Copy"
}, {
  title: "High Resolution",
  description: "Generate images up to 4K resolution for professional use",
  icon: "Maximize"
}, {
  title: "Cloud Storage",
  description: "All your creations safely stored and accessible anywhere",
  icon: "Cloud"
}];