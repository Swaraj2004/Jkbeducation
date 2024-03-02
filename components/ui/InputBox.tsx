import { Label } from './label';
import { Input, InputProps } from './input';

type InputBoxProps = {
  label: string;
  id: string;
  type: string;
};

const InputBox = ({ label, id, type }: InputBoxProps) => {
  return (
    <div className="grid w-full items-center gap-2.5">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={label} />
    </div>
  );
};

export default InputBox;
