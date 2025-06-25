import { Button } from "@mui/material";


type OpenNewWindowButtonProps = {
    url: string
    style?: React.CSSProperties
    gameId:string

}

const OpenNewWindowButton = (props : OpenNewWindowButtonProps) => {

    const handleOpenWindow = () => {
        // The URL to open in the new window
        ; // Or an external URL like 'https://www.example.com'

        // Window features (optional) - control size, position, etc.
        const features = 'width=800,height=600,left=100,top=100,popup=yes';

        window.open(props.url, '_blank', features);
    };

    return (
        <Button
            variant="contained"
            size="large"
            // Replace with router.push('/game') or game state logic
            onClick={handleOpenWindow}
        >
            Start Game
        </Button>

    );
};

export default OpenNewWindowButton;