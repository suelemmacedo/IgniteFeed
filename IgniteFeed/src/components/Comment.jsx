import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/suelemmacedo.png" alt=''/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Suelem Macedo</strong>
              <time title="14 de setembro às 05:51h" dateTime="2023-09-14 05:51">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
            <p>Muito bom Devon, parabéns!! 👏👏 </p>
        </div>
      
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}