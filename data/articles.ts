export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

export const articles: Article[] = [
  {
    slug: "how-to-prepare-for-your-first-dog-walk",
    title: "How to Prepare for Your First Dog Walk Together",
    excerpt:
      "A calm, confidence-building checklist for new adopters to help your dog settle into everyday routines.",
    category: "Adoption Tips",
    date: "May 18, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A dog on a walk with a person",
  },
  {
    slug: "supporting-dogs-through-medical-recovery",
    title: "Supporting Dogs Through Recovery and Rebuild",
    excerpt:
      "Learn how enrichment, routine, and patient care help animals recover and thrive after a challenging start.",
    category: "Animal Care",
    date: "May 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A dog resting comfortably after care",
  },
  {
    slug: "why-foster-care-matters",
    title: "Why Foster Care Matters for Animals in Transition",
    excerpt:
      "Foster homes help animals learn routines, reduce stress, and move more quickly toward permanent adoption.",
    category: "Foster Programs",
    date: "April 29, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A happy dog at home with a foster family",
  },
  {
    slug: "starting-a-cat-friendly-home",
    title: "A Simple Guide to Creating a Cat-Friendly Home",
    excerpt:
      "From vertical space to enrichment, small changes can help a new cat feel safe and settled right away.",
    category: "Cat Care",
    date: "April 13, 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A cat in a cozy home environment",
  },
];

export const successStories = [
  {
    name: "Jasper & Emma",
    quote:
      "The adoption process felt thoughtful and personal from start to finish. We were matched with a dog who fit our home perfectly.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A dog and its new family enjoying time together",
  },
  {
    name: "Maya & Theo",
    quote:
      "We fostered for two months and then adopted the sweetest cat we could imagine. The guidance was incredibly kind and practical.",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A person cuddling a cat",
  },
  {
    name: "Riley & Cruz",
    quote:
      "We were able to volunteer weekly and feel like we truly helped animals settle in and find confident new homes.",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A pair of people volunteering with dogs",
  },
];
