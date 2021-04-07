import m from 'mithril'
import './components/fragment-polyfix'

import Layout from './components/index/layout'
import HomeContent from './components/index/home'
import DimensionsContent from './components/index/dimensions'
import './index.sass'

m.route(document.body, '/home', {
  '/home': {
    render() {
      return (
        <Layout>
          <HomeContent />
        </Layout>
      )
    }
  },
  '/dim': {
    render() {
      return (
        <Layout>
          <DimensionsContent />
        </Layout>
      )
    }
  },
  '/dim/:dim': {
    render() {
      return (
        <Layout>
          <DimensionsContent />
        </Layout>
      )
    }
  }
})