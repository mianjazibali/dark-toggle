import theme from 'styled-theming';
import styled from 'styled-components';
import style from './button.module.scss';

const buttonBackground = theme('theme', {
  light: '#000',
  dark: '#fff',
});

const textColor = theme('theme', {
  light: '#fff',
  dark: '#000',
});

const Button = styled.button`
  background-color: ${buttonBackground};
  color: ${textColor};
`;

function CustomButton() {
  return <Button className={style.button}>Click Me</Button>;
}

export default CustomButton;
