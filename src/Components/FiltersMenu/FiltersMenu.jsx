import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { getMoviesByGenreAsync, getMoviesByLanguageAsync,getMoviesByYearAsync } from "../../Thunks";
import { useDispatch } from "react-redux";

export const FiltersMenu = () => {
  const dispatch = useDispatch();
  const { genresList, languagesList } = useSelector((state) => state.movies);
  const [alignment, setAlignment] = React.useState("web");
  const [language, setLanguage] = React.useState("");
  const [value, setValue] = React.useState(new Date());
  let year = value.getFullYear();

  console.log(year);
  
  const getFilterByGenre = (genre) => {
    dispatch(getMoviesByGenreAsync(genre));
  };

  const getFilterByLanguage = (language) => {
    dispatch(getMoviesByLanguageAsync(language));
  };

  const getFilterByYear = (year) => {
      dispatch(getMoviesByYearAsync(year));
  };

  const handleChangeSelect = (event) => {
    setLanguage(event.target.value);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: 400, mt: 8 }}>
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
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {genresList &&
              genresList.map((genre) => (
                <ToggleButton
                  key={genre.id}
                  value={genre.name}
                  onClick={() => getFilterByGenre(genre.id)}
                >
                  {genre.name}
                </ToggleButton>
              ))}
          </ToggleButtonGroup>
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
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Release date
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                views={["year"]}
                label="Select year"
                maxDate={new Date()}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
              <Button variant="contained" onClick={()=> getFilterByYear(year)}>Search</Button>
            </Stack>
          </LocalizationProvider>
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
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Languages</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Languages"
                onChange={handleChangeSelect}
              >
                {languagesList.languages &&
                  languagesList.languages.map((langauge) => (
                    <MenuItem
                      key={langauge.iso_639_1}
                      value={langauge.english_name}
                      onClick={() => getFilterByLanguage(langauge.iso_639_1)}
                    >
                      {langauge.english_name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
