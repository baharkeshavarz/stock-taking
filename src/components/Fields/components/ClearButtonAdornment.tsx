import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { FC } from 'react';

interface ClearButtonAdornmentProps {
  onChange: (value: any) => void;
  sx?: any;
}

const ClearButtonAdornment: FC<ClearButtonAdornmentProps> = ({
  onChange,
  sx = {},
}) => {
  const onClear = () => {
    onChange(null);
  };
  return (
    <IconButton 
      tabIndex={-1} 
      size="small" 
      onClick={onClear} 
      sx={{
        border: 'none',
        outline: 'none',
        '&:focus': {
          outline: 'none',
          border: 'none',
        },
        '&:hover': {
          border: 'none',
        },
        ...sx
      }}
    >
      <Close
        sx={{
          fontSize: 14,
        }}
        fontSize="small"
        color="inherit"
      />
    </IconButton>
  );
};

export default ClearButtonAdornment;
