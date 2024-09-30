import { Typography, Link } from "@mui/material"

export const Header = () => {
  return <header style={{
    backgroundColor: '#8fbc8f',
    color: '#f5f5f5',
    padding: '16px'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '8px'
    }}>
      <Typography variant="h4">掲示板</Typography>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '16px'
    }}>
      <Link href="/" style={{ color: '#f5f5f5', textDecoration: 'none' }}>
        <Typography variant="h6">スレッド一覧</Typography>
      </Link>
      <Link href="/threads/new" style={{ color: '#f5f5f5', textDecoration: 'none' }}>
        <Typography variant="h6">スレッド作成</Typography>
      </Link>
    </div>
</header>
}

export default Header