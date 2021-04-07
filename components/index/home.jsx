import m from 'mithril'

import Footer from './footer'
import HomeCard from './home-card'
import './home.sass'

const SocialMediaList = [
  { site: 'Twitter', account: '@i_dlist', icon: '/icons/twitter.png', link: 'https://twitter.com/i_dlist' },
  { site: 'SoundCloud', account: 'i\'DLisT', icon: '/icons/soundcloud.png', link: 'https://soundcloud.com/idlist' },
  { site: 'GitHub', account: 'idlist', icon: '/icons/github.png', link: 'https://github.com/idlist' },
  { site: 'Stage1st', account: 'i\'DLisT', icon: '/icons/stage1st.png', link: 'https://bbs.saraba1st.com/' }
]

class SocialMedia {
  view() {
    return (
      <HomeCard cardTitle='you can find me at...'>
        <div class='social-media-grid'>
          { SocialMediaList.map(item => (
            <a class='social-media-item' href={ item.link } target='blank'>
              <img src={ item.icon } alt={ item.site } />
              <span class='social-media-platform'>{ item.site } - </span>
              <span class='social-media-name'>{ item.account }</span>
            </a>
          )) }
        </div>
      </HomeCard>
    )
  }
}

const ThingsList = [
  {
    type: 'Coding',
    class: 'coding',
    sites: [
      { site: 'Mithril', icon: '/icons/mithril.png', link: 'https://mithril.js.org/' },
      { site: 'Vite', icon: '/icons/vite.png', link: 'https://cn.vitejs.dev/' },
      { site: 'Koishi', icon: '/icons/koishi.png', link: 'https://koishi.js.org/' }
    ]
  },
  {
    type: 'Graphics',
    class: 'graphics',
    sites: [
      { site: 'Photoshop', icon: '/icons/photoshop.png' },
      { site: 'Illustrator', icon: '/icons/illustrator.png' }
    ]
  }
]

class Things {
  view() {
    return (
      <HomeCard cardTitle='Things i use...'>
        { ThingsList.map(category => (
          <div class='things-used'>
            <h2 class={ 'things-used-title ' + category.class }>{ category.type }</h2>
            <div class='things-used-list'>
              { category.sites.map(site => (
                <div class='things-used-item'>
                  <img src={ site.icon } alt={ site.site }/>
                  { site.link
                    ? <a href={ site.link } target='blank'>{ site.site }</a>
                    : <span>{ site.site }</span>
                  }
                </div>
              )) }
            </div>
          </div>
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
        <Things />
        <Footer />
      </>
    )
  }
}

export default Home