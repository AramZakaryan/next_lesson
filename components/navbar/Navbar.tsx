import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex justify-start gap-4 px-4 py-2 bg-amber-300 items-center">
      <Link href="/" className="text-blue-600 hover:text-blue-800">main</Link>
      <Link href={'/characters'} className="text-blue-600 hover:text-blue-800">characters</Link>
      <Link href={'/episodes'} className="text-blue-600 hover:text-blue-800">episodes</Link>
      <Link href={'/episodesHook'} className="text-blue-600 hover:text-blue-800">episodesHook</Link>
      <Link href={'/locations'} className="text-blue-600 hover:text-blue-800">locations</Link>
      <Link href={'/experiment'} className="text-blue-600 hover:text-blue-800">experiment</Link>
      <Link href={'/privateByHoc'} className="text-blue-600 hover:text-blue-800">privateByHoc</Link>
      <Link href={'/privateByRedirect'} className="text-blue-600 hover:text-blue-800">privateByRedirect</Link>
    </nav>
  )
}
