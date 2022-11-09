import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
export default function Index() {
  return (
    <>
      <Head>
        <title>Sagor | Full Stack Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
