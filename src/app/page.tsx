import Image from 'next/image'
import NavBar from './components/navigation_bar'

export default function Home() {
  return (
    <>
      <NavBar link1="/landing_page/" link2="/courses/" link3="/payment/"></NavBar>
      <h1>Hello</h1>
    </>
  );
}
