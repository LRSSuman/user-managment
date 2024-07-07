import Home from './pages/Home';
import User from './pages/User';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<User />} />
                <Route path='/contacts' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
