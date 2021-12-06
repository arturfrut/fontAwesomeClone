import React from 'react'
import './styles/styles.scss'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

import { MainScreen } from './components/screens/MainScreen'
import { AddScreen } from './components/screens/AddScreen';
import { RoadmapScreen } from './components/screens/RoadmapScreen';
import { NotFoundScreen } from './components/screens/NotFoundScreen';
import { FeedbackScreen } from './components/screens/FeedbackScreen';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
            <Route path="Main" element={<MainScreen />} />
            <Route path="Add" element={<AddScreen />} />
            <Route path="Roadmap" element={<RoadmapScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
            <Route path='Feedback' element={<FeedbackScreen />}>
              <Route path=":invoiceId" element={<FeedbackScreen />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}


