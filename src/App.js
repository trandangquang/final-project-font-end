import { Fragment, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes';
import { isJsonString } from './utils';
import jwt_decode from 'jwt-decode';
import * as UserService from './services/UserService';
import { useDispatch } from 'react-redux';
import {updateUser} from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const {storageData, decoded} = handleDecoded()
      if(decoded?.id) {
        handleGetDetailsUser(decoded?.id, storageData)
    }
  }, []);

  const handleDecoded = () => {
        let storageData = localStorage.getItem('access_token');
        let decoded = {}
        if (storageData && isJsonString(storageData)) {
          storageData = JSON.parse(storageData);
           decoded = jwt_decode(storageData);
        }
        return {decoded, storageData}
  }

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();
        config.headers['token'] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const handleGetDetailsUser = async (id, token )  => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({...res?.data, access_token: token}))
  }

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
