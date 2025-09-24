import Link from 'next/link'
import styles from '../page.module.css'

export default function Projetos() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Projetos</h1>
        <p className={styles.description}>
          Conheça os projetos desenvolvidos durante o curso SENAI.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>🌐 Site Institucional</h2>
            <p>Desenvolvimento de um site institucional com HTML, CSS e JavaScript</p>
          </div>
          
          <div className={styles.card}>
            <h2>⚛️ Aplicação React</h2>
            <p>Sistema de gerenciamento construído com React e componentes reutilizáveis</p>
          </div>
          
          <div className={styles.card}>
            <h2>🚀 Next.js App</h2>
            <p>Esta aplicação - projeto final usando Next.js e TypeScript</p>
          </div>
          
          <div className={styles.card}>
            <h2>📱 App Mobile</h2>
            <p>Aplicativo móvel desenvolvido com React Native (em desenvolvimento)</p>
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