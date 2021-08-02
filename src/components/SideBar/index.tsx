import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { ImLinkedin } from 'react-icons/im';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
export function SideBar() {
  return (
    <div className={styles.container}>
      <section className={styles.contact}>
        <Image src="/manoelduran.jpeg" width="150px" height="150px" />
        <h1>Manoel Duran</h1>
        <p>Software Developer</p>
      </section>
      <section className={styles.links}>
        <Link href="https://github.com/manoelduran">
          <a>
            <VscGithubInverted />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/manoel-duran-63aaa0105/">
          <a>
            <ImLinkedin />
          </a>
        </Link>
      </section>
    </div>
  );
}