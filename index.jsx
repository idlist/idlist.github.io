import m from 'mithril'
import './components/fragment-polyfix'
import Layout from './components/index/layout'
import './index.sass'

let SampleText = []
for (let i = 0; i < 25; i++) {
  SampleText.push(i)
}

class TestContent {
  view() {
    return SampleText.map(() => <p></p>)
  }
}

m.route(document.body, '/home', {
  '/home': {
    render() {
      return (
        <Layout>
          <TestContent />
        </Layout>
      )
    }
  },
  '/dim': {
    render() {
      return (
        <Layout>
          <TestContent />
        </Layout>
      )
    }
  },
  '/dim/:dim': {
    render() {
      return (
        <Layout>
          <TestContent />
        </Layout>
      )
    }
  }
})