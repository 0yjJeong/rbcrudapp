import React from 'react';
import MuiInput, { InputProps } from '@material-ui/core/Input';
import MuiTextarea, {
  TextareaAutosizeProps,
} from '@material-ui/core/TextareaAutosize';

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <MuiInput {...rest} />;
};

export const Textarea: React.FC<TextareaAutosizeProps> = ({ ...rest }) => {
  return <MuiTextarea {...rest} />;
};
