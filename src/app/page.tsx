import landingPageData from "../../public/assets/data/json/landing-page-contents.json"
import PageWrapper from "@/components/pageWrapper"
import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"
import HeroSection from "@/components/heroSection"
import AboutSection from "@/components/aboutSection"
import FeatureSection from "@/components/featureSection"
import Loading from "@/components/loading"

async function fetchData(url: string) {
  try {
      const response = await fetch(url)
      const data = await response.json()
      return data.contents
  } catch (error) {
      console.error('fetch data fail! ' + error)
      return null
  }
  finally {
      console.log('fetch data finish!')
  }
}

export default async function Home() {
  // const landingPageContent = await fetchData('http://zifinity-backend-laravel.test/api/landing-page-contents')
  const landingPageContent = landingPageData.contents
  console.log(landingPageContent)
  const data = {
      'heroContents': landingPageContent.hero_contents,
      'aboutContents': landingPageContent.about_contents,
      'featureContents': landingPageContent.feature_contents
  }

  if(!data){
    return <Loading />
  }
  
  return (
    <PageWrapper>
      <Header />
      <Main>
        <HeroSection data={data.heroContents} />
        <AboutSection data={data.aboutContents} />
        <FeatureSection data={data.featureContents} />
      </Main>
      <Footer />
    </PageWrapper>
  )
}