import React from 'react';
import { Box, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';

export interface CashKickCardProps {
  title: string;
  description: string; 
  amount: string; 
  buttonText: string;
  onButtonClick: () => void;
}

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  textAlign: 'start',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '250px'
}));

const CashKickCard: React.FC<CashKickCardProps> = ({
  title,
  description,
  amount,
  buttonText,
  onButtonClick,
}) => {
  const formattedDescription = description.replace('{amount}', amount);

  return (
    <CardContainer>
      <Typography variant="h2" text={title} />
      <Typography variant="h3" text={formattedDescription}/>
      <Button
        propVariant="contained"
        onClickEvent={onButtonClick}
        buttonText={buttonText}
        type="contained"
      />
    </CardContainer>
  );
};

export default CashKickCard;
