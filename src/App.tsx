
import { HashRouter, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import store from './redux/store';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { auth0Config } from './config/auth0.config';
import AuthChecker from './auth/AuthChecker'

function App() {
  
  return (
    <HashRouter>
      <Navbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                <AuthChecker>
                <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
              }
              />
            )) }
          </Routes>
        </Provider>
    </HashRouter>
  )
}

export default App
