import tw, { styled } from 'twin.macro'

const Button = styled.button(({ variant }) => [
  tw`py-3 px-5 text-[14px] line-height[20px] transition duration-300 ease-in-out hover:scale-110 rounded`,
  variant === 'primary' && tw`bg-[#FCBF49] text-white hover:bg-[#FBAA0D]`,
  variant === 'secondary' && tw`bg-[#FFEAC0] hover:bg-[#FFEFCF]`,
])

export default Button
