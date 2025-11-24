import { Bookmark } from '@/database/entities/bookmark.entity';

// Type for seeding data - based on Bookmark entity
export type BookmarkSeedData = Omit<
  Partial<Bookmark>,
  'id' | 'user' | 'article' | 'createdAt'
> & {
  userId: number;
  articleId: number;
};

export const bookmarksData: BookmarkSeedData[] = [
  // Admin user bookmarks (userId: 1)
  {
    userId: 1,
    articleId: 1, // AI Revolution article
  },
  {
    userId: 1,
    articleId: 5, // Quantum Computing article
  },
  {
    userId: 1,
    articleId: 7, // Space Mission article
  },
  {
    userId: 1,
    articleId: 10, // Electric Vehicle Battery article
  },

  // User 2 bookmarks - more varied interests
  {
    userId: 2,
    articleId: 2, // Climate Change article
  },
  {
    userId: 2,
    articleId: 4, // Olympic Champion article
  },
  {
    userId: 2,
    articleId: 8, // Mental Health Initiative article
  },
  {
    userId: 2,
    articleId: 16, // Vaccine Development article
  },
];
