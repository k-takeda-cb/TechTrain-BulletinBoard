import { Routes, Route } from 'react-router-dom';
import ThreadsList from './ThreadsList.jsx';
import CreateThread from './CreateThread.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ThreadsList />} />
        <Route path="/threads/new" element={<CreateThread />} />
      </Routes>
    </>
  )
}

export default App
