import { FiMenu } from '@/assets/icons';
import DropdownUser from './DropdownUser';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className='sticky top-0 z-40 flex w-full bg-white shadow-lg'>
      <div className='flex flex-grow items-center justify-between px-4 py-4 shadow-md md:px-6 2xl:px-11'>
        <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
          <button
            aria-controls='sidebar'
            onClick={e => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className='z-40 block border rounded-md bg-white p-1.5 shadow-sm lg:hidden'
          >
            <FiMenu size={22} />
          </button>
        </div>

        <div className='hidden sm:block'></div>

        <div className='flex items-center gap-3 sm:gap-7'>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
