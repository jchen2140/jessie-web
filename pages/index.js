import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar />
      <main>
        <h1>Hi, I'm Jessie!</h1>
        <p>I am an undergraduate student at Princeton University studying Computer Science and minoring in Statistics and Machine Learning as well as Finance.</p>
        <p>I am passionate about leveraging technology for societal needs as well as using technology for fun experiences such as digital birthday cards for long distance friends and family!</p>
        <p>Previously, I was an Innovation Developer Intern at Blue Shield of California where I contributed to the automation of prior authorization using Da Vinci and the development of an online consolidation of member health data called Member Health Record (MHR).</p>
        <p>When I am not developing, I love watching older movies and TV shows (so nostalgic!), making Spotify playlists for friends, karaoking, eating lots of yummy food, and indulging in my, very long, TBR list! Let's connect!</p>
        <a href="/resume" className="btn">View Resume</a>
      </main>
    </>
  );
}
