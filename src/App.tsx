import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  // tudo que tiver dentro do authcontext.provider terá acesso ao context
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
