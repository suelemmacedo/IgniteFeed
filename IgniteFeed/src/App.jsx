import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

/* Todos os componentes de uma aplicação React precisam ter extensão JSX, que nada mais é que JS + XML(HTML).*/

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post />
        <Post />
        </main>
      </div>
      
      
    </div>
  )
}



