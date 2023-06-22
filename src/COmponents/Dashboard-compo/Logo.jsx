import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <Link to='/'>
      <h2
        className='hidden md:block text-2xl font-bold italic'

        width='100'
        height='100'
      > Dream Family</h2>
    </Link>
  )
}

export default Logo
