import { requests } from "./request";
import { Row } from './components/Row'; // Row コンポーネントをインポート
import { Banner } from './components/Banner'; // Banner コンポーネントをインポート
import { Header } from './components/Header'; // Header コンポーネントをインポート

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}
  export default App;
