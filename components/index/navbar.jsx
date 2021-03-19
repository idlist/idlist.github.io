import m from 'mithril'
import myIcon from '/icons/idlist.svg'

const RouteDim = [
  { link: 'frontend-js', display: 'Frontend JS' },
  { link: 'backend-js', display: 'Backend JS' },
  { link: 'drawing', display: 'Drawing' },
  { link: 'graphic-design', display: 'Graphic Design' },
  { link: 'desktop-music', display: 'Desktop Music' },
  { link: 'others', display: 'Others' }
]

class Navbar {
  setTagClass(tag) {
    return 'tag-container'
      + (m.route.get().startsWith(tag) ? ' tag-selected' : '')
  }
  view() {
    return (
      <nav>
        <div class='header'>
          <div class='header-container'>
            <img class='header-icon' src={ myIcon } alt='icon' />
            <div class='tag-list'>
              <m.route.Link
                href='/home'
                class={ this.setTagClass('/home') }>
                <div class='tag'>Home</div>
              </m.route.Link>
              <m.route.Link
                href='/dim'
                class={ this.setTagClass('/dim') }>
                <div class='tag'>Dimensions</div>
              </m.route.Link>
            </div>
          </div>
        </div>
        <div
          class={ 'sub-tag-list' }>
          <div class='sub-tag-list-container'>
            { RouteDim.map((route, index) =>
              <>
                <m.route.Link
                  class='sub-tag-container'
                  href={ '/dim/' + route.link }>
                  <div class='sub-tag'>{ route.display }</div>
                </m.route.Link>
                { index != RouteDim.length - 1 ? <div class='sub-tag-divider'></div> : '' }
              </>
            ) }
          </div>
        </div>
      </nav >
    )
  }
}

export default Navbar