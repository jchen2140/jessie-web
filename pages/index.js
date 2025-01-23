import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.header}>Hi, I'm Jessie!</h1>
        <p className={styles.paragraph}>
          I am an undergraduate student at Princeton University studying Computer Science and minoring in Statistics and Machine Learning as well as Finance.
        </p>
        <p className={styles.paragraph}>
          I am passionate about leveraging technology for societal needs as well as using technology for fun experiences such as digital birthday cards for long distance friends and family!
        </p>
        <p className={styles.paragraph}>
          Previously, I was an Innovation Developer Intern at Blue Shield of California where I contributed to the automation of prior authorization using Da Vinci and the development of an online consolidation of member health data called Member Health Record (MHR).
        </p>
        <p className={styles.paragraph}>
          When I am not developing, I love watching older movies and TV shows (so nostalgic!), making Spotify playlists for friends, karaokeing, eating lots of yummy food, and indulging in my, very long, TBR list!
        </p>
        <p className={styles.paragraph}></p>
        <a href="/resume" className="btn">View Resume</a>
      </main>
    </>
  );
}


