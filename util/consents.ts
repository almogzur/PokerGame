import { GameStake, GameType } from "@/types/main";

export const gameTypes : GameType[] = ["5players", "9players", "Tournament", "All"] as const;

export const GameStakeOptions :  GameStake[]  =[ 
    { min: 10, max: 20 },
    { min: 20, max: 40 },
    { min: 40, max: 60 },
    { min: 60, max: 80 },
    { min: 80, max: 100 },
    { min: 100, max: 120 },
    ]