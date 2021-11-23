import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'
import Img  from 'gatsby-image';

const Projects = ({data}) => {
    console.log(data);

    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h1>Projects I have created</h1>
                <h2>Have a look at all of the things i have created</h2>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email me at {contact}</p>
            </div>
        </Layout>
    );
}

export default Projects;

// export page query
export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
  
`
