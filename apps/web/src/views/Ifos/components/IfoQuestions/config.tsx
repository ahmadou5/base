import Trans from 'components/Trans'
import styled from 'styled-components'
import { Link } from '@pancakeswap/uikit'

const InlineLink = styled(Link)`
  display: inline;
`

const config = [
  {
    title: <Trans>What’s the difference between a Public Sale and Private Sale?</Trans>,
    description: [
      <Trans>
        In the current IFO format. There is a brand new Private Sale. To participate, participants will have to meet
        certain requirements presented on the IFO card. Each eligible participant will be able to commit any amount of
        $WCORE up to the maximum commit limit. The Private Sale has
        no participation fee.
      </Trans>,
      <Trans>
        In the Public Sale, everyone with $$WCORE can commit.
      </Trans>,
      
      <Trans>And there’s a fee for participation: see below.</Trans>,
    ],
  },
  {
    title: <Trans>Which sale should I commit to? Can I do both?</Trans>,
    description: [
      <Trans>You can choose one or both at the same time!</Trans>,
      <Trans>
        We recommend you to check if you are eligible to participate in the Private Sale first. In the Public Sale, if
        the amount you commit is too small, you may not receive a meaningful amount of IFO tokens.
      </Trans>,
    ],
  },
  {
    title: <Trans>How much is the participation fee?</Trans>,
    description: [
      <Trans>There’s only a participation fee for the Public Sale: there’s no fee for the Private Sale.</Trans>,
      <Trans>
        The participation fee decreases in cliffs, based on the percentage of overflow from the “Public Sale” portion of
        the IFO.
      </Trans>,
      
    ],
  },
 
  
]
export default config
