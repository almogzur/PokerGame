import { Card, Shapes, Values } from "@/types/main";

export function generateDeck(): Card[] {
  const suits: Shapes[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const ranks: Values[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  
  const rankValues: { [key in Values]: number } = {
    "2": 2,  "3": 3,  "4": 4,  "5": 5,  "6": 6,
    "7": 7,  "8": 8,  "9": 9,  "10": 10, "J": 11,
    "Q": 12, "K": 13, "A": 14,
  };
    return suits.flatMap(suit =>
    ranks.map(rank => ({
      suit,
      rank,
      value: rankValues[rank],
      code: `${rank}${suit[0]}` // Like "10H", "AS", etc.
    }))
  );
}

export function shuffleDeck(deck: Card[]): Card[] {
  return [...deck].sort(() => Math.random() - 0.5);
}

export function dealHands(deck: Card[], numPlayers: number, cardsPerPlayer = 2): Card[][] {
  const hands: Card[][] = [];
  for (let i = 0; i < numPlayers; i++) {
    hands.push(deck.slice(i * cardsPerPlayer, (i + 1) * cardsPerPlayer));
  }
  return hands;
}

export function evaluateHand(hand: Card[]): number {
  // Example: return highest card value
  return Math.max(...hand.map(card => card.value));
}