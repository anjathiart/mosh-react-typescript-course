const allowedColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as const;

type ButtonColor = typeof allowedColors[number];

import styles from './Button.module.css';

interface ButtonProps {
    color?: ButtonColor;
    children: string;
    onClick: () => void;
}

const Button = ({ color = 'secondary', children, onClick }: ButtonProps) => {
    return <button className={[styles.btn, styles[`btn-${color}`]].join(' ')} onClick={onClick}>{children}</button>
}

export default Button;