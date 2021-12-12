import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <p>Pagina de index</p>
      <Link href="/admin/usuarios/">
        <a className='cursor-pointer'>Ir a admin usuarios de prueba purba desarrollador</a>
      </Link>
    </div>
  )
}

export default Home
