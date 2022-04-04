import React from "react"
import { graphql } from "gatsby"
import Layout from "~/components/layout"
import Image from "~/components/image"
import "~/styles/global.css";


const PurchaseTemplate = ({edges, imageAlt}) =>
  <Layout>
    <div className="centered-div" style={{ marginTop: `-40px` }}>
      <Image
        className="audio-bible-voice-only-image??????"
        alt={imageAlt}
        image={edges[0].node.metadata.image}
      />
      {edges.map(({node}) => {
        return (
          <a href={node.metadata.sub_product_characteristic.product_link} key={node.id}>
            <h3>{node.title}</h3>
            <br/>
            <hr/>
            <br/>
          </a>
        )
      })}
    </div>
  </Layout>

export default PurchaseTemplate
