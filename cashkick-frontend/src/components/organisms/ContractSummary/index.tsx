import React from 'react';
import { Box, Slider, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';

export interface SummaryCardProps {
  term: string;
  selectedContracts: number;
  sliderValue: number;
  maxAmount: string;
  payBackAmount: string;
  ratePercentage: string;
  rateAmount: string;
  totalPayout: string;
  onSliderChange: (value: number) => void;
  onReset: () => void;
  onReview: () => void;
}

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  color: '#FFFFFF',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
}));

const LabelBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '4px',
});

const SliderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const Divider = styled('hr')({
  border: 'none',
  borderTop: '1px solid #333',
  margin: '8px 0',
});

const styles = {
    labelText: {
        color: '#A5A5A6'
    },
    valueText: {
        fontWeight: 'bold'
    }
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  term,
  selectedContracts,
  sliderValue,
  maxAmount,
  payBackAmount,
  ratePercentage,
  rateAmount,
  totalPayout,
  onSliderChange,
  onReset,
  onReview,
}) => {
  return (
    <CardContainer>
      <Typography variant="h6" text='Summary' cssDesign={styles.valueText} />
      <LabelBox>
        <Typography variant="body2" text='Term' cssDesign={styles.labelText} />
        <Typography variant="body2" text={term} cssDesign={styles.valueText} />
      </LabelBox>
      <LabelBox>
        <Typography variant="body2" text='Selected contracts' cssDesign={styles.labelText} />
        <Typography variant="body2" text={`${selectedContracts}`} cssDesign={styles.valueText} />
      </LabelBox>
      <LabelBox>
        <Typography variant="body2" text='Slide to autoselect' cssDesign={styles.labelText} />
        <ButtonComponent
          propVariant="outlined"
          cssDesign={{ color: '#FFFFFF', borderColor: '#A5A5A6' }}
          onClickEvent={onReset}
          buttonText='Reset'
        />
      </LabelBox>
      <SliderContainer>
        <Slider
          value={sliderValue}
          onChange={(e, value) => onSliderChange(value as number)}
          aria-label="Auto-select Slider"
          sx={{
            color: '#8C52FF',
          }}
        />
      </SliderContainer>
      <Typography variant="body2" cssDesign={styles.labelText} text={`${sliderValue.toFixed(2)} selected of ${maxAmount}`} />
      <LabelBox>
        <Typography variant="body2" text='Pay back amount' cssDesign={styles.labelText} />
        <Typography variant="body2" text={payBackAmount} cssDesign={styles.valueText} />
      </LabelBox>
      <LabelBox>
        <Typography variant="body2" text='Rate %' cssDesign={styles.labelText} />
        <Typography variant="body2" cssDesign={styles.valueText} text={`(${ratePercentage}) ${rateAmount}`} />
      </LabelBox>
      <Divider />
      <LabelBox>
        <Typography variant="body2" text='Total Payout' cssDesign={styles.labelText} />
        <Typography variant="body2" text={totalPayout} cssDesign={styles.valueText} />
      </LabelBox>
      <ButtonComponent
        propVariant="contained"
        onClickEvent={onReview}
        buttonText="Review Your Credit"
      />
    </CardContainer>
  );
};

export default SummaryCard;
