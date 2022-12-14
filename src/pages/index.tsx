import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

export default function Home(props: any) {
  const { count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <div className={styles.wrapper}>

        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item: any) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

      </div>
      <Main page="index" />
      <Footer />
    </div>
  );
}
