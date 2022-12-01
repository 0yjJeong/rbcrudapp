import React from 'react';
import MuiSelect, { SelectProps } from '@material-ui/core/Select';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';

export const SelectItem: React.FC<Omit<MenuItemProps, 'button'>> = ({
  ...rest
}) => {
  return <MenuItem {...rest} />;
};

export const Select: React.FC<SelectProps> = ({ ...rest }) => {
  return <MuiSelect {...rest} />;
};
