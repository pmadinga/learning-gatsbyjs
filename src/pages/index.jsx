import { Link } from "gatsby";
import React from "react"
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & web developer based in Gauteng</p>
          <Link className={styles.btn} to='/projects'>my portfolio projects</Link>
        </div>
      </section>
    </Layout>
  )
}