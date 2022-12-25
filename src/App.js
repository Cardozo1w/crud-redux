import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Productos } from "./components/Productos";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import {store} from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
      <section className="bg-gray-50">
        <Header />
        <div className="h-screen">
          <div className="max-w-7xl mx-auto mt-5">
            <Routes>
              <Route path="/" element={<Productos />} />
            </Routes>
          </div>
        </div>
      </section>
      </Provider>
    </Router>
  );
}

export default App;
