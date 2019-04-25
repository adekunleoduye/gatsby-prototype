import React, {useState} from "react"
import { graphql } from "gatsby"
// import Button from '../components/Button'

import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
    <div class="heroes-group font">
   
       {data.allSuperHeroesJson.edges.map((hero,i) => {

         return (
          <div class="heroes-item" key={i}>
              <h3>
                {hero.node.hero}
              </h3>
              
              <img src={hero.node.img} class="mb0"/>
              <a href={hero.node.link} class="btn btn-primary full-width">Link to profile</a>
            </div>)
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
          hero
          link
          img
          bio
        }
      }
    }
  }
`;


export default IndexPage
