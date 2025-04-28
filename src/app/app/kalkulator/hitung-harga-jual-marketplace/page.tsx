import PageWrapper from "@/components/pageWrapper"
import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"
import KalkulatorHargaJualMarketplace from "./components/kalkulatorHargaJualMarketplace"


export default async function Home() {
  return (
    <PageWrapper>
      <Header />
      <Main>
        <KalkulatorHargaJualMarketplace />
      </Main>
      <Footer />
    </PageWrapper>
  )
}