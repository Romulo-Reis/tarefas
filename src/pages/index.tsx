import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.css'

import heroImg from '../../public/assets/hero.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácial</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image 
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority
          />
        </div>

        <h1 className={styles.title}> 
          Sistema feito para você organizar <br/>
          seus estudos e tarefas
        </h1>
      </main>

    </div>
  )
}

export default Home
