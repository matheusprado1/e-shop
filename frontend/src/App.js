import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
        </Routes>
        <Footer />
      </Container>

    </BrowserRouter>
  );
}

export default App;
