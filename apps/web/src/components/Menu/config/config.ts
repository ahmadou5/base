import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  
  MoreIcon,
  DropdownMenuItems,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

import {  UNDER_CONSTRUCTION } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      //supportChainIds: UNDER_CONSTRUCTION,
      status: 'SOON',
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Farms'),
          href: '/farms',
          supportChainIds: UNDER_CONSTRUCTION,
        },
        {
          label: t('Pools'),
          href: '/pools',
          supportChainIds: UNDER_CONSTRUCTION,
        },
       
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    
    
   
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Info'),
          href: '/info',
          supportChainIds: UNDER_CONSTRUCTION
        },
        {
          label: t('IFO'),
          href: '/ifo',
          supportChainIds: UNDER_CONSTRUCTION,
          image: '/images/ifos/ifo-bunny.png',
          
        },
        
        {
          label: t('Hiring'),
          href: '/voting',
          supportChainIds: UNDER_CONSTRUCTION,
          image: '/images/voting/voting-bunny.png',
        },
       
        
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://medium.com/flamefinance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
       
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
