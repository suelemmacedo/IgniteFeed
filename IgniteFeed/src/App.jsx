import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
/* Todos os componentes de uma aplicação React precisam ter extensão JSX, que nada mais é que JS + XML(HTML).*/

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, cum! Molestiae inventore perspiciatis porro corrupti dolores corporis velit, officiis, reprehenderit sint ex aut libero ducimus quo aliquid hic numquam placeat."
      />
      <Post 
        author="Suelem Macedo" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, cum! Molestiae inventore perspiciatis porro corrupti dolores corporis velit, officiis, reprehenderit sint ex aut libero ducimus quo aliquid hic numquam placeat."
      />
        </main>
      </div>
      
      
    </div>
  )
}



