import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

// Admin components
import AdminLayout from './components/admin/AdminLayout';
import LoginPage from './pages/admin/LoginPage';
import DashboardHomePage from './pages/admin/DashboardHomePage';
import ManageSermonsPage from './pages/admin/ManageSermonsPage';
import SermonForm from './pages/admin/SermonForm';
import ManageEventsPage from './pages/admin/ManageEventsPage';
import EventForm from './pages/admin/EventForm';
import ManagePastorsPage from './pages/admin/ManagePastorsPage';
import PastorForm from './pages/admin/PastorForm';
import ManageGalleryPage from './pages/admin/ManageGalleryPage';
import ProtectedRoute from './auth/ProtectedRoute';

const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Header />}
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

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<DashboardHomePage />} />
            <Route path="sermons" element={<ManageSermonsPage />} />
            <Route path="sermons/new" element={<SermonForm />} />
            <Route path="sermons/edit/:id" element={<SermonForm />} />
            <Route path="events" element={<ManageEventsPage />} />
            <Route path="events/new" element={<EventForm />} />
            <Route path="events/edit/:id" element={<EventForm />} />
            <Route path="pastors" element={<ManagePastorsPage />} />
            <Route path="pastors/new" element={<PastorForm />} />
            <Route path="pastors/edit/:id" element={<PastorForm />} />
            <Route path="gallery" element={<ManageGalleryPage />} />
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
