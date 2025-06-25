import Head from "next/head";
import { Container, Typography, Box } from "@mui/material";
import { useState } from "react";
import GamesFilters from "@/components/games_filters";
import GameList from "@/components/game_list";

import { GameStake, GameType } from "@/types/main";

// getSeverProps from Mongo Db holding Games Data 
// for dev im using Moke Data 
 
export default function Home( ){

  const [ tableFiltersState , setTableFiltersState] = useState<{  
    gameType: GameType
    gameStake: GameStake
}>()


 return (
   <>
      <Head>
        <title>Poker</title>
        <meta name="description" content="Development Poker Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        sx={{
          backgroundColor: "#121212",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">

          <Typography sx={{color: "#fff", }} mt={3} variant="h2"  gutterBottom>
            ♠️ Welcome to Poker! ♥️
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 , color:"#fff" }}>
            Ready to play Texas Hold’em? Shuffle up and deal!
          </Typography>

          <GamesFilters  />
          
          <GameList />

        </Container>

      </Box>
    </>
  );
}