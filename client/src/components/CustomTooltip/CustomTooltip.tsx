import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import {Info} from '@mui/icons-material';

type TooltipProps = {
    text: string
}

const CustomTooltip: React.FC<TooltipProps> = ({text}) => {
  return (
    <Tooltip title={text}>
      <Info/>
    </Tooltip>
  );
};

export default CustomTooltip;