import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout style={{
    display: 'flex'
  }}>
    <SEO title="Sweta Upadhyay" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h3>Namaste! Sweta Upadhyay here...</h3>
    <h4>I am a craniosacral therapist, acupressurist and a yoga and meditation instructor!</h4>
    <h4>Say hi to me on...</h4>
    <h5>
      <a class="contact-link" href="mailto:sweta.rules@gmail.com">Email</a> |&nbsp; 
      <a class="contact-link" href="https://www.messenger.com/t/sweta.rules">Messenger</a>
    </h5>
  </Layout>
)

export default IndexPage
