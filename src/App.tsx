import {
  NavLink,
  NavLinkRenderProps,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import styles from "./App.module.css";
import Main from "./components/Main/Main";
import Albums from "./components/Albums/Albums";
import AlbumCard from "./components/AlbumCard/AlbumCard";
import About from "./components/About/About";

function App() {
  const getLinkClass = ({ isActive }: NavLinkRenderProps) =>
    isActive ? styles.active : "";

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <header>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={getLinkClass}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/albums" className={getLinkClass}>
              Albums
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getLinkClass}>
              About project
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<AlbumCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
