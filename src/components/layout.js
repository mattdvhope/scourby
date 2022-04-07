import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Helmet from "react-helmet";
import Header from "~/components/header"
import SearchElement from "./search-element"
import SearchResults from "~/components/search-results"
import Footer from "~/components/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SitenameQuery {
      cosmicjsGlobal {
        metadata {
          sitename
        }
      }
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
  `)

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="bg-gray-50 relative">
      <Helmet>
        <meta name="facebook-domain-verification" content="wymeib84cqihovmenum81aropkvy9p" /> {/*scourbyaudio.com*/}
      </Helmet>
      <Header
        setOpenModal={setOpenModal}
        sitename={data.cosmicjsGlobal.metadata.sitename || `Scourby Audio`}
        metadata={data.allCosmicjsGlobal.edges[0].node.metadata}
      />
      <div className="flex flex-col max-w-screen-lg m-auto min-h-screen p-6 md:p-10">
        <main className="flex-1">{children}</main>
        <div className="flex flex-col items-center">
          <SearchElement setOpenModal={setOpenModal} />
        </div>
        <Footer />
      </div>
      {openModal && (
        <div className="h-screen max-w-screen-lg m-auto fixed bottom-0 top-0 right-0 left-0 px-6 pb-10 pt-20 md:p-10 md:pt-40">
          <SearchResults setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
