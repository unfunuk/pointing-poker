export type InputProps = {
  Button?: JSX.Element;
  label?: string;
  onValueChange?: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  readOnly?: boolean;
};
