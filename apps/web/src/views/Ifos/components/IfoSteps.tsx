import styled from 'styled-components'
import every from 'lodash/every'
import {
  Balance,
  Box,
  Button,
  Card,
  CardBody,
  CheckmarkIcon,
  Container,
  Flex,
  FlexGap,
  Heading,
  Link,
  LogoRoundIcon,
  NextLinkFromReactRouter as RouterLink,
  Skeleton,
  Step,
  StepStatus,
  Stepper,
  Text,
  TooltipText,
  useTooltip,
} from '@pancakeswap/uikit'
import { useAccount } from 'wagmi'

import { useTranslation } from '@pancakeswap/localization'
import useTokenBalance from 'hooks/useTokenBalance'
import { useProfile } from 'state/profile/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import { useBUSDCakeAmount } from 'hooks/useBUSDPrice'
import { useIfoCredit, useIfoCeiling } from 'state/pools/hooks'
import { getICakeWeekDisplay } from 'views/Pools/helpers'

interface TypeProps {
  ifoCurrencyAddress: string
  hasClaimed: boolean
  isCommitted: boolean
  isLive?: boolean
}

const SmallStakePoolCard = styled(Box)`
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
`

const Wrapper = styled(Container)`
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: -24px;
    margin-right: -24px;
  }
`

const InlineLink = styled(Link)`
  display: inline;
`

const Step1 = ({ hasProfile }: { hasProfile: boolean }) => {
  const { t } = useTranslation()
  const credit = useIfoCredit()
  const ceiling = useIfoCeiling()
  const creditDollarValue = useBUSDCakeAmount(getBalanceNumber(credit))
  const weeksDisplay = getICakeWeekDisplay(ceiling)

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <Box>
      <Text>
        {t(
          'The number of iCAKE equals the locked staking amount if the staking duration is longer than %weeks% weeks. If the staking duration is less than %weeks% weeks, it will linearly decrease based on the staking duration.',
          {
            weeks: weeksDisplay,
          },
        )}
      </Text>
      <InlineLink external href="https://docs.pancakeswap.finance/products/ifo-initial-farm-offering/icake">
        {t('Learn more about iCAKE')}
      </InlineLink>
    </Box>,
    {},
  )
  

  return (
    <CardBody>
      {tooltipVisible && tooltip}
      <Heading as="h4" color="secondary" mb="16px">
        {t('Wrapped Your $CORE')}
      </Heading>
      <Box>
        <Text mb="4px" color="textSubtle" small>
          {t(
            'You’ll need to Wrap Your $Core to $WCORE  that you are Holding in Your Wallet To participate on FlameFinance IFO!.',
          )}
        </Text>
        <Button as={RouterLink} to={`/swap?chain=core&outputCurrency=0x191E94fa59739e188dcE837F7f6978d84727AD01`}>
          {t('Wrap Your $CORE')}
        </Button>
      </Box>
      {hasProfile && (
        <SmallStakePoolCard borderRadius="default" p="16px">
          <FlexGap justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="16px">
            <Flex>
              <LogoRoundIcon style={{ alignSelf: 'flex-start' }} width={32} height={32} />
              <Box ml="16px">
                <Text bold fontSize="12px" textTransform="uppercase" color="secondary">
                  {t('Your max WCORE entry')}
                </Text>
                <Balance fontSize="20px" bold decimals={5} value={getBalanceNumber(credit)} />
                <Text fontSize="12px" color="textSubtle">
                  {creditDollarValue !== undefined ? (
                    <Balance
                      value={creditDollarValue}
                      fontSize="12px"
                      color="textSubtle"
                      decimals={2}
                      prefix="~"
                      unit=" USD"
                    />
                  ) : (
                    <Skeleton mt="1px" height={16} width={64} />
                  )}
                </Text>
              </Box>
            </Flex>
          </FlexGap>
        </SmallStakePoolCard>
      )}
    </CardBody>
  )
}

const Step2 = ({ hasProfile, isLive, isCommitted }: { hasProfile: boolean; isLive: boolean; isCommitted: boolean }) => {
  const { t } = useTranslation()
  return (
    <CardBody>
      <Heading as="h4" color="secondary" mb="16px">
        {t('Commit WCORE')}
      </Heading>
      <Text color="textSubtle" small>
        {t(
          ' You will need to use the amount of WCORE in your wallet balance to commit to the IFO sales.',
        )}{' '}
        <br />
      </Text>
      {!hasProfile && isLive && !isCommitted && (
        <Button as="a" href="#current-ifo" mt="16px">
          {t('Commit WCORE')}
        </Button>
      )}
    </CardBody>
  )
}

const IfoSteps: React.FC<React.PropsWithChildren<TypeProps>> = ({
  isCommitted,
  hasClaimed,
  isLive,
  ifoCurrencyAddress,
}) => {
  const { hasActiveProfile } = useProfile()
  const { address: account } = useAccount()
  const { t } = useTranslation()
  const { balance } = useTokenBalance(ifoCurrencyAddress)
  const stepsValidationStatus = [hasActiveProfile, balance.isGreaterThan(0), isCommitted, hasClaimed]

  const getStatusProp = (index: number): StepStatus => {
    const arePreviousValid = index === 0 ? true : every(stepsValidationStatus.slice(0, index), Boolean)
    if (stepsValidationStatus[index]) {
      return arePreviousValid ? 'past' : 'future'
    }
    return arePreviousValid ? 'current' : 'future'
  }

  const renderCardBody = (step: number) => {
    const isStepValid = stepsValidationStatus[step]

    const renderAccountStatus = () => {
      if (!account) {
        return <ConnectWalletButton />
      }

      if (isStepValid) {
        return (
          <Flex alignItems="center">
            <Text color="success" bold mr="8px">
              {t('Profile Active!')}
            </Text>
            <CheckmarkIcon color="success" />
          </Flex>
        )
      }

      return (
        <Button as={RouterLink} to={`/swap?chain=core&outputCurrency=0x191E94fa59739e188dcE837F7f6978d84727AD01`}>
          {t('Wrap Your $CORE')}
        </Button>
      )
    }

    switch (step) {
      case 0:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Get some $CORE')}
            </Heading>
            <Text color="textSubtle" small mb="16px">
              {t('You’ll need to Have Some Amount of $CORE Token in Your Wallet To participate on FlameFinance IFO!')}
            </Text>
           {/* {renderAccountStatus()} */}
          </CardBody>
        )
      case 1:
        return <Step1 hasProfile={hasActiveProfile} />
      case 2:
        return <Step2 hasProfile={hasActiveProfile} isLive={isLive} isCommitted={isCommitted} />
      case 3:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Claim your tokens and achievement')}
            </Heading>
            <Text color="textSubtle" small>
              {t(
                'After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent WCORE tokens will be returned to your wallet.',
              )}
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <Heading id="ifo-how-to" as="h2" scale="xl" color="secondary" mb="24px" textAlign="center">
        {t('How to Take Part in the Public Sale')}
      </Heading>
      <Stepper>
        {stepsValidationStatus.map((_, index) => (
          <Step
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            index={index}
            statusFirstPart={getStatusProp(index)}
            statusSecondPart={getStatusProp(index + 1)}
          >
            <Card>{renderCardBody(index)}</Card>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  )
}

export default IfoSteps
