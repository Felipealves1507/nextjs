import Link from 'next/link'
import styles from '../page.module.css'

export default function Teste() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Página de Teste</h1>
        <p className={styles.description}>
          Esta página foi criada para testar a funcionalidade do Next.js.
          Aqui você pode verificar se a aplicação está funcionando corretamente.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>✅ Teste de Roteamento</h2>
            <p>O sistema de roteamento do Next.js está funcionando!</p>
          </div>
          
          <div className={styles.card}>
            <h2>✅ Teste de Componentes</h2>
            <p>Os componentes React estão renderizando corretamente!</p>
          </div>
          
          <div className={styles.card}>
            <h2>✅ Teste de Estilos</h2>
            <p>Os CSS Modules estão aplicando os estilos adequadamente!</p>
          </div>
          
          <div className={styles.card}>
            <h2>✅ Teste de TypeScript</h2>
            <p>O TypeScript está compilando sem erros!</p>
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