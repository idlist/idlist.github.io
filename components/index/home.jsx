import m from 'mithril'

import Footer from './footer'
import './home.sass'

const SocialMediaList = [
  { site: 'Twitter', account: '@i_dlist', path: '/icons/twitter.png', link: 'https://twitter.com/i_dlist' },
  { site: 'SoundCloud', account: 'i\'DLisT', path: '/icons/soundcloud.png', link: 'https://soundcloud.com/idlist' },
  { site: 'GitHub', account: 'idlist', path: '/icons/github.png', link: 'https://github.com/idlist' },
  { site: 'Stage1st', account: 'i\'DLisT', path: '/icons/stage1st.png', link: 'https://bbs.saraba1st.com/' }
]

const ThingsList = [
  {
    type: 'Coding',
    sites: [
      { site: 'Koishi', link: 'https://koishi.js.org/guide/starter.html' }
    ]
  }
]

class HomeCard {
  view(vnode) {
    return (
      <div class='home-card'>
        <h1>{ vnode.attrs.title }</h1>
        <hr />
        { vnode.children }
      </div>
    )
  }
}

class SocialMedia {
  view() {
    return (
      <HomeCard title='you can find me at...'>
        <div class='social-media-grid'>
          { SocialMediaList.map(item => (
            <a class='social-media-item' href={ item.link } target='blank'>
              <img src={ item.path } alt={ item.site } />
              <span class='social-media-platform'>{ item.site } - </span>
              <span class='social-media-name'>{ item.account }</span>
            </a>
          )) }
        </div>
      </HomeCard>
    )
  }
}

class Things {
  view() {
    return (
      <HomeCard title='Things i use...'>
        { ThingsList.map(category => (
          <>
            <h2>{ category.type }</h2>
            { category.sites.map(site => (
              <a href={ site.link }>{ site.site }</a>
            )) }
          </>
        )) }
      </HomeCard>
    )
  }
}

class Home {
  view() {
    return (
      <>
        <SocialMedia />
        <Footer />
      </>
    )
  }
}

export default Home