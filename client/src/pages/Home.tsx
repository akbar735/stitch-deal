import SearchAppBar from '../components/AppBar';
import Container from '../components/Container'
import ImgMediaCard from '../components/Card';

export default function Home() {
  return (
    <div className="App">
        <SearchAppBar />
            <Container>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(() =>(
                    <ImgMediaCard />
                ))}
            </Container>
    </div>
  );
}