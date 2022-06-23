import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assign1 from './components/pages/Assign1';
import Assign2 from './components/pages/Assign2';
import Assign3 from './components/pages/Assign3';
import AllLabs from './components/pages/AllLabs';
import NotFound from './components/pages/NotFound';
import Layout from './components/common/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Assign1 />} />
          <Route path="/assignment-2" element={<Assign2 />} />
          <Route path="/assignment-3" element={<Assign3 />} />
          <Route path="/all-labs" element={<AllLabs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
