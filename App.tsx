import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SermonsPage from './pages/SermonsPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import GalleryPage from './pages/GalleryPage';
import PastorsPage from './pages/PastorsPage';
import LivePage from './pages/LivePage';
import NewHerePage from './pages/NewHerePage';
import GivePage from './pages/GivePage';
import ChildrenPage from './pages/ChildrenPage';
import YouthPage from './pages/YouthPage';
import SmallGroupsPage from './pages/SmallGroupsPage';
import ContactPage from './pages/ContactPage';
import PrayerPage from './pages/PrayerPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pastors" element={<PastorsPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/new-here" element={<NewHerePage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/youth" element={<YouthPage />} />
          <Route path="/small-groups" element={<SmallGroupsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/prayer" element={<PrayerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
