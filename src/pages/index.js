import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
     <div>
       {data.allSuperHeroesJson.edges.map(hero => {
         
         return <img src={hero.node.img} alt={hero.node.name}/>
        })}
    </div>
    
  </Layout>
)

export const query = graphql`
  query IndexPage {
    allSuperHeroesJson {
      edges {
        node {
          name
          img
        }
      }
    }
  }
`;


export default IndexPage
