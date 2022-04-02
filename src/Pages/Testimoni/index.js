/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { LogoTournyaka } from '../../assets'

const BackGround = [tw`bg-[#FCBF49] pt-[76px] pb-[63px]`]
const StyledContainer = [tw`flex flex-col gap-y-10 justify-center items-center mx-[165px]`]
const Content = [tw`text-center lg:text-[20px] line-height[40px] lg:w-[1260px]`]

const Testimoni = () => {
  return (
    <div css={BackGround}>
      <div css={StyledContainer}>
        <p css={Content}>
          <b>Tournyaka</b> merupakan sebuah platform pariwisata yang menyediakan berbagai kebutuhan
          wisatawan dalam berwisata ke Pangandaran seperti layanan jasa tour guide, intinerary
          planner, paket wisata, yang menawarkan personal experience dimana wisatawan dapat mengatur
          rencana perjalanan ke berbagai destinasi wisata pangandaran yang diinginkan.
        </p>
        <img src={LogoTournyaka} alt='logo tournyaka' tw='w-[10.25%]' />
      </div>
    </div>
  )
}

export default Testimoni
