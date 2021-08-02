import styles from './styles.module.scss';
import Image from 'next/image';
export function Knowledge() {
  return (
    <div className={styles.container}>
      <h1 >| Conhecimentos</h1>
      <div className={styles.knowledgeBorder}>
        <ul >
          <li className={styles.list}>
            <Image src="/html.svg" width="50px" height="50px"/>
            <span>HTML</span>
          </li>
          <li className={styles.list}>
            <Image src="/css.svg" width="50px" height="50px"/>
            <span>CSS</span>
          </li>
          <li className={styles.list}>
            <Image src="/javascript.svg" width="50px" height="50px"/>
            <span>Javacript</span>
          </li>
          <li className={styles.list}>
            <Image src="/react.svg" width="50px" height="50px"/>
            <span>React</span>
          </li>
          <li className={styles.list}>
            <Image src="/Sass.svg" width="50px" height="50px"/>
            <span>Sass</span>
          </li>
          <li className={styles.list}>
            <Image src="/git.svg" width="50px" height="50px"/>
            <span>Git</span>
          </li>
        </ul>
      </div>
    </div>
  );
}