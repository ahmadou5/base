import { WETH9 } from '@pancakeswap/sdk'
import { ChainId, WCORE, ERC20Token } from '../../swap-sdk/src'
import { USDC, USDT, FLAMEB, WBTC_ETH, USDT_BASE, USDC_BASE} from '../../tokens'

export const baseTokens = {
   weth: WETH9[ChainId.BASE_G],
   flame: FLAMEB,
   usdc: USDC_BASE,
   usdt: USDT_BASE,
   syrup: new ERC20Token(
      ChainId.BASE_G,
      '0xD122f793F37a7060e7D848ff078bf6d517987C70',
      18,
      'MAGMA',
      'Magma Token',
      'https://pancakeswap.finance/',
    ),
   

}