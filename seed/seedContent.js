const SEED_TOPICS = [
  {
    name: "Angry",
    slug: "angry",
    description: "Guidance for moments of anger",
    version: "en-kjv",
    refs: [
      { book: "proverbs", chapter: 14, verse: 29 },
      { book: "matthew", chapter: 5, verse: 22 },
      { book: "ephesians", chapter: 4, verse: 26 },
    ],
  },

  {
    name: "Sad",
    slug: "sad",
    description: "Comfort during sadness",
    version: "en-kjv",
    refs: [
      { book: "nehemiah", chapter: 8, verse: 10 },
      { book: "psalms", chapter: 62, verse: 1 },
      { book: "romans", chapter: 12, verse: 5 },
    ],
  },

  {
    name: "Grief",
    slug: "grief",
    description: "Support in times of grief",
    version: "en-kjv",
    refs: [
      { book: "nehemiah", chapter: 1, verse: 1 },
      { book: "john", chapter: 16, verse: 33 },
      { book: "psalms", chapter: 31, verse: 10 },
    ],
  },

  {
    name: "Acceptance",
    slug: "acceptance",
    description: "Finding peace and acceptance",
    version: "en-kjv",
    refs: [
      { book: "john", chapter: 17, verse: 9 },
      { book: "romans", chapter: 8, verse: 1 },
      { book: "ephesians", chapter: 1, verse: 3 },
    ],
  },

  {
    name: "Justice",
    slug: "justice",
    description: "Scripture focused on justice",
    version: "en-kjv",
    refs: [
      { book: "deuteronomy", chapter: 16, verse: 19 },
      { book: "isaiah", chapter: 42, verse: 3 },
      { book: "daniel", chapter: 9, verse: 14 },
    ],
  },

  {
    name: "Hospitality",
    slug: "hospitality",
    description: "Encouragement toward hospitality",
    version: "en-kjv",
    refs: [
      { book: "luke", chapter: 10, verse: 7 },
      { book: "romans", chapter: 12, verse: 13 },
      { book: "hebrews", chapter: 13, verse: 2 },
    ],
  },

  {
    name: "Judgementalism",
    slug: "judgementalism",
    description: "Warnings against judgment",
    version: "en-kjv",
    refs: [
      { book: "isaiah", chapter: 11, verse: 3 },
      { book: "matthew", chapter: 7, verse: 1 },
      { book: "james", chapter: 5, verse: 9 },
    ],
  },

  {
    name: "Parenting",
    slug: "parenting",
    description: "Guidance for raising children",
    version: "en-kjv",
    refs: [
      { book: "proverbs", chapter: 22, verse: 6 },
      { book: "deuteronomy", chapter: 6, verse: 6 },
      { book: "ephesians", chapter: 6, verse: 4 },
    ],
  },

  {
    name: "Money",
    slug: "money",
    description: "Wisdom about money and possessions",
    version: "en-kjv",
    refs: [
      { book: "matthew", chapter: 6, verse: 19 },
      { book: "mark", chapter: 10, verse: 23 },
      { book: "psalms", chapter: 119, verse: 37 },
    ],
  },

  {
    name: "Stressed",
    slug: "stressed",
    description: "Relief from stress and overwhelm",
    version: "en-kjv",
    refs: [
      { book: "exodus", chapter: 18, verse: 13 },
      { book: "matthew", chapter: 11, verse: 28 },
      { book: "mark", chapter: 6, verse: 31 },
    ],
  },
];

module.exports = { SEED_TOPICS };
