/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { LogoTournyakaFooter } from '../../assets'

const StyledContainer = [tw`flex justify-between items-start mx-[165px]`]
const FooterLogo = [
  tw`absolute flex justify-center bg-black rounded-full w-[160px] right-[50%] transform translate-x-[50%] -top-10`,
]
const Wrap = [tw`flex flex-col gap-y-[16px]`]
const Title = [tw`text-[15px] font-semibold lg:text-[18px] line-height[28px]`]
const List = [tw`text-[13px] lg:text-[14px] line-height[24px]`]

const Footer = () => {
  return (
    <div tw='bg-black text-white pt-[64px]'>
      <div tw='pb-[108px]'>
        <div css={StyledContainer}>
          <div css={Wrap}>
            <p css={Title}>Info</p>
            <p css={List}>Destinasi Wisata</p>
          </div>
          <div css={Wrap}>
            <p css={Title}>Perusahaan</p>
            <p css={List}>Tentang Kami</p>
            <p css={List}>Kontak</p>
            <p css={List}>Kerjasama</p>
          </div>
          <div css={Wrap}>
            <p css={Title}>Bantuan</p>
            <p css={List}>Kebijakan Privasi</p>
            <p css={List}>Syarat dan Ketentuan</p>
          </div>
          <div css={Wrap}>
            <p css={Title}>Sosial Media</p>
            <p css={List}>Facebook</p>
            <p css={List}>Whatsapp</p>
          </div>
        </div>
      </div>
      <div tw='relative'>
        <div css={FooterLogo}>
          <img src={LogoTournyakaFooter} alt='Logo Footer' />
        </div>
      </div>
      <hr />
      <div tw='text-center pt-[55px] pb-[20px] text-[12px] lg:text-[14px]'>
        <p>©️ 2022 Tournyaka</p>
      </div>
    </div>
  )
}

export default Footer
