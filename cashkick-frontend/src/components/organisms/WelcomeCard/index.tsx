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

const styles = {
      title: {
        fontWeight: 'bold', 
        marginBottom: '16px'
      },
      description: {
        marginBottom: '8px'
      },
      descriptionAmount: {
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: '16px',
      }
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
        <Typography variant="h4" cssDesign={styles.title} text={title} />
        <Typography variant="body1" cssDesign={styles.description} text={description} />
        <Typography variant="h5" cssDesign={styles.descriptionAmount} text={amount} />
      <Button
        propVariant="outlined"
        onClickEvent={onButtonClick}
        buttonText='Learn More'
        cssDesign={{
            borderColor: '#FFFFFF', 
            color: '#FFFFFF', 
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            borderRadius: '12px',
        }}
      />
      </ContentContainer>
    </CardContainer>
  );
};

export default WelcomeCard;
