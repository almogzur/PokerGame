import { Box, Typography } from "@mui/material";

interface PokerTableProps {
  playerCount: 5 | 9;
}

export default function PokerTable({ playerCount }: PokerTableProps) {
 
  const players = Array.from({ length: playerCount });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        backgroundColor: "#2e7d32",
        border: "6px solid #1b5e20",
        position: "relative",
        margin: "0 auto",
      }}
    >
      {/* Dealer Text in Center */}
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Dealer
      </Typography>

      {/* Players Around Table */}
      {players.map((_, i) => {
        const angle = (360 / playerCount) * i - 90; // rotate -90 to start at top
        const radius = 45;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <Box
            key={i}
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#424242",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            P{i + 1}
          </Box>
        );
      })}
    </Box>
  );
}
