import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSelector } from "react-redux";

export const FiltersMenu = () => {
    const {genresList} = useSelector(state=> state.movies);
    console.log(genresList);
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: 300, mt: 8 }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChangePanel("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Genres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              sx={{display:'flex', flexWrap:'wrap'}}
            >
              {genresList && genresList.map(genre => <ToggleButton key={genre.id} value={genre.name}>{genre.name}</ToggleButton>)}

            </ToggleButtonGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChangePanel("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Release date</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              sx={{display:'flex', flexDirection:'column'}}
            >
              <ToggleButton value="2000s">2000s</ToggleButton>
              <ToggleButton value="2010s">2010s</ToggleButton>
              <ToggleButton value="2020s">2020s</ToggleButton>
            </ToggleButtonGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChangePanel("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Languages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              sx={{display:'flex', flexDirection:'column'}}
            >
              <ToggleButton value="English">English</ToggleButton>
              <ToggleButton value="French">French</ToggleButton>
              <ToggleButton value="Italian">Italian</ToggleButton>
            </ToggleButtonGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
