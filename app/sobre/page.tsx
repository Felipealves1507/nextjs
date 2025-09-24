import Link from 'next/link'
import styles from '../page.module.css'

export default function Sobre() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre o Projeto</h1>
        <p className={styles.description}>
          Este é o trabalho final do curso SENAI, desenvolvido com Next.js.
          O projeto demonstra o uso de tecnologias modernas de desenvolvimento web.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Tecnologias Utilizadas</h2>
            <p>Next.js 14, React 18, TypeScript, CSS Modules</p>
          </div>
          
          <div className={styles.card}>
            <h2>Objetivo</h2>
            <p>Demonstrar conhecimentos adquiridos durante o curso</p>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            ← Voltar para Home
          </Link>
        </div>
      </div>
    </main>
  )
}