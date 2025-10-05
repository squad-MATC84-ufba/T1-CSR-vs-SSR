import Link from "next/link"

export default function Home() {
  return ( 
    <div>
    <ul>
      <li><Link href="/server-side">/server-side</Link></li>
      <li><Link href="/client-side">/client-side</Link></li>
    </ul>
    </div>
  );
}