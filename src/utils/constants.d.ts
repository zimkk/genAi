interface Image {
  id: string;
  url: string;
  prompt: string;
  date: string;
  style: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Plan {
  title: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

interface Testimonial {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const SAMPLE_IMAGES: Image[];
export const TESTIMONIALS: Testimonial[];
export const PRICING_PLANS: Plan[];
export const FAQ_ITEMS: FAQItem[];
export const FEATURES: Feature[]; 