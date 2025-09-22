import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import DropdownMenu from '../components/components-reusable/dropdown-menu';
import DropdownDemo from '../components/components-reusable/dropdown-demo';
import DropdownMenu2 from '../components/components-reusable/dropdown-menu-2';
import DropdownMenu3 from '../components/components-reusable/dropdown-menu-3';

function Navbar() {
  return (
    <nav className=''>
      <ul className='list-none d-flex justify-evenly w-100'>
        <li><DropdownMenu /></li>
        <li><DropdownMenu2 /></li>
        <li><DropdownMenu3 /></li>
        <li><DropdownDemo /></li>

        <li className=''>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="" alt="Vite logo" />
          </a>
        </li>
        <li className=''>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="" alt="React logo" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;