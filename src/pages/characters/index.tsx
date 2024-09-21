import { api } from '../../../assets/api/api'
import { Character, Response } from '../../../assets/api/api.types'
import { Header } from '../../../components/header/Header'
import { getLayout } from '../../../components/layout/getLayout'

export const getStaticProps = async () => {
  const characters = await api.rickAndMortyApi.getCharacters()
  return { props: { characters } }
}

type CharactersProps = { characters: Response<Character> }

function Characters({ characters }: CharactersProps) {
  return <>
    <Header />
    <h1 className={'my-3'}>characters</h1>
    <div className={'flex flex-wrap  justify-center items-center'}>
      {characters.results.map(ch => <div key={ch.id} className={'flex-1 basis-1/3'}>
        <span>{ch.name}</span>
        <img src={ch.image} />
      </div>)}
    </div>
  </>
}

Characters.getLayout = getLayout

export default Characters