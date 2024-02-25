// Third party imports
import { Button as MuiButton, ButtonProps, styled } from '@mui/material'
import { forwardRef } from 'react'

const MuiButtonStyled = styled(MuiButton)(({ theme: { palette } }) => ({
  color: palette.common.white,
  backgroundColor: palette.primary.main,
}))

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref): JSX.Element {
  const { color, ...other } = props

  return <MuiButtonStyled ref={ref} {...other} />
})

export default Button
