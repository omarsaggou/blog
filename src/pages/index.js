import * as React from "react"
import Layout from './layout'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
