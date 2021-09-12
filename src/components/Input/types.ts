export type InputProps = {
  Button?: JSX.Element;
  text?: string;
  setUpperValue?: any;
  // не знаю какой тип указать вместо any, чтоб не возникала ошибка в компоненте, использующем Input
};
