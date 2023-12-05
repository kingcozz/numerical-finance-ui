// @mui
import { Stack, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonMap({ ...other }) {
  return (
    <Stack spacing={2} {...other}>
      {[...Array(4)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          sx={{ width: 1, height: 60, borderRadius: 2 }}
        />
      ))}
    </Stack>
  );
}
