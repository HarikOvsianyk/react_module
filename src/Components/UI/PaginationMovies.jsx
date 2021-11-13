import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationMovies = ({page, count, changePage}) => {
/*   const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  }; */

  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={changePage} />
    </Stack>
  );
}