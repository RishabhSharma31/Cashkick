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

const styles = {
  button: {
    width: '100%',
    borderRadius: '8px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
    marginRight: '80px',
    weight: 600,
    color: '#FFFFFF',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#A5A5A6',
  },
};

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
      <Typography variant="h5" text={title} cssDesign={styles.title} />
      <Typography variant="body2" text={formattedDescription} cssDesign={styles.description} />
      <Button
        propVariant="contained"
        onClickEvent={onButtonClick}
        buttonText={buttonText}
        cssDesign={styles.button}
      />
    </CardContainer>
  );
};

export default CashKickCard;
