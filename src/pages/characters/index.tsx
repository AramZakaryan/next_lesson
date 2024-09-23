import { api } from 'assets/api/api'
import { Character, Response } from 'assets/api/api.types'
import { getPageLayout } from 'components/layout/getPageLayout'
import Link from 'next/link'
import Head from 'next/head'
import Image  from 'next/image'


export const getStaticProps = async () => {
  const characters = await api.rickAndMortyApi.getCharacters()
  return { props: { characters } }
}

type CharactersProps = { characters: Response<Character> }

function Characters({ characters }: CharactersProps) {


  return (
    <>
      <Head>
        <title>List of Characters</title>
      </Head>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {characters.results.map((ch) => {
          const statusColor = ch.status === 'Alive' ? 'green' : ch.status === 'Dead' ? 'red' : 'yellow'
          return (
            <div
              key={ch.id}
              className="flex-1 basis-1/4 bg-gray-800 rounded-lg shadow-lg p-4 text-center text-white"
            >
              <Link href={`/characters/${ch.id}`}>
                <Image
                  className={'absolute m-1'}
                  src={`/images/${statusColor}.png`}
                  alt={'green round'}
                  width={60}
                  height={60}

                />
                <Image
                  src={ch.image}
                  alt={ch.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                  width={200}
                  height={200}
                />
                <h2 className="text-xl font-semibold">{ch.name}</h2>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

Characters.getLayout = getPageLayout

export default Characters


