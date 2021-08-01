import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { ImLinkedin } from 'react-icons/im';
export function SideBar() {
  return (
    <div className={styles.container}>
      <section className={styles.contact}>
        <img src="/manoelduran.jpeg" />
        <h1>Manoel Duran</h1>
        <p>Software Developer</p>
      </section>
      <section className={styles.links}>
        <a href="https://github.com/manoelduran">
          <VscGithubInverted />
        </a>
        <a href="https://www.linkedin.com/in/manoel-duran-63aaa0105/">
          <ImLinkedin />
        </a>
      </section>
    </div>
  );
}