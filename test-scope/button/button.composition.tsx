import { Button } from './button';

export const BasicButton = () => {
  return (
    <Button  onClick={()=>alert("click me")}>hello world!</Button>
  );
}
