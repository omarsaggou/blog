import * as React from "react"
import Layout from '../layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>We just started learning Gatsby.</p>

      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/pic01.png"
      />

    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
