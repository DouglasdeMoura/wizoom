import { FC, ReactNode } from 'react'
import styles from '../../styles/Wrapper.module.css'

type Props = {
  children: ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
