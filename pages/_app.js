
import { Layout } from "../components/layout"
import "../styles/index.scss"
export default function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component   {...pageProps} />
  </Layout>
)}
