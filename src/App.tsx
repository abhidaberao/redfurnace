import ClerkDash from './pages/Clerk/ClerkDash';
import style from './App.module.scss';
import AccountantDash from './pages/Accountant/AccountantDash';
import AdminDash from './pages/Admin/AdminDash';

function App() {
  return (
    <div className={style.app}>
        <ClerkDash />
    </div>
  );
}

export default App;
