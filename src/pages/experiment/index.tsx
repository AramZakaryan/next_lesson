import { getPageLayout } from 'components/layout/getPageLayout'
import Head from 'next/head'
import fs from 'fs/promises'
import { join } from 'node:path'
import * as process from 'node:process'


export const getStaticProps = async () => {
  let title: string
  try {
    const filePath = join(process.cwd(), 'public', 'staticData', 'staticData.json')
    const jsonData = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(jsonData)
    title = data.title
  } catch {
    title = 'no title'
  }
  return {
    props: { title },
    revalidate: 30 // 30 seconds
  }
}


type ExperimentProps = { title: string }

function Index({ title }: ExperimentProps) {


  return (
    <>
      <Head>
        <title>List of Characters</title>
      </Head>
      <h1>Experiment</h1>
      <h2>
        {title}
      </h2>
    </>
  )
}

Index.getLayout = getPageLayout

export default Index



 