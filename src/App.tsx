
import './App.scss';
import Content from './components/content/content-main/Content';
import Sidebar from './components/sidebar/sidebar-main/Sidebar';

function App() {
   return (
      <div className="app">
         <Sidebar />
         <Content />
      </div>
   );
}

export default App;
