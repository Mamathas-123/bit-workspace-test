import React, { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  onClick?:()=>void;
  label?:string;
};

export function Button({ children,onClick,label}: ButtonProps) {
  return (
    <div>
      <button type="button" onClick={onClick}
      style={{ padding: '15px 40px',
      fontSize: '20px',
      borderRadius: '4px',backgroundColor:'blue'}}> {label}{children}</button>
     
    </div>
  );
}
