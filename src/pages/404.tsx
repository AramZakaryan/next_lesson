// src/404.tsx
import { NextPage } from 'next'
import image404 from 'public/images/404.png'
import Image from 'next/image'

const NotFoundPage: NextPage = () => {
  return <div>
    <Image src={image404} alt={'not found'} fill />
  </div>
}

export default NotFoundPage