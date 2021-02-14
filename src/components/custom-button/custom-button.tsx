  
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import './custom-button.styles.scss';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    children:string
}

const CustomButton:React.FC<Props> = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;