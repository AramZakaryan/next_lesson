import Link from 'next/link'

export const  Navbar = () => {
  return <div className={'flex justify-start gap-2 px-2 bg-amber-300 h-7 items-end'}>
    <Link href="/">main</Link>
    <Link href="/characters">characters</Link>
    <Link href="/episodes">episodes</Link>
    <Link href="/locations">locations</Link>
  </div>

}