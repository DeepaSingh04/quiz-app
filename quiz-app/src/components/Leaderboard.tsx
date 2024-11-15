import React from 'react';

interface LeaderboardEntry {
  name: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const leaderboardData: LeaderboardEntry[] = JSON.parse(
    localStorage.getItem('leaderboard') || '[]'
  );

  return (
    <div>
      <h1>Leaderboard</h1>
      {leaderboardData.length === 0 ? (
        <p>No results yet!</p>
      ) : (
        <ul>
          {leaderboardData
            .sort((a, b) => b.score - a.score)
            .map((entry, index) => (
              <li key={index}>
                {index + 1}. {entry.name} - {entry.score} points
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Leaderboard;
