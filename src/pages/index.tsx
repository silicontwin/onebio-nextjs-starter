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

      <ul>
        <li>
          <Link href="/basic" className="text-blue-600 underline">
            Basic
          </Link>
          : displays a member's thought stream with no frills
        </li>
      </ul>
    </div>
  );
}
