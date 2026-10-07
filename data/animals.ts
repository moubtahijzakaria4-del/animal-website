export type AnimalSpecies = "Dog" | "Cat" | "Rabbit" | "Bird" | "Other";
export type AnimalGender = "Female" | "Male";
export type AnimalSize = "Small" | "Medium" | "Large";
export type AnimalStatus = "Available" | "Pending" | "Adopted";

export interface Animal {
  id: number;
  slug: string;
  name: string;
  species: AnimalSpecies;
  breed: string;
  age: string;
  gender: AnimalGender;
  size: AnimalSize;
  location: string;
  personality: string[];
  story: string;
  status: AnimalStatus;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const animals: Animal[] = [
  {
    id: 1,
    slug: "milo",
    name: "Milo",
    species: "Dog",
    breed: "Labrador Mix",
    age: "2 years",
    gender: "Male",
    size: "Large",
    location: "Portland, OR",
    personality: ["Gentle", "Social", "Smart"],
    story:
      "Milo arrived at our shelter after being found wandering near a busy trailhead. He quickly became a favorite thanks to his relaxed nature, love of people, and uncanny ability to make even shy visitors feel at ease.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A happy large dog sitting in a field",
    featured: true,
  },
  {
    id: 2,
    slug: "luna",
    name: "Luna",
    species: "Cat",
    breed: "Domestic Shorthair",
    age: "8 months",
    gender: "Female",
    size: "Small",
    location: "Seattle, WA",
    personality: ["Curious", "Affectionate", "Playful"],
    story:
      "Luna loves sunny windows, cardboard castles, and endless play sessions. She has a sweet temperament and is ready for a calm home with a soft spot for a brave little explorer.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A curious kitten sitting on a chair",
    featured: true,
  },
  {
    id: 3,
    slug: "olive",
    name: "Olive",
    species: "Rabbit",
    breed: "Mini Lop",
    age: "1 year",
    gender: "Female",
    size: "Small",
    location: "Bend, OR",
    personality: ["Calm", "Gentle", "Observant"],
    story:
      "Olive was rescued from a crowded backyard breeder and has since transformed into a confident, affectionate bunny who enjoys peaceful companionship and gentle enrichment.",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A fluffy rabbit in a grassy field",
  },
  {
    id: 4,
    slug: "sasha",
    name: "Sasha",
    species: "Dog",
    breed: "German Shepherd Mix",
    age: "5 years",
    gender: "Female",
    size: "Large",
    location: "Spokane, WA",
    personality: ["Loyal", "Confident", "Trainable"],
    story:
      "Sasha is a watchful, intelligent companion who responds beautifully to structure and positive reinforcement. She is looking for a patient adopter who enjoys outdoor adventures and training.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A German shepherd mix standing outdoors",
  },
  {
    id: 5,
    slug: "poppy",
    name: "Poppy",
    species: "Cat",
    breed: "Tabby",
    age: "3 years",
    gender: "Female",
    size: "Medium",
    location: "Tacoma, WA",
    personality: ["Playful", "Affectionate", "Independent"],
    story:
      "Poppy has the perfect balance of cuddles and curiosity. She thrives in a home with toys, window perches, and a family ready to enjoy her sweet, entertaining personality.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A friendly tabby cat looking at the camera",
  },
  {
    id: 6,
    slug: "beau",
    name: "Beau",
    species: "Dog",
    breed: "Corgi Mix",
    age: "1 year",
    gender: "Male",
    size: "Medium",
    location: "Eugene, OR",
    personality: ["Energetic", "Outgoing", "Funny"],
    story:
      "Beau is a joyful little explorer with a goofy streak and a whole lot of heart. He’d love a home with regular exercise and plenty of opportunities to play and learn.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A happy corgi mix smiling outdoors",
  },
  {
    id: 7,
    slug: "fern",
    name: "Fern",
    species: "Bird",
    breed: "Cockatiel",
    age: "2 years",
    gender: "Female",
    size: "Small",
    location: "Boise, ID",
    personality: ["Social", "Charming", "Vocal"],
    story:
      "Fern was surrendered when her previous family realized they were not ready for the daily enrichment a social bird needs. She enjoys attention, gentle handling, and a bright home.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A cockatiel perched on a branch",
  },
  {
    id: 8,
    slug: "ozzy",
    name: "Ozzy",
    species: "Cat",
    breed: "Black Cat",
    age: "6 years",
    gender: "Male",
    size: "Medium",
    location: "Denver, CO",
    personality: ["Calm", "Loyal", "Quiet"],
    story:
      "Ozzy is a mellow companion who loves soft blankets, slow mornings, and carefully chosen attention. He is ideal for a home seeking a steady, affectionate cat.",
    status: "Adopted",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A black cat sitting by a window",
  },
  {
    id: 9,
    slug: "nori",
    name: "Nori",
    species: "Dog",
    breed: "Terrier Mix",
    age: "4 years",
    gender: "Female",
    size: "Medium",
    location: "Portland, OR",
    personality: ["Brave", "Loving", "Energetic"],
    story:
      "Nori has a big personality and a stronger-than-average bond with people. She loves going on walks, meeting new friends, and being the center of attention in a lively home.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A playful terrier mix outdoors",
  },
  {
    id: 10,
    slug: "mango",
    name: "Mango",
    species: "Cat",
    breed: "Russian Blue",
    age: "2 years",
    gender: "Male",
    size: "Medium",
    location: "Vancouver, WA",
    personality: ["Playful", "Gentle", "Observant"],
    story:
      "Mango is a sweet and curious cat who enjoys slow exploration and quiet companionship. He has a calm presence and is a lovely match for a patient home.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A Russian blue cat sitting in a room",
  },
];

export function getAnimalBySlug(slug: string) {
  return animals.find((animal) => animal.slug === slug);
}

export function getRelatedAnimals(currentSlug: string) {
  return animals.filter((animal) => animal.slug !== currentSlug).slice(0, 3);
}
