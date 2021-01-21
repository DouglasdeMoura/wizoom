import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from '../../styles/Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  icon?: ReactNode
}

const Button: FC<Props> = ({ loading, children, disabled, icon, ...rest }) => {
  return (
    <button disabled={disabled || loading} className={styles.button} {...rest}>
      <span className={styles.buttonLabel}>
        {loading ? 'Carregando...' : children}
      </span>
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
    </button>
  )
}

export default Button
