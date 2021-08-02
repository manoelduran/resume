import React from "react";
import styles from '../styles/styles.module.scss';
import { Bio } from "../components/Bio";
import { SideBar } from "../components/SideBar";
import { Knowledge } from "../components/Conhecimentos";
import { ButtonHome } from "../components/ButtonHome";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.sidebarContent}>
        <SideBar />
      </section>
      <section className={styles.content}>
        <Bio />
        <Knowledge />
        <ButtonHome />
      </section>
    </div >
  )
}
/*
<div className={styles.text}>
        <p>{"Hello! How you doing? I'm building my new portfolio."}</p>
        <p>Please, feel free to get in touch through any way you prefer:</p>
        <p>You can contact me through my e-mail:<a href="mailto:manoel.duran@hotmail.com">manoel.duran@hotmail.com</a></p>
        <p>Or even on any social media platform:</p>
      </div>*/
