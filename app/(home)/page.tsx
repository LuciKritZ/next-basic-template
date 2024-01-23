import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <h4 className='text-3xl'>
        Basic Next.JS template by{' '}
        <Link
          target='_blank'
          href='https://www.github.com/LuciKritZ'
          className='underline'
        >
          LuciKritZ
        </Link>
      </h4>
      <div>
        <ul className='list-disc space-y-[1.5vh] ml-[2.5vh] text-[2vh] mt-4'>
          <li className='list-item'>ESLint - auto import</li>
          <li className='list-item'>
            `cn`: function for adding dynamic classes
          </li>
          <li className='list-item'>
            `fetch-query`: function for writing neat api rest calls
          </li>
        </ul>
      </div>
    </main>
  );
}
