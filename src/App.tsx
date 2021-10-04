
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import store from './redux/redux-saga/store';

function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}

export default App;
