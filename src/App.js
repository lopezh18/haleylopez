import { Routes, Route } from 'react-router-dom';

import Nav from './routes/Nav';
import Home from './routes/Home';
import Projects from './routes/Projects';
import NotFound from './routes/NotFound';

const  App = () => {
  return (
    <Routes>
      <Route path = '/' element={<Nav/>} >
        <Route index element={<Home/>}/>
        <Route path='/projects/*' element={<Projects/>}/>
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
