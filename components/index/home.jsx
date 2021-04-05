import m from 'mithril'

const PlatformLinks = [
  { platform: 'Twitter', name: '@i_dlist', path: '/icons/twitter.png', link: 'https://twitter.com/i_dlist' },
  { platform: 'SoundCloud', name: 'i\'DLisT', path: '/icons/soundcloud.png', link: 'https://soundcloud.com/idlist'},
  { platform: 'GitHub', name: 'idlist', path: '/icons/github.png', link: 'https://github.com/idlist' },
  { platform: 'Stage1st', name: 'i\'DLisT', path: '/icons/stage1st.png', link: 'https://bbs.saraba1st.com/'}
]

class Platforms {
  view() {
    return (
      <div class='home-card'>
        <h1>Platforms</h1>
        <hr />
        <div class='home-card-grid'>
          { PlatformLinks.map(item => (
            <a class='home-card-item' href={ item.link } target='blank'>
              <img src={ item.path } alt={ item.platform } />
              <span>{ item.name }</span>
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
        <Platforms />
      </>
    )
  }
}

export default Home