<script setup lang="ts">
import FullPage from '@/components/background/FullPage.vue'
import { useI18n } from 'vue-i18n'
import LinkItem from './LinkItem.vue'
import type { LinkItemType } from './LinkItemType'

import Idlist from '@/assets/logo/idlist.svg'
import At from '@/assets/svgrepo/at.svg'
import SphericalVacuum from '@/assets/logo/spherical_vacuum.svg'

const { t } = useI18n()

interface LinkInfo extends LinkItemType {
  name: string
}

const linksPersonal: LinkInfo[] = [
  {
    icon: '',
    type: 'email',
    name: 'i@idl.ist',
    link: 'mailto:i@idl.ist',
  },
]
</script>

<template>
  <FullPage>
    <div class="static page-home">
      <div class="logo">
        <img class="logo-idlist" :src="Idlist" alt="Logo of i'DLisT" />
        <img class="symbol-at" :src="At" alt="at" />
        <img class="logo-sv" :src="SphericalVacuum" alt="Logo of Spherical Vacuum" />
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

      <div class="links"></div>
    </div>
  </FullPage>
</template>

<style lang="scss">
@use '@/vars.scss' as *;

.page-home {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  .logo {
    display: flex;
    align-items: center;
    pointer-events: none;
    transform: translateX(-0.5rem);

    @media (max-width: $screen-md) {
      flex-direction: column;
      align-items: flex-start;
      transform: translateX(-0.5rem) translateY(1.5rem)
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
  }

  .links-gap {
    margin-top: 0.5rem;
  }
}
</style>
