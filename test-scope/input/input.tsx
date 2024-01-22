import React, { ReactNode } from 'react';
import {Button} from '@mamathas/task-scope.button'

export type InputProps = {
  children?: ReactNode;
};

export function Input({ children }: InputProps) {
  return (
    <div>
      <Button>  {children}</Button>
    
    </div>
  );
}
