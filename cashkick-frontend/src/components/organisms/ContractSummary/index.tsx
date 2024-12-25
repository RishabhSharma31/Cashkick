import React from 'react';
import { Box, Slider, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import theme from '../../../../themes';

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
      <Typography variant="h2" text='Summary'/>
      <LabelBox>
        <Typography variant="h3" text='Term'/>
        <Typography variant="h4" text={term} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text='Selected contracts' />
        <Typography variant="h4" text={`${selectedContracts}`} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text='Slide to autoselect'/>
        <ButtonComponent
          propVariant="outlined"
          onClickEvent={onReset}
          buttonText='Reset'
          type='reset'
        />
      </LabelBox>
      <SliderContainer>
        <Slider
          value={sliderValue}
          onChange={(e, value) => onSliderChange(value as number)}
          aria-label="Auto-select Slider"
          sx={{
            color: theme.palette.secondary.main,
          }}
        />
      </SliderContainer>
      <Typography variant="h3" text={`${sliderValue.toFixed(2)} selected of ${maxAmount}`} />
      <LabelBox>
        <Typography variant="h3" text='Pay back amount' />
        <Typography variant="h4" text={payBackAmount} />
      </LabelBox>
      <LabelBox>
        <Typography variant="h3" text='Rate %' />
        <Typography variant="h4" text={`(${ratePercentage}) ${rateAmount}`} />
      </LabelBox>
      <Divider />
      <LabelBox>
        <Typography variant="h3" text='Total Payout' />
        <Typography variant="h4" text={totalPayout} />
      </LabelBox>
      <ButtonComponent
        propVariant="contained"
        onClickEvent={onReview}
        buttonText="Review Your Credit"
        type='contained'
      />
    </CardContainer>
  );
};

export default SummaryCard;
