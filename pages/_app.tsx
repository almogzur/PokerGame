import '@/styles/globals.css'
import { createTheme , ThemeProvider} from '@mui/material';
import { blue, red } from '@mui/material/colors';
import type { AppProps } from "next/app";

const theme  = createTheme({    
    direction:"rtl",
    palette:{
      primary:{main:blue[700]},
      secondary:{main:"#fe2769"},
      warning:{main:"#fdb931"},
      info:{main:"#8e569f"}
    }, 
    components: {
      MuiTypography:{
        defaultProps:{},
        styleOverrides:{
          root:{color:"black",}
        }
        
      },
      MuiInputBase:{
          defaultProps:{},
          styleOverrides:{
            root:{}
          }
        },
        // when in form-control
        MuiInputLabel:{
          defaultProps:{},
          styleOverrides:{
            root:{},
          }
        },
        MuiFormControl:{
          defaultProps:{},
          styleOverrides:{
          root:{}
        }},
        MuiOutlinedInput:{
         defaultProps:{notched:false},
         styleOverrides:{
           root:{  },    
         }
       },
       MuiStack:{
        styleOverrides:{
          root:{
           direction:"rtl"
          }
        }
       },
       MuiSelect:{
        defaultProps:{},
        styleOverrides:{
          root:{          
          }
        }
       },
       MuiMenuItem:{
         defaultProps:{},
        styleOverrides:{
          root:{
            direction:"rtl",
          }
        },

       },
       MuiButton:{
        defaultProps:{ variant:'contained'},
        styleOverrides:{
          root:{
            fontSize:"1em",
            fontWeight:700,
            boxShadow:"none",
            borderRadius:12,
            p:0,
            background:red[600],
            color:"black"
          },
    
        }
       },
    },
  
   },  
)


export default function App({ Component, pageProps }: AppProps) {
  return  <ThemeProvider theme={theme}>
   <Component {...pageProps} />;
   </ThemeProvider>
   
}
