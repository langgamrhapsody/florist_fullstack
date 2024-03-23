interface Leaderboard {
  heads: string[];
  data: LeaderboardData[];
}

type LeaderboardData = {
  id: number;
  name: string;
  tier: number;
  points: number;
};

interface FloristReview {
  author: string;
  rating: string;
  title: string;
  review: string;
}
