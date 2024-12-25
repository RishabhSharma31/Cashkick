import React from 'react';
import { Box, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import BackgroundSVG from './bkg.svg';

export interface WelcomeCardProps {
  title: string;
  description: string;
  amount: string;
  onButtonClick: () => void;
}

const CardContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundImage: `url(${BackgroundSVG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '8px',
    padding: '24px',
    color: '#FFFFFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    minHeight: '250px',
  }));

  const ContentContainer = styled(Box)(({ theme }) => ({
    maxWidth: '50%',
  }));

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  title,
  description,
  amount,
  onButtonClick,
}) => {
  return (
    <CardContainer>
      <ContentContainer>
        <Typography variant="h2" text={title} />
        <Typography variant="h3" text={description} />
        <Typography variant="h2" text={amount} />
      <Button
        propVariant="outlined"
        onClickEvent={onButtonClick}
        buttonText='Learn More'
        type='outline'
      />
      </ContentContainer>
    </CardContainer>
  );
};

export default WelcomeCard;
