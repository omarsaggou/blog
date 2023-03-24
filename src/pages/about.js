import * as React from 'react'
import Layout from '../layout/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}
export const Head = () => <Seo title="About" />
export default AboutPage