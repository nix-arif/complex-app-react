import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeGuest from './screens/home-guest';
import HomeDashboard from './screens/home-dashboard';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeGuest />} />
				<Route path="/dashboard" element={<HomeDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
