/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

const StyledContainer = [tw`flex flex-col lg:flex-row justify-center items-center mx-[165px]`]
const Row = [tw`flex flex-col lg:gap-y-[22px] lg:w-[650px] pt-[48px] lg:py-[48px] lg:pr-[30px]`]
const Col = [tw`flex items-center gap-x-[20px] lg:gap-x-[40px]`]
const Rounded = [tw`bg-[#FCBF49] py-[10px] px-[20px] lg:py-[20px] lg:px-[30px] rounded-full`]
const Wrap = [tw`flex flex-col gap-y-[8px]`]
const Title = [tw`lg:text-[24px] font-semibold line-height[32px]`]
const Content = [tw`lg:text-[18px] line-height[26px]`]

const About = () => {
  return (
    <div id='About' tw='pt-[250px] pb-[104px]'>
      <p tw='font-extrabold text-[24px] lg:text-[48px] text-center'>
        Mengapa harus
        <br />
        tournyaka?
      </p>
      <div css={StyledContainer}>
        <div css={Row}>
          <div css={Col}>
            <div>
              <span css={Rounded}></span>
            </div>
            <div css={Wrap}>
              <p css={Title}>Liburan sesuai mood kamu</p>
              <p css={Content}>
                Tournyaka akan memberikan rekomendasi tempat wisata dan suasana liburan yang sesuai
                dengan suasana hati kamu
              </p>
            </div>
          </div>
          <div css={Row}>
            <div css={Col}>
              <div>
                <span css={Rounded}></span>
              </div>
              <div css={Wrap}>
                <p css={Title}>Banyak pilihan dan gak ribet</p>
                <p css={Content}>
                  Tournyaka menyediakan beragam trip ke berbagai tempat wisata di Pangandaran yang
                  bisa kamu custom sesuai keinginan kamu
                </p>
              </div>
            </div>
          </div>
        </div>
        <div css={Row}>
          <div css={Col}>
            <div>
              <span css={Rounded}></span>
            </div>
            <div css={Wrap}>
              <p css={Title}>Bikin nyesel</p>
              <p css={Content}>
                Kamu akan auto nyesel deh kalo ke pangandaran tanpa ditemani Tournyaka.
              </p>
            </div>
          </div>
          <div css={Row}>
            <div css={Col}>
              <div>
                <span css={Rounded}></span>
              </div>
              <div css={Wrap}>
                <p css={Title}>Pengalaman liburan yang lebih personal</p>
                <p css={Content}>
                  Tournyaka akan memberikan rekomendasi tempat wisata dan suasana liburan yang
                  sesuai dengan suasana hati kamu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
