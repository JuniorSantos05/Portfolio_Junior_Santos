import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/app.sass";

function App() {
  return (
    <div id="portifolio">
      <h1>Junior Santos</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
