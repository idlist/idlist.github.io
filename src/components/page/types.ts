interface PageNavigatorDot {
  type: 'dot'
  progress: number
}

interface PageNavigatorDivider {
  type: 'divider'
}

export type PageNavigatorItem = PageNavigatorDot | PageNavigatorDivider
