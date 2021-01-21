import Link from 'next/link'
import { FC } from 'react'
import styles from '../styles/Login.module.css'
import { useForm } from 'react-hook-form'
import Input from '../components/Input/Input'
import Email from '../components/Icons/Email'
import Lock from '../components/Icons/Lock'
import Button from '../components/Button/Button'
import User from '../components/Icons/User'
import Arrow from '../components/Icons/Arrow'

const Login: FC = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => console.log(data)

  const passwordMessages = {
    error: 'Senha incorreta',
    warning: 'Verifique sua senha e tente novamente',
    success: 'Senha correta',
    help: 'Digite sua senha',
  }

  return (
    <div className={styles.container}>
      <div className={styles.emptySpace}></div>
      <div className={styles.login}>
        <div className={styles.logo}></div>
        <h1>Membros Wizoom</h1>
        <p>Faça o seu login para entrar na Wizoom</p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Seu email"
            name="email"
            type="text"
            placeholder="seu.email@email.com"
            icon={<Email width="1.6rem" height="1.6rem" />}
          />
          <Input
            label="Sua senha"
            name="senha"
            type="password"
            placeholder="suasenha123"
            icon={<Lock width="1.6rem" height="1.6rem" />}
          />
          <Button icon={<Arrow width="1.6rem" height="1.6rem" />}>
            Entrar na minha Conta
          </Button>
        </form>
        <div className={styles.footerLinks}>
          <p>
            <User width="1.6rem" height="1.6rem" />{' '}
            <span>
              Ainda não é membro?{' '}
              <Link href="/register">
                <a className={styles.facaParte}>Faça parte</a>
              </Link>
            </span>
          </p>
          <p>
            <Lock width="1.6rem" height="1.6rem" />{' '}
            <Link href="/recover-password">
              <a className={styles.recoverPassword}>Esqueci minha senha</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
