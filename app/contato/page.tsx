import Link from 'next/link'
import styles from '../page.module.css'

export default function Contato() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contato</h1>
        <p className={styles.description}>
          Entre em contato para mais informações sobre este projeto.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>📧 Email</h2>
            <p>contato@projeto-senai.com</p>
          </div>
          
          <div className={styles.card}>
            <h2>📱 Telefone</h2>
            <p>(11) 99999-9999</p>
          </div>
          
          <div className={styles.card}>
            <h2>🏢 SENAI</h2>
            <p>Trabalho Final de Curso</p>
          </div>
          
          <div className={styles.card}>
            <h2>🚀 GitHub</h2>
            <p>github.com/Felipealves1507/nextjs</p>
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