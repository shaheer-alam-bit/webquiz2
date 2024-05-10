import { NotificationContainer } from 'react-notifications';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserPage from './components/UserPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile';
import FAQ from './components/FAQ';

function App() {
  const { loggedIn } = useSelector(state => state.user)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={loggedIn ? <UserPage /> : <Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
        <NotificationContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
