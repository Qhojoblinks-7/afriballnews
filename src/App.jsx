import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Import the Redux store
import Header from './components/common/MainHeader';
import HeroSection from './components/HeroSection';
import LiveScores from './components/LiveScores';
import UpcomingMatches from './components/UpcomingMatches';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSignInOut = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Provider store={store}>
      <Router>
        <Header isLoggedIn={isLoggedIn} handleSignInOut={handleSignInOut} />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/live-scores" component={LiveScores} />
          <Route path="/upcoming-matches" component={UpcomingMatches} />
          <Route path="/news" component={NewsSection} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
