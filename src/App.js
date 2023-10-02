import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {routes} from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { Fragment } from 'react';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {
            routes.map((route) => {
              const Page = route.page
              const LayOut = route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route
                  path={route.path}
                  element={
                    <LayOut>
                      <Page />
                    </LayOut>
                  }
                />
              );
            })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
