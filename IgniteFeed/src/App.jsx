import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

/* Todos os componentes de uma aplicação React precisam ter extensão JSX, que nada mais é que JS + XML(HTML).*/


//author: {avatar_url: "", name: "", role:""}
//publishedAt: Date
//content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/suelemmacedo.png",
      name: "Suelem Macedo",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date('2023-10-31 18:04:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-10-15 12:04:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Post 
                author = { post.author}
                content = { post.content }
                publishedAt = { post.publishedAt }
              />
            )
          })}
        </main>
      </div>
      
      
    </div>
  )
}



