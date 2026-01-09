
export type FlashcardCategory = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type FlashcardItem = {
    name: string;
    imageId: string;
    soundId?: string; // Optional sound effect
}

export const flashcardCategories: FlashcardCategory[] = [
    {
    title: 'Alphabet',
    description: 'Learn all the letters from A to Z.',
    href: '/flashcards/alphabet',
    icon: 'Letter',
  },
  {
    title: 'Numbers',
    description: 'Learn numbers from 1 to 20.',
    href: '/flashcards/numbers',
    icon: 'Number',
  },
  {
    title: 'Animals',
    description: 'Discover different animals from around the world.',
    href: '/flashcards/animals',
    icon: 'Animals',
  },
  {
    title: 'Fruits',
    description: 'Learn about tasty and healthy fruits.',
    href: '/flashcards/fruits',
    icon: 'Fruits',
  },
  {
    title: 'Birds',
    description: 'Explore the world of birds.',
    href: '/flashcards/birds',
    icon: 'Birds',
  },
  {
    title: 'Vegetables',
    description: 'Learn about healthy vegetables.',
    href: '/flashcards/vegetables',
    icon: 'Vegetables',
  },
  {
    title: 'Vehicles',
    description: 'Discover different modes of transport.',
    href: '/flashcards/vehicles',
    icon: 'Vehicles',
  },
  {
    title: 'Shapes',
    description: 'Learn about different shapes.',
    href: '/flashcards/shapes',
    icon: 'Shapes',
  },
  {
    title: 'Colors',
    description: 'Discover the colors of the rainbow.',
    href: '/flashcards/colors',
    icon: 'Colors',
  },
];


export const animalFlashcards: FlashcardItem[] = [
    { name: 'Lion', imageId: 'alphabet-l'},
    { name: 'Elephant', imageId: 'alphabet-e'},
    { name: 'Zebra', imageId: 'alphabet-z'},
    { name: 'Penguin', imageId: 'alphabet-p'},
    { name: 'Fox', imageId: 'char-fox'},
    { name: 'Bear', imageId: 'char-bear'},
    { name: 'Cat', imageId: 'alphabet-c'},
    { name: 'Dog', imageId: 'alphabet-d'},
    { name: 'Whale', imageId: 'alphabet-w'},
    { name: 'Octopus', imageId: 'alphabet-o'},
    { name: 'Jellyfish', imageId: 'alphabet-j'},
    { name: 'Turtle', imageId: 'alphabet-t'},
];

export const fruitFlashcards: FlashcardItem[] = [
    { name: 'Apple', imageId: 'alphabet-a'},
    { name: 'Banana', imageId: 'fruit-banana'},
    { name: 'Orange', imageId: 'fruit-orange'},
    { name: 'Strawberry', imageId: 'fruit-strawberry'},
    { name: 'Grapes', imageId: 'fruit-grapes'},
    { name: 'Watermelon', imageId: 'fruit-watermelon'},
    { name: 'Pineapple', imageId: 'fruit-pineapple'},
    { name: 'Mango', imageId: 'fruit-mango'},
];

export const birdFlashcards: FlashcardItem[] = [
    { name: 'Parrot', imageId: 'bird-parrot'},
    { name: 'Eagle', imageId: 'bird-eagle'},
    { name: 'Owl', imageId: 'char-owl'},
    { name: 'Peacock', imageId: 'bird-peacock'},
    { name: 'Toucan', imageId: 'bird-toucan'},
    { name: 'Flamingo', imageId: 'bird-flamingo'},
    { name: 'Hummingbird', imageId: 'bird-hummingbird'},
];

export const vegetableFlashcards: FlashcardItem[] = [
    { name: 'Carrot', imageId: 'veg-carrot'},
    { name: 'Broccoli', imageId: 'veg-broccoli'},
    { name: 'Tomato', imageId: 'veg-tomato'},
    { name: 'Potato', imageId: 'veg-potato'},
    { name: 'Corn', imageId: 'veg-corn'},
    { name: 'Lettuce', imageId: 'veg-lettuce'},
];

export const vehicleFlashcards: FlashcardItem[] = [
    { name: 'Car', imageId: 'vehicle-car'},
    { name: 'Bus', imageId: 'vehicle-bus'},
    { name: 'Airplane', imageId: 'vehicle-airplane'},
    { name: 'Train', imageId: 'vehicle-train'},
    { name: 'Boat', imageId: 'vehicle-boat'},
    { name: 'Helicopter', imageId: 'vehicle-helicopter'},
];

