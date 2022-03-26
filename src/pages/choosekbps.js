import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "~/components/layout"
import Image from "~/components/image"
import "~/styles/global.css";


const ChooseKbps = ({
  data: {
    allCosmicjsGlobal: { edges }
  }
}) => {
  const { metadata } = edges[0].node
  return (
    <Layout>
      <div className="centered-div">
        <Link 
          to="/choosekbps"
          onClick={() => {
            fbq('track', 'PageView'); // you can add JSON params here too!! --> https://developers.facebook.com/docs/mediaguide/pixel-and-analytics
          }}
        >
          <Image
            className="indiv-audio-bible-image"
            alt="Audio Bible Voice Only"
            image={metadata.audio_bible_voice_only}
          />
        </Link>
      </div>
    </Layout>
  )
}

export const searchPageQuery = graphql`
  query AudioBibleKbpsQuery {
    allCosmicjsGlobal {
      edges {
        node {
          metadata {
            audio_bible_voice_only {
              local {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH,
                    placeholder: BLURRED,
                    aspectRatio: 1.4278
                  )
                }
              }
            }
            audio_bible_dramatized {
              local {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH,
                    placeholder: BLURRED,
                    aspectRatio: 1.4278
                  )
                }
              }
            }
            audio_bible_both {
              local {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH,
                    placeholder: BLURRED,
                    aspectRatio: 1.4278
                  )
                }
              }
            }
          }
        }
      }
    }
  }

`


export default ChooseKbps
