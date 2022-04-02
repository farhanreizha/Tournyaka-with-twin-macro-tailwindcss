/** @jsxImportSource @emotion/react */
import { BgHero, ContentLogo } from '../../assets'
import tw from 'twin.macro'
import { StyledContainer } from '../../styles'
import { Button } from '../../components'

const StyledBgHero = [tw`w-[100vw] opacity-50`]
const StyledAbsolute = [tw`absolute top[30%] margin-top[-30] lg:top[60%]`]
const StyledFlex = [tw`flex flex-col gap-3`]
const StyledContentLogo = [tw`w-[50%] lg:w-[100%]`]
const StyledText = [tw`text-[#FCBF49] text-[16px] line-height[32px] lg:text-base`]
const StyledGap = [tw`mt-7 lg:mt-14`]

const Hero = () => {
  return (
    <div id='home'>
      <div tw='bg-black'>
        <img src={BgHero} alt='bg hero' css={StyledBgHero} />
      </div>
      <div css={StyledContainer}>
        <div css={StyledAbsolute}>
          <div css={StyledFlex}>
            <img src={ContentLogo} alt='content logo' css={StyledContentLogo} />
            <p css={StyledText}>Make the best trip and new travel experiance with Tournyaka.h</p>
          </div>
          <Button variant='primary' css={StyledGap}>
            Ayo Berangkat!
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
