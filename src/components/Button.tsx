import './button.css'

interface IButton {
  label: string
  variant: 'primary' | 'secondary'
  isDisabled: boolean
  overideBackground?: string
}
function Button({ label, variant, isDisabled, overideBackground }: IButton) {
  return (
    <button
      className={variant}
      disabled={isDisabled}
      style={{ backgroundColor: overideBackground }}
    >
      {label}
    </button>
  )
}

export default Button
