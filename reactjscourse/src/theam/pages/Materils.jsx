import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export default function AccordionExpandDefault() {
const label = { inputProps: { "aria-label": "Switch demo" } };
const [isOn, setIsOn] = useState(false);


  return (
    <>
      <Container>
        <div>
          
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails     sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
            
    <Switch
              {...label}
              checked={isOn}
              onChange={(e) => setIsOn(e.target.checked)}
            />
            </AccordionDetails>
          </Accordion>
        </div>

    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#ff7b00',
           },
        },
      }}
    >
      <Box
            sx={{
              width: "100%",
              height: isOn ? "250px" : "100px",
              borderRadius: 1,
              bgcolor: "primary.main",
              transition: "height 0.4s ease",
              margin :"15px 0",
              textAlign:"center",
            }}

          >
is test        
  </Box>
        </ThemeProvider>
      </Container>
    </>
  );
}
