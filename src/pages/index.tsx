import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="p-20">
      <h1 className="font-bold text-lg mb-4">
        <a href="https://oneb.io" target="_blank">
          OneBio
        </a>{' '}
        Next.js Examples
      </h1>

      <ul className="flex flex-col justify-start items-start space-y-4">
        <li>
          <Link href="/ssr" className="text-blue-600 underline">
            Fetch thoughts using getServerSideProps
          </Link>
          : data retrieved at request time.
        </li>

        <li>
          <Link href="/ssg" className="text-blue-600 underline">
            Fetch thoughts using getStaticProps
          </Link>
          : data retrieved at build time.
        </li>

        <li>
          <Link href="/stringify" className="text-blue-600 underline">
            View thoughts as JSON
          </Link>
          : displays all available Thought properties using SSG.
        </li>
      </ul>
    </div>
  );
}
