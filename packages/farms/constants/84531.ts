import { bscTestnetTokens, baseTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */

  {
    pid: 0,
    v1pid:0,
    lpSymbol: 'Flame',
    lpAddress: '0xD122f793F37a7060e7D848ff078bf6d517987C70 ',
    token: baseTokens.syrup,
    quoteToken: baseTokens.weth,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'Flame - USDT',
    lpAddress: '0x07D4DB86733Bf72E544F0Fb46E0E1949c5dA8F32 ',
    token: baseTokens.flame,
    quoteToken: baseTokens.usdt,
  },

  
]

export default farms