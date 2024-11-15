import { Routes, Route } from 'react-router-dom'
import TopPage from './routes/TopPage'
import MyRecord from './routes/MyRecord'
import ColumnPage from './routes/ColumnPage'
import MainLayout from '../layouts/MainLayout'
import ComingSoon from './routes/ComingSoon'

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<TopPage />} />
        <Route path="/my-record" element={<MyRecord />} />
        <Route path="/columns" element={<ColumnPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Route>
    </Routes>
  )
} 