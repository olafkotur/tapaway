export interface IPlayerData {
  tapPoints: number;
  gamesPoints: number;
}

export interface IGameInfo {
  type: string;
  opponentName: string;
  taskName: string;
  pointsAwarded: number;
}

export interface IGuessData {
  value: string;
  isLiked: boolean;
};

export interface IChallenge {
  name: string;
  points: number;
}