import Layout from "./Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Details from './Details';
import List from './List';

function App() {
  return (
      <BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Layout />} />
        <Route path="/" element= {<List />} />
				<Route path="/Details/:id" element={<Details />} />
			</Routes>
      </BrowserRouter>
  );
}

export default App;
