import m from 'mithril'

import Footer from './footer'
import HomeCard from './home-card'
import './home.sass'

class Header {
  view() {
    return (
      <header class='home-header'>
        <img class='home-header-img' src='/pics/header.png' alt='Multidimensional Complecacy'/>
      </header>
    )
  }
}

const SocialMediaList = [
  { site: 'Twitter', account: '@i_dlist', icon: '/icons/twitter.png', link: 'https://twitter.com/i_dlist' },
  { site: 'SoundCloud', account: 'i\'DLisT', icon: '/icons/soundcloud.png', link: 'https://soundcloud.com/idlist' },
  { site: 'GitHub', account: 'idlist', icon: '/icons/github.png', link: 'https://github.com/idlist' },
  { site: 'Stage1st', account: 'i\'DLisT', icon: '/icons/stage1st.png', link: 'https://bbs.saraba1st.com/' }
]

class SocialMedia {
  view() {
    return (
      <HomeCard cardTitle='find me at...'>
        <div class='social-media'>
          { SocialMediaList.map(item => (
            <a class='social-media-item' href={ item.link } target='_blank'>
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
    type: 'JS & Node.js',
    class: 'js',
    sites: [
      { site: 'Mithril.js', icon: 'mithril', link: 'https://mithril.js.org/', fav: true },
      { site: 'Vite', icon: 'vite', link: 'https://cn.vitejs.dev/' },
      { site: 'Koishi.js', icon: 'koishi', link: 'https://koishi.js.org/', fav: true }
    ]
  },
  {
    type: 'CI / CD',
    class: 'ci',
    sites: [
      { site: 'LGTM', icon: 'lgtm', link: 'https://lgtm.com/' },
      { site: 'Travis CI', icon: 'travis', link: 'https://travis-ci.com/' }
    ]
  },
  {
    type: 'Graphics',
    class: 'graphics',
    sites: [
      { site: 'Photoshop', icon: 'photoshop' },
      { site: 'Illustrator', icon: 'illustrator', fav: true }
    ]
  },
  {
    type: 'Desktop Music',
    class: 'dtm',
    sites: [
      { site: 'Ableton Live', icon: 'live', link: 'https://www.ableton.com/en/live/', fav: true }
    ]
  }
]

class ThingsUsed {
  view() {
    return (
      <HomeCard cardTitle='things i use...'>
        { ThingsList.map(category => (
          <div class='things-used'>
            <h2 class={ 'things-used-title ' + category.class }>{ category.type }</h2>
            <div class='things-used-list'>
              { category.sites.map(site => (
                <a class='things-used-item' href={ site.link } target={ site.link && '_blank' }>
                  <img class='things-used-icon' src={ `/icons/${site.icon}.png` } alt={ site.site } />
                  <span class={ site.link ? 'things-used-link' : 'things-used-no-link' }>
                    { site.site }
                  </span>
                  { site.fav
                    && <img class='things-used-fav' src='/pics/heart.png' alt='fav'/>
                  }
                </a>
              )) }
            </div>
          </div>
        )) }
      </HomeCard>
    )
  }
}

const LinksList = [
  { site: 'UN1C0DE', icon:'un1c0de', link: 'https://un1c0de.xyz/' },
]

class ExternalLinks {
  view() {
    return (
      <div class='home-card links'>
        <h1>links</h1>
        <div class='external-links'>
          { LinksList.map(item => (
            <a
              class='external-links-item'
              href={ item.link }
              target='_blank'
              title={ item.site }>
              <img src={ `/icons/${item.icon}.png` } alt={ item.site }/>
            </a>
          )) }
        </div>
      </div>
    )
  }
}

class Home {
  view() {
    return (
      <>
        <Header />
        <SocialMedia />
        <ThingsUsed />
        <ExternalLinks />
        <Footer />
      </>
    )
  }
}

export default Home