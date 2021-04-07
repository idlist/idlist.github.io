import m from 'mithril'

import './footer.sass'

class Footer {
  view() {
    return (
      <div class='home-card footer'>
        <div class='copyright'>i'DLisT © 2021</div>
        <hr />
        <div class='bmc'>
          <span class='bmc-text'>Maybe no one would go for it but...</span>
          <a
            class='bmc-button'
            href='https://www.buymeacoffee.com/idlist'
            target='_blank'>
            <img src='/buttons/bmc.png' alt='Buy me a coffee' />
          </a>
        </div>
      </div>
    )
  }
}

export default Footer