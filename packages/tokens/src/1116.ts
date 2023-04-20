import { ChainId, WCORE, ERC20Token } from '../../swap-sdk/src'
import { USDC, USDT, FLAME, WBTC_ETH} from '../../tokens'

export const coreTokens = {
  wcore: WCORE[ChainId.CORE],
  flame: FLAME,
  aicore: new ERC20Token (
    ChainId.CORE,
    '0x7621c97683a3b0499ec156bd257e44175e793bb1',
    18,
    'AICORE',
    'AICORE Token',
    'https://aicoretoken.site'
  ),
  test1: new ERC20Token (
    ChainId.CORE,
    '0xEB51cBC863496974Eb599943A90cf2463D152Ee0',
    18,
    'TEST1',
    'TEST1 Token',
    'https://aicoretoken.site'
  ),
  test: new ERC20Token (
    ChainId.CORE,
    '0xD122f793F37a7060e7D848ff078bf6d517987C70',
    18,
    'TEST',
    'TEST Token',
    'https://aicoretoken.site'
  ),
  test2: new ERC20Token (
    ChainId.CORE,
    '0x3f2EF899eF580e6ee6202212585873E75F85C829',
    18,
    'test2',
    'test2 Token',
    'https://aicoretoken.site'
  ),
  rest: new ERC20Token (
    ChainId.CORE,
    '0x3c9FeC4458D3310880Cc48b343Bd02c1448205A3',
    18,
    'rest',
    'test2 Token',
    'https://aicoretoken.site'
  )
}
