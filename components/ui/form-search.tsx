'use client';
import { useState } from 'react';
import {
      TextField,
      Box,
      Container,
      InputAdornment,
      FilledInput,
      FormControl,
      InputLabel,
      Select,
      MenuItem,
      Button,
      Accordion,
      AccordionSummary,
      AccordionDetails,
} from '@mui/material';
import { BadgeDollarSign, ChevronDown, Search } from 'lucide-react';
import { SelectChangeEvent } from '@mui/material/Select';

const FormSearch = () => {
      const [month, setMonth] = useState('');
      const [sortDate, setSortDate] = useState('');
      const [category, setCategory] = useState('');
      const [place, setPlace] = useState('');

      const handleChangeMonth = (event: SelectChangeEvent) => {
            setMonth(event.target.value as string);
      };

      const handleChangeSortDate = (event: SelectChangeEvent) => {
            setSortDate(event.target.value as string);
      };

      const handleChangeCategory = (event: SelectChangeEvent) => {
            setCategory(event.target.value as string);
      };

      const handleChangePlace = (event: SelectChangeEvent) => {
            setPlace(event.target.value as string);
      };

      return (
            <Container className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h1 className="text-5xl font-bold leading-12 text-center max-sm:mt-12">
                        Where do you want to go?
                  </h1>
                  <p className="mt-2 text-base text-[#ccc] text-center">
                        Trips, experiences, and places. All in one service.
                  </p>

                  <Box
                        component="form"
                        sx={{
                              '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        className="grid grid-cols-4 max-sm:grid-cols-1 mt-12 gap-x-4"
                  >
                        <FilledInput
                              id="outlined-adornment-weight"
                              endAdornment={
                                    <InputAdornment position="end">
                                          <Search className="h-4 w-4" />
                                    </InputAdornment>
                              }
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                    'aria-label': 'weight',
                              }}
                              placeholder="Destination, city"
                              className="bg-white rounded-md col-span-1"
                        />

                        <FormControl>
                              <Select
                                    id="demo-simple-select"
                                    value={month}
                                    placeholder="Any Month"
                                    onChange={handleChangeMonth}
                                    className="rounded-md col-span-1 bg-white w-full"
                              >
                                    <MenuItem value={'January'}>
                                          January
                                    </MenuItem>
                                    <MenuItem value={'February'}>
                                          February
                                    </MenuItem>
                                    <MenuItem value={'March'}>March</MenuItem>
                                    <MenuItem value={'April'}>April</MenuItem>
                                    <MenuItem value={'May'}>May</MenuItem>
                                    <MenuItem value={'June'}>June</MenuItem>
                                    <MenuItem value={'July'}>July</MenuItem>
                                    <MenuItem value={'August'}>August</MenuItem>
                                    <MenuItem value={'September'}>
                                          September
                                    </MenuItem>
                                    <MenuItem value={'October'}>
                                          October
                                    </MenuItem>
                                    <MenuItem value={'November'}>
                                          November
                                    </MenuItem>
                                    <MenuItem value={'December'}>
                                          December
                                    </MenuItem>
                              </Select>
                        </FormControl>

                        <FormControl>
                              <Select
                                    id="demo-simple-select"
                                    value={sortDate}
                                    placeholder="Sort By Date"
                                    onChange={handleChangeSortDate}
                                    className="rounded-md col-span-1 bg-white w-full"
                              >
                                    <MenuItem value={'Sort By Date'}>
                                          Sort By Date
                                    </MenuItem>
                                    <MenuItem value={'Price Low to High'}>
                                          Price Low to High
                                    </MenuItem>
                                    <MenuItem value={'Price High to Low'}>
                                          Price High to Low
                                    </MenuItem>
                                    <MenuItem value={'Sort By Name'}>
                                          Sort By Name
                                    </MenuItem>
                                    <MenuItem value={'Sort By Popularity'}>
                                          Sort By Popularity
                                    </MenuItem>
                                    <MenuItem value={'Sort By Review Score'}>
                                          Sort By Review Score
                                    </MenuItem>
                              </Select>
                        </FormControl>

                        <Button className="bg-primary text-white col-span-1 w-full">
                              Search
                        </Button>

                        <FormControl>
                              <Select
                                    id="demo-simple-select"
                                    value={category}
                                    placeholder="All Category"
                                    onChange={handleChangeCategory}
                                    className="rounded-md col-span-1 bg-white w-full"
                              >
                                    <MenuItem value={'All Category'}>
                                          All Category
                                    </MenuItem>
                                    <MenuItem value={'Mountain'}>
                                          Mountain
                                    </MenuItem>
                                    <MenuItem value={'Rural'}>Rural</MenuItem>
                                    <MenuItem value={'Snow & Ice'}>
                                          Snow & Ice
                                    </MenuItem>
                                    <MenuItem value={'Wildlife'}>
                                          Wildlife
                                    </MenuItem>
                              </Select>
                        </FormControl>

                        <FormControl>
                              <Select
                                    id="demo-simple-select"
                                    value={place}
                                    defaultValue="Any Destinations"
                                    defaultChecked
                                    onChange={handleChangePlace}
                                    className="rounded-md col-span-1 bg-white w-full"
                              >
                                    <MenuItem value={'Any Destinations'}>
                                          Any Destinations
                                    </MenuItem>
                                    <MenuItem value={'Tokyo'}>Tokyo</MenuItem>
                                    <MenuItem value={'Seoul'}>Seoul</MenuItem>
                                    <MenuItem value={'Paris'}>Paris</MenuItem>
                                    <MenuItem value={'London'}>London</MenuItem>
                                    <MenuItem value={'Venice'}>Venice</MenuItem>
                                    <MenuItem value={'Miami'}>Miami</MenuItem>
                                    <MenuItem value={'Prague'}>Prague</MenuItem>
                                    <MenuItem value={'Hong Kong'}>
                                          Hong Kong
                                    </MenuItem>
                                    <MenuItem value={'California'}>
                                          California
                                    </MenuItem>
                                    <MenuItem value={'Santorini'}>
                                          Santorini
                                    </MenuItem>
                              </Select>
                        </FormControl>

                        <FilledInput
                              id="outlined-adornment-weight"
                              endAdornment={
                                    <InputAdornment position="end">
                                          <BadgeDollarSign className="h-4 w-4" />
                                    </InputAdornment>
                              }
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                    'aria-label': 'weight',
                              }}
                              placeholder="Max budget ex. 500"
                              className="bg-white rounded-md col-span-1"
                        />
                  </Box>
            </Container>
      );
};

export default FormSearch;
