import Image from 'next/image'
import NavBar from '../components/navigation_bar' // ../ means parent directory, ./ means current directory

export default function Courses() {
  return (
    <>
      <NavBar link1="/landing_page/" link2="/courses/" link3="/payment/"></NavBar>
      <h1>Hello</h1>
    </>
  );
}
