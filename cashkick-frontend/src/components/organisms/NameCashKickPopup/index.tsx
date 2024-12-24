import React, { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import InputText from '../../atoms/TextBox';

interface NameCashKickPopupProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (cashKickName: string) => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: '8px',
    padding: theme.spacing(2),
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
}));

const NameCashKickPopup: React.FC<NameCashKickPopupProps> = ({ open, onClose, onSubmit }) => {
  const [cashKickName, setCashKickName] = useState<string>('');

  const handleSubmit = () => {
    if (cashKickName.trim()) {
      onSubmit(cashKickName.trim());
      setCashKickName('');
      onClose();
    }
  };

  return (
    <StyledDialog open={open} onClose={onClose} aria-labelledby="name-cash-kick-dialog">
      <DialogTitle>
        <Typography variant="h6" text="Name your cash kick" />
        <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" text="Add a name to identify your cash kick" />
        <InputText
          placeholder="Ex: marketing expenses"
          value={cashKickName}
          onChange={(e) => setCashKickName(e)}
        />
        <ButtonContainer>
          <ButtonComponent
            propVariant="outlined"
            onClickEvent={onClose}
            cssDesign={{ color: '#FFFFFF', borderColor: '#A5A5A6' }}
            buttonText='Cancel'
          />
          <ButtonComponent
            propVariant="contained"
            onClickEvent={handleSubmit}
            cssDesign={{ backgroundColor: '#8C52FF', color: '#FFFFFF' }}
            buttonText='Create Cash Kick'
          />
        </ButtonContainer>
      </DialogContent>
    </StyledDialog>
  );
};

export default NameCashKickPopup;
