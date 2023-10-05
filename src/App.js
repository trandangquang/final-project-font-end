import axios from 'axios';
import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes';
import { useQuery } from '@tanstack/react-query';

function App() {
  const fetchApi = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/product/get-all`
    );
    return res.data
  };

    const query = useQuery({ queryKey: ['app'], queryFn: fetchApi });
    console.log('query', query)


  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const LayOut = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
              key={route.path}
                path={route.path}
                element={
                  <LayOut>
                    <Page />
                  </LayOut>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
