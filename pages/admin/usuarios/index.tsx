import React from 'react'
import Link from 'next/link'
const index = () => {
    return (
        <div>
            <div>página de admin</div>
            <Link href="/">
            <a>Ir al home</a>
            </Link>
        </div>
    )
}

export default index
