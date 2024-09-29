import { Typography } from "@mui/material"

export const Header = () => {
  return <header style={{
    backgroundColor: '#8fbc8f',
    color: '#f5f5f5'
  }}>
    <Typography variant="h4" style={{ padding: '16px' }}>掲示板</Typography>
  </header>
}

export default Header