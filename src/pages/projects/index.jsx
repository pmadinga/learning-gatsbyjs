import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'

const Projects = () => {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h1>Projects I have created</h1>
                <h2>Have a look at all of the things i have created</h2>
            </div>
        </Layout>
    );
}

export default Projects;
