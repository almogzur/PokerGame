import { Button, Stack as Flex} from "@mui/material";
import Slider from '@/components/c_slider'
import { GameStake } from "@/types/main";
import { gameTypes } from '@/util/consents';

type GameFiltersPropsType = {
    gameStake?: GameStake
} 

export default function GamesFilters( props: GameFiltersPropsType) {

  const selectGameType = (  e : React.MouseEvent<HTMLButtonElement>) => {}

 return (   
    <Flex  justifyContent={"center"} m={3} >
         <Flex direction={"row"}  justifyContent={"center"} >
            <Slider />
         </Flex>
         <Flex direction={"row"} justifyContent={"center"}>
           {gameTypes.map((gameType) => 
                  <Button
                   key={gameType}
                   onClick={selectGameType}
                   sx={{mr:1}}
                   >
                    {gameType}
                </Button>
           )}
         </Flex>
    </Flex>
  )
}



