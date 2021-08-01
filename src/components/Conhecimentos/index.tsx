import styles from './styles.module.scss';
export function Knowledge() {
  return (
    <div className={styles.container}>
      <h1 >| Conhecimentos</h1>
      <div className={styles.knowledgeBorder}>
        <ul className={styles.list}>
          <li>
            <img src="/html.svg"/>
          </li>
          <li>
            <img src="/css.svg"/>
          </li>
          <li>
            <img src="javascript.svg"/>
          </li>
          <li>
            <img src="react.svg"/>
          </li>
          <li>
            <img src="Sass.svg"/>
          </li>
          <li>
            <img src="git.svg"/>
          </li>
        </ul>
      </div>
    </div>
  );
}