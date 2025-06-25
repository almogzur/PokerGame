import * as z from "zod/v4";

// 1. Suits ("Shapes") as a readonly tuple
export const shapes = ["Hearts", "Diamonds", "Clubs", "Spades"] as const;
export type Shapes = typeof shapes[number];

// 2. Values for the cards
export const values = [
  "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
] as const;
export type Values = typeof values[number];

// 3. Card type and Zod schema
export type Card = {
  suit: Shapes;
  rank: Values;
  value: number; // Used for comparisons (2–14)
  code: string;  // Example: "AH" = Ace of Hearts
};

export const CardSchema = z.object({
  suit: z.enum(shapes),
  rank: z.enum(values),
  value: z.number().int().min(2).max(14),
  code: z.string().length(2).or(z.string().length(3)), // "10H" is possible!
});

// 4. GameType and schema
export const gameTypes = ["5players", "9players", "Tournament", "All"] as const;
export type GameType = typeof gameTypes[number];

// 5. GameStake and schema
export type GameStake = {
  min: number,
  max: number
} ;

export const GameStakeSchema = z.object({
  min: z.number(),
  max: z.number(),
})

// 6. Game type and schema
export type Game = {
  GameName: string;
  gameType: GameType;
  gameStake: GameStake;
  playersCount: number;
  Min: number;
  Max: number;
  GameId: string;
  Active: boolean;
  
};


