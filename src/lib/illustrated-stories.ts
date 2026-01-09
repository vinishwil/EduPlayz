
export type IllustratedStory = {
  title: string;
  pages: {
    paragraph: string;
    imageId: string;
  }[];
};

export const illustratedStories: IllustratedStory[] = [
  {
    title: "The Little Bear's Big Adventure",
    pages: [
      {
        paragraph: "Once upon a time, in a big green forest, lived a little bear named Barnaby. Barnaby loved to explore. One sunny morning, he decided to follow a pretty blue butterfly.",
        imageId: "story-bear-1"
      },
      {
        paragraph: "The butterfly fluttered over a sparkling stream and through a field of colorful flowers. Barnaby happily followed, until he realized he didn't know where he was. He was a little lost!",
        imageId: "story-bear-2"
      },
      {
        paragraph: "Just then, he heard a friendly 'Hoo hoo!' from a tree above. It was Professor Owl! 'Are you lost, little one?' the owl asked kindly. Barnaby nodded. Professor Owl smiled and said, 'Follow me, I know the way back.' He led Barnaby all the way home, just in time for dinner.",
        imageId: "story-bear-3"
      },
    ],
  },
  {
    title: 'The Fox Who Lost His Socks',
    pages: [
      {
        paragraph: 'Felix the fox woke up one morning and couldn’t find his favorite blue socks. "Oh dear!" he cried. "I can\'t go out to play without my lucky socks!"',
        imageId: 'story-fox-1'
      },
      {
        paragraph: 'He looked under his bed. No socks. He looked in the kitchen. No socks. He even looked in the cookie jar, but only found crumbs.',
        imageId: 'story-fox-2'
      },
      {
        paragraph: 'Sadly, he went outside and saw his friend, Squeaky the squirrel, wearing two tiny blue hats. They were his socks! They both laughed and laughed, and Felix decided his feet felt pretty good without socks after all.',
        imageId: 'story-fox-3'
      },
    ],
  },
];
