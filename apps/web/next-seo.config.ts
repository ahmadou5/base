import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | FlameFinance',
  defaultTitle: 'FlameFinance',
  description:
    'Cheaper and faster than Shadowswap? Discover your Gateway to DeFi on Core Chain (CORE).',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@flamefinance',
    site: '@flamefinance',
  },
  openGraph: {
    title: ' FlameFinance - The Most Promising DeFi Protocol on Core Chain.',
    description:
      '#1 Dex on Core Chain Trade, Swap, Burn and Earn Boosted Apy on the Most Promising DeFi Protocol on Core-Chain.',
    images: [{ url: 'https://flamefinance.org/hero.jpg' }],
  },
}
