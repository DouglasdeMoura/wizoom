import { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from '../../styles/Input.module.css'

interface Message {
  error?: string
  warning?: string
  success?: string
  help?: string
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  messages?: Message
  state?: 'none' | 'error' | 'warning' | 'success' | 'help'
  icon?: ReactNode
  type?: string
}

const Input: FC<Props> = ({
  label,
  name,
  icon = null,
  type = 'text',
  messages,
  state = 'none',
  ...rest
}) => {
  const handleMessage = (() => {
    if (state === 'none') return

    if (messages[state])
      return <div className={`message-${state}`}>{messages[state]}</div>

    throw new Error(`There's no message configured for input's ${state} state`)
  })()

  return (
    <>
      <label className={styles.container}>
        <div className={styles.label}>{label}</div>
        <div className={styles.inputBlock}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            className={icon ? styles.inputWithIcon : styles.input}
            name={name}
            type={type}
            {...rest}
          />
        </div>
      </label>
      {handleMessage}
    </>
  )
}

export default Input
