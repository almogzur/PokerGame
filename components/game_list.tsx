import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { red } from '@mui/material/colors';



const rows: GridRowsProp = [
  { id: 1, name: 'Data Grid', description: 'the Community version', Min:10, Max:20, players: 8, lastHand: 1 },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' ,},
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Lobby Name',
    width: 200,
    headerClassName: 'super-header',
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 200,
    headerClassName: 'super-header',
  },
  {
    field: 'Min',
    headerName: 'Min Entry',
    width: 100,
    headerClassName:'super-header'
  },
    {
    field:"Max",
    headerName:"Max Entry",
    width: 100,
    headerClassName:'super-header'
    },
  {
    field: 'players',
    headerName: 'Players',
    width: 150,
    headerClassName:'super-header'
  },
  {
    field: 'lastHand',
    headerName: 'Last Hand',
    width: 100, 
    headerClassName:'super-header'
  },

];

export default function Grid() {
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        mb: 2,
        '& .super-header': {
          backgroundColor: red[600],
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '16px',
        }, 
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu // optional: removes the 3-dot column menu
        sx={{
          color: '#fff',
          fontWeight: 'bold',
        }}
        disableAutosize
        disableColumnResize
      />
    </Box>
  );
}
