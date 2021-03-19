import m from 'mithril'
import myIcon from '/icons/idlist.svg'
import dropdown from '/icons/dropdown.png'

const RouteDim = [
  { link: 'frontend-js', display: 'Frontend JS' },
  { link: 'backend-js', display: 'Backend JS' },
  { link: 'drawing', display: 'Drawing' },
  { link: 'graphic-design', display: 'Graphic Design' },
  { link: 'desktop-music', display: 'Desktop Music' },
  { link: 'others', display: 'Others' }
]

class Navbar {
  constructor() {
    this.displaySubTag = false
  }
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
                class={ this.setTagClass('/dim') }
                onmouseover={ () => { this.displaySubTag = true } }
                onmouseout={ () => { this.displaySubTag = false } }>
                <div class='tag'>Dimensions</div>
                <img
                  class={ 'header-dropdown '
                    + (this.displaySubTag ? '' : 'rotated') }
                  src={ dropdown }
                  alt='dropdown'/>
              </m.route.Link>
            </div>
          </div>
        </div>
        <div
          class={ 'sub-tag-list '
            + (this.displaySubTag ? 'down' : '') }
          onmouseover={ () => { this.displaySubTag = true } }
          onmouseout={ () => { this.displaySubTag = false } }
          onclick={ () => { this.displaySubTag = false } }>
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