export const shapeFlashcards: FlashcardItem[] = [
    { name: 'Circle', imageId: 'shape-circle'},
    { name: 'Square', imageId: 'shape-square'},
    { name: 'Triangle', imageId: 'shape-triangle'},
    { name: 'Star', imageId: 'shape-star'},
    { name: 'Heart', imageId: 'shape-heart'},
    { name: 'Rectangle', imageId: 'shape-rectangle'},
];

export const colorFlashcards: FlashcardItem[] = [
    { name: 'Red', imageId: 'color-red'},
    { name: 'Blue', imageId: 'color-blue'},
    { name: 'Green', imageId: 'color-green'},
    { name: 'Yellow', imageId: 'color-yellow'},
    { name: 'Purple', imageId: 'color-purple'},
    { name: 'Orange', imageId: 'color-orange'},
];

export const alphabetFlashcards: FlashcardItem[] = [
    { name: 'A', imageId: 'alphabet-a' },
    { name: 'B', imageId: 'alphabet-b' },
    { name: 'C', imageId: 'alphabet-c' },
    { name: 'D', imageId: 'alphabet-d' },
    { name: 'E', imageId: 'alphabet-e' },
    { name: 'F', imageId: 'alphabet-f' },
    { name: 'G', imageId: 'alphabet-g' },
    { name: 'H', imageId: 'alphabet-h' },
    { name: 'I', imageId: 'alphabet-i' },
    { name: 'J', imageId: 'alphabet-j' },
    { name: 'K', imageId: 'alphabet-k' },
    { name: 'L', imageId: 'alphabet-l' },
    { name: 'M', imageId: 'alphabet-m' },
    { name: 'N', imageId: 'alphabet-n' },
    { name: 'O', imageId: 'alphabet-o' },
    { name: 'P', imageId: 'alphabet-p' },
    { name: 'Q', imageId: 'alphabet-q' },
    { name: 'R', imageId: 'alphabet-r' },
    { name: 'S', imageId: 'alphabet-s' },
    { name: 'T', imageId: 'alphabet-t' },
    { name: 'U', imageId: 'alphabet-u' },
    { name: 'V', imageId: 'alphabet-v' },
    { name: 'W', imageId: 'alphabet-w' },
    { name: 'X', imageId: 'alphabet-x' },
    { name: 'Y', imageId: 'alphabet-y' },
    { name: 'Z', imageId: 'alphabet-z' },
];

export const numberFlashcards: FlashcardItem[] = [
    { name: '1', imageId: 'number-1' },
    { name: '2', imageId: 'number-2' },
    { name: '3', imageId: 'number-3' },
    { name: '4', imageId: 'number-4' },
    { name: '5', imageId: 'number-5' },
    { name: '6', imageId: 'number-6' },
    { name: '7', imageId: 'number-7' },
    { name: '8', imageId: 'number-8' },
    { name: '9', imageId: 'number-9' },
    { name: '10', imageId: 'number-10' },
    { name: '11', imageId: 'number-11' },
    { name: '12', imageId: 'number-12' },
    { name: '13', imageId: 'number-13' },
    { name: '14', imageId: 'number-14' },
    { name: '15', imageId: 'number-15' },
    { name: '16', imageId: 'number-16' },
    { name: '17', imageId: 'number-17' },
    { name: '18', imageId: 'number-18' },
    { name: '19', imageId: 'number-19' },
    { name: '20', imageId: 'number-20' },
];

export const sightWords: FlashcardItem[] = [
    ...animalFlashcards,
    ...fruitFlashcards,
    ...birdFlashcards,
    ...vegetableFlashcards,
    ...vehicleFlashcards,
    ...shapeFlashcards,
];

export const shadowMatchables: FlashcardItem[] = [
    { name: 'Apple', imageId: 'alphabet-a' },
    { name: 'Ball', imageId: 'alphabet-b' },
    { name: 'Cat', imageId: 'alphabet-c' },
    { name: 'Dog', imageId: 'alphabet-d' },
    { name: 'Elephant', imageId: 'alphabet-e' },
    { name: 'Car', imageId: 'vehicle-car' },
    { name: 'Star', imageId: 'shape-star' },
    { name: 'Tree', imageId: 'shadow-tree' },
];
