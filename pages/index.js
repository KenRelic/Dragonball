import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

// import styles from '../components/styles/Home.module.css';
import { StyledBanner } from '../components/styles/banner.styles'
import { StyledCard } from '../components/styles/card.styles'
import { StyledGrid } from '../components/styles/grid.styles'
import { StyledFooter } from '../components/styles/footer.styles'
import { StyledMain } from '../components/styles/main.styles'
import { StyledLayout } from '../components/styles/layout.styles'

import Card from '../components/card/Card'

const bgImage = "/db.png";


const characters = [
  {
    "id": "1",
    "name": "Kakarroto (Goku)",
    "race": "Saiyan",
    "gender": "Male",
    "currentPlanet": "Earth",
    "status": "Alive",
    "image": "/goku.jpg",
    "class": "Mastered Ultra Instinct",
    "group": "Z Fighters"
  },
  {
    "id": "2",
    "name": "Vegeta",
    "race": "Saiyan",
    "gender": "Male",
    "currentPlanet": "Earth",
    "status": "Alive",
    "image": "/vegeta.jpg",
    "class": "SS Evolution",
    "group": "Ex. Frieza Force"
  },
  {
    "id": "3",
    "name": "Gohan",
    "race": "Half-Saiyan",
    "gender": "Male",
    "currentPlanet": "Earth",
    "status": "Alive",
    "image": "/gohan.jpg",
    "class": "Mystic Gohan",
    "group": "Z Fighters"
  },
  {
    "id": "4",
    "name": "Frieza",
    "race": "Unknown",
    "gender": "Male",
    "currentPlanet": "In Space",
    "status": "Dead",
    "image": "/frieza.jpg",
    "level": "Golden Frieza",
    "group": "Leader of Frieza Force"
  }
]

function Home(props) {
  return (
    <div>
      <Head>
        <title>DB Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {
        // <p style={{fontSize:'3rem'}}>{JSON.stringify(props.profile)}</p>
      }
      <StyledLayout>
        <div className="wrapper">
          <StyledBanner display="flex" color="#000217"  mode="normal">
           <Image src={bgImage} width={400} height={200} />
          </StyledBanner>
          <StyledMain>
            <h1>Character profile</h1>
            <StyledGrid>
              {
                props.profile.map((character) => (
                <StyledCard key={character.id}>
                  <Card
                    key={character.id}
                    name={character.name}
                    gender={character.gender}
                    race={character.race}
                    status={character.status}
                    level={character.level}
                    currentPlanet={character.currentPlanet}
                    group={character.group}
                    image={character.image}
                  />
                </StyledCard>))
              }
            </StyledGrid>
          </StyledMain>

          <StyledFooter>
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />{' '}
              Made by KenChi
          </StyledFooter>
        </div>
      </StyledLayout>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            color: #333;
            background-color:#000217;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}



export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.enye.tech/v1/challenge/records')
  const data = await res.json();
  // console.log(data.records.profiles)

  // By returning {props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      profile: characters
    }
  }
}



export default Home;