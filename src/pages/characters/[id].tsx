import { api } from 'assets/api/api'
import { Character, Response } from 'assets/api/api.types'
import { getPageLayout } from 'components/layout/getPageLayout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {}
  const character = await api.rickAndMortyApi.getCharacter(id as string)
  if (!character) {
    return { notFound: true }
  }
  return { props: { character } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response: Response<Character> = await api.rickAndMortyApi.getCharacters()
  const paths = response.results.map(ch => ({
    params: { id: ch.id.toString() }
  }))


  return {
    paths,
    fallback: true
  }
}

type CharactersProps = { character: Character }

function Characters({ character }: CharactersProps) {
  const router = useRouter()
  if (router.isFallback) return <h1 className="text-center">Loading...</h1>

  const characterId = router.query.id
  const { name, image } = character

  return (
    <>
      <Head>
        <title>{`Character id ${characterId}`}</title>
      </Head>
      <div className="flex flex-col items-center">
        <div className=" flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full max-w-md text-left">
          <h2 className="text-xl font-semibold">{`${characterId}. ${name}`}</h2>
          <Image
            src={image}
            alt={name}
            className="my-4 rounded-md"
            width={400}
            height={400}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={() => router.push('/characters')}
            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-400 transition"
          >
            Go to Characters
          </button>
          {/*<Link href={`/characters`}>Go to Characters</Link>*/}
        </div>
      </div>
    </>
  )
}

Characters.getLayout = getPageLayout

export default Characters
