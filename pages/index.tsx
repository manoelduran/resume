import React from "react";
import { VscGithubInverted } from 'react-icons/vsc';
import { ImLinkedin } from 'react-icons/im';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Hello! How you doing? I'm building my new portfolio.</p>
        <p>Please, feel free to get in touch through any way you prefer:</p>
        <p>You can contact me through my e-mail:<a href="mailto:manoel.duran@hotmail.com">manoel.duran@hotmail.com</a></p>
        <p>Or even on any social media platform:</p>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/manoelduran">
          <VscGithubInverted />
        </a>
        <a href="https://www.linkedin.com/in/manoel-duran-63aaa0105/">
          <ImLinkedin />
        </a>
      </div >
    </div >
  )
}
