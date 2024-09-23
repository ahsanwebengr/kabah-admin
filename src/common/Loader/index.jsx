import { twMerge } from 'tailwind-merge';

const Loader = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-3 bg-white'>
      <div
        className={twMerge(
          'size-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent'
        )}
      ></div>
      Loading...
    </div>
  );
};

export default Loader;
