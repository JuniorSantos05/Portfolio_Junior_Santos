import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/app.sass";

function App() {
  return (
    <div id="portifolio">
      <h1>Junior Santos</h1>
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
