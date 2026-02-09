import React from 'react'
import './Button.css'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  disabled?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant}${disabled ? ' btn-disabled' : ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
