import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationMovies = ({page, count, changePage}) => {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={changePage} />
    </Stack>
  );
}