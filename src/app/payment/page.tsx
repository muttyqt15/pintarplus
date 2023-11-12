import Image from 'next/image'
import NavBar from '../components/navigation_bar' // ../ means parent directory, ./ means current directory

export default function Payment() {
  return (
    <div>
      <NavBar link1="/" link2="/courses/" link3="/payment/"></NavBar>
    </div>
  );
}
