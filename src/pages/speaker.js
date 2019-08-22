import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../components/SpeakerCard/speakerCard.scss"


const SpeakerPage = ({data}) => (
  <Layout>
    <header>
      <h1 className="font f6 fc--black500">Speakers</h1>
      <p className="font width--500">
        Checkout the the list of speakers below.
      </p>
    </header>
    <section className="grid col2 gap3">
      {
        data.allSpeakersJson.edges.map((speaker,i) => {
          return (
            <section className="career-tile__group" key={i}>
              <article className="career-tile">
                <section className="career-tile__info-group is-hidden">
                    <div className="career-tile__info">
                      <header className="info__header">
                        <span className="info__close" data-info="close">&#215;</span>
                      </header>
                      <main className="info__main">
                      <h2 className="info__title">{speaker.node.tile}</h2>
                        <p className="info__content">
                        {speaker.node.description}                        </p>
                      </main>
                    </div>
                </section>

                <section className="career-tile__content-group" data-info="activate">
                  <div className="career-tile__content-item career-tile__img-group">
                    <img className="career-tile__img" src={speaker.node.img}/>
                  </div>
                  <div className="career-tile__content-item  career-tile__title-group">
                    <h3 className="career-tile__title">{speaker.node.title}</h3>
                    <h4 className="career-tile__speaker">{speaker.node.name}</h4>
                  </div>
                </section>
              </article>
            </section>
          )
        })
      }
    </section>
    
  </Layout>
)

export const query = graphql`
  query SpeakerPage {
    allSpeakersJson {
      edges {
        node {
          name
          occupation
          tags
          title
          img
          description
        }
      }
    }
  }
`;

export default SpeakerPage
