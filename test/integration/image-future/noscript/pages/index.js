import React from 'react'
import Image from 'next/future/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.vercel.sh${src}?w~~${width},q~~${quality}`
}

const Page = () => {
  return (
    <div>
      <p>noscript images</p>
      <Image id="basic-image" src="/basic-image.jpg" width={640} height={360} />
      <Image
        loader={myLoader}
        id="image-with-loader"
        src="/remote-image.jpg"
        width={640}
        height={360}
      />
    </div>
  )
}

export default Page
