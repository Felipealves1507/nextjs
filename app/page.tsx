import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Bem-vindo ao Next.js
        </h1>
        <p className={styles.description}>
          Trabalho Final do SENAI - Teste da aplicação Next.js
        </p>
        
        <div className={styles.grid}>
          <a href="/sobre" className={styles.card}>
            <h2>Sobre &rarr;</h2>
            <p>Saiba mais sobre este projeto.</p>
          </a>
          
          <a href="/contato" className={styles.card}>
            <h2>Contato &rarr;</h2>
            <p>Entre em contato conosco.</p>
          </a>
          
          <a href="/projetos" className={styles.card}>
            <h2>Projetos &rarr;</h2>
            <p>Veja nossos projetos em desenvolvimento.</p>
          </a>
          
          <a href="/teste" className={styles.card}>
            <h2>Teste &rarr;</h2>
            <p>Página de teste da funcionalidade.</p>
          </a>
        </div>
      </div>
    </main>
  )
}