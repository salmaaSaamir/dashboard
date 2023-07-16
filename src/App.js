import { Route  ,Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Teacher from './component/Teacher';
import Student from './component/Student';
import Editestudent from './component/Editestudent';
import Editeteacher from './component/Editeteacher';
import Addstudent from './component/Addstudent';
import Addteacher from './component/Addteacher';

function App() {
  return (
    <>
     <Routes>
    <Route path='/' element={<> <Navbar /><Home /> </>} />
    <Route path='/teacher' element={<><Navbar /> <Teacher /> </>} />
    <Route path='/student' element={<> <Navbar /><Student /> </>} />
    <Route path='/addstudent' element={<><Navbar /><Addstudent /> </>} />
    <Route path='/addteacher' element={<><Navbar /><Addteacher /> </>} />
    <Route path='/editestudent/:id' element={<><Navbar /><Editestudent /> </>} />
    <Route path='/editeteacher/:id' element={<><Navbar /> <Editeteacher /> </>} />
  </Routes>
    </>
  );
}

export default App;
