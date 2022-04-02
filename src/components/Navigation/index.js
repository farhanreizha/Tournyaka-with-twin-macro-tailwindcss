/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { StyledContainer, StyledLink, StyledNav } from '../../styles'
import Button from '../Button'
import Link from '../Link'

const Navigation = () => {
  return (
    <nav css={StyledNav}>
      <div css={StyledContainer}>
        <ul css={StyledLink}>
          <Link />
        </ul>
        <ul>
          <li>
            <a href='/'>tournyaka</a>
          </li>
        </ul>
        <div tw='invisible lg:visible'>
          <div tw='flex gap-x-[14px] '>
            <Button variant='secondary'>login</Button>
            <Button variant='primary'>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
