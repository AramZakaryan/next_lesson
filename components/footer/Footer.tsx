import Link from 'next/link'

export const Footer = () => {
  return <div className={'fixed flex justify-start gap-2 px-2 bg-amber-300 h-7 items-end bottom-0 left-0 right-0'}>
    <h6>contacts</h6>
    <Link href="/">go_to_main</Link>
  </div>

}