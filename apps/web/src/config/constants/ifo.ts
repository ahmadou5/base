import { ERC20Token, ChainId } from '@pancakeswap/sdk'
import { bscTokens,coreTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './lp'
import { Ifo } from './types'

export const cakeBnbLpToken = new ERC20Token(ChainId.BSC, CAKE_BNB_LP_MAINNET, 18, 'CAKE-BNB LP')

const ifos: Ifo[] = [
  {
    id: 'flame1',
    address: '0x11308e9DEeC78379aD62EA425D0fEc7fBe646925',
    isActive: true,
    name: 'FLAME',
    plannedStartTime: 1673870400, // Mon Jan 16 2023 12:00:00 UTC
    poolBasic: {
      raiseAmount: '$400,000',
    },
    poolUnlimited: {
      raiseAmount: '$2,500,000',
    },
    currency: coreTokens.wcore,
    token: coreTokens.flame,
    campaignId: '512100000',
    articleUrl:
      'https://pancakeswap.finance/voting/proposal/0x06598b682d9f33ec5ea0c2acf8eba13dea7c63fa08dd2c4dfd7bc7af16920d51',
    tokenOfferingPrice: 0.2,
    version: 1,
    twitterUrl: 'https://twitter.com/flamefinance',
    description:
      'FlameFinance is the Most Promising Decentralised Exchange on CoreChain Trade, Earn and Burn on FlameFinance.',
    vestingTitle: 'Stake $Flame and Earn More on Flame Pools',
  },
  
  ]

export default ifos
