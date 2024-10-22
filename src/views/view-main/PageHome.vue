<script setup lang="ts">
import FullPage from '@/components/background/FullPage.vue'
import { useI18n } from 'vue-i18n'
import LinkItem from './LinkItem.vue'
import type { LinkItemType } from './LinkItemType'
import OnAppear from '@/components/OnAppear.vue'

import Idlist from '@/assets/logo/idlist.svg'
import At from '@/assets/svgrepo/at.svg'
import SphericalVacuum from '@/assets/logo/spherical_vacuum.svg'

import Email from '@/assets/svgrepo/email.svg'
import Riw from '@/assets/logo/riw.svg'
import X from '@/assets/icon/x.svg'
import Bluesky from '@/assets/icon/bluesky.svg'
import Discord from '@/assets/svgrepo/discord.svg'
import GitHub from '@/assets/svgrepo/github.svg'
import SoundCloud from '@/assets/svgrepo/soundcloud.svg'

const { t } = useI18n()

interface LinkInfo extends LinkItemType {
  name: string
}

const linksPersonal: LinkInfo[] = [
  {
    icon: Email,
    iconAlt: 'icon of email',
    type: 'email',
    name: 'i@idl.ist',
    link: 'mailto:i@idl.ist',
  },
  {
    icon: Riw,
    iconAlt: 'icon of blog',
    type: 'blog',
    name: 'Reinventing the Wheel',
    link: 'https://blog.idl.ist',
  },
]

const linksPublic: LinkInfo[] = [
  {
    icon: X,
    iconAlt: 'icon of twitter',
    type: 'twitter',
    name: '@i_dlist',
    link: 'https://x.com/i_dlist',
  },
  {
    icon: Bluesky,
    iconAlt: 'icon of bluesky',
    type: 'bluesky',
    name: '@idl.ist',
    link: 'https://bsky.app/profile/idl.ist',
  },
  {
    icon: Discord,
    iconAlt: 'icon of discord',
    type: 'discord',
    name: '@i_dlist',
    link: 'https://discord.com/',
  },
  {
    icon: GitHub,
    iconAlt: 'icon of github',
    type: 'github',
    name: '@idlist',
    link: 'https://github.com/idlist',
  },
  {
    icon: SoundCloud,
    iconAlt: 'icon of soundcloud',
    type: 'soundcloud',
    name: '@idlist',
    link: 'https://soundcloud.com/idlist',
  },
]
</script>

<template>
  <FullPage>
    <div class="static page-home">
      <div class="logo">
        <OnAppear name="logo-show">
          <img class="logo-idlist" :src="Idlist" alt="Logo of i'DLisT" />
        </OnAppear>
        <OnAppear name="logo-show" :delay="200">
          <img class="symbol-at" :src="At" alt="at" />
        </OnAppear>
        <OnAppear name="logo-show" :delay="400">
          <img class="logo-sv" :src="SphericalVacuum" alt="Logo of Spherical Vacuum" />
        </OnAppear>
      </div>

      <div class="links">
        <LinkItem v-for="item of linksPersonal"
          :key="item.type"
          v-bind="item"
          :type="t(`socials.${item.type}`)">
          {{ item.name }}
        </LinkItem>
      </div>

      <div class="links-gap"></div>

      <div class="links">
        <LinkItem v-for="item of linksPublic"
          :key="item.type"
          v-bind="item"
          :type="t(`socials.${item.type}`)">
          {{ item.name }}
        </LinkItem>
      </div>
    </div>
  </FullPage>
</template>

<style lang="scss">
@use '@/vars.scss' as *;

.page-home {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;

  @media (max-width: $screen-md) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    pointer-events: none;
    transform: translateX(-0.5rem);

    @media (max-width: $screen-md) {
      flex-direction: column;
      align-items: flex-start;
      transform: translateX(-0.5rem) translateY(0.5rem)
    }
  }

  .logo-show {
    &-enter-from {
      transform: translateY(-2rem);
      opacity: 0;

      @media (max-width: $screen-md) {
        transform: translateX(2rem);
      }
    }

    &-enter-active {
      transition: all 0.5s ease;
    }
  }

  .logo-idlist {
    height: 5rem;
  }

  .symbol-at {
    height: 1.5rem;

    @media (max-width: $screen-md) {
      transform: translateX(0.75rem);
    }
  }

  .logo-sv {
    height: 8rem;
    transform: translateX(-0.25rem);

    @media (max-width: $screen-md) {
      transform: translateX(-0.5rem) translateY(-1rem);
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;
    row-gap: 0.25rem;
  }

  .links-gap {
    margin-top: 0.75rem;
  }
}
</style>
