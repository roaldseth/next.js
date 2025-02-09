import NextImage from 'next/image'
import src from '../../public/test.jpg'

// Keep arrow function to test rsc loaders
const Page = () => {
  return <NextImage src={src} />
}

export default Page

export const config = {
  runtime: 'experimental-edge',
}
