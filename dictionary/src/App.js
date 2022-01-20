import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import RandPos from "./randPosPath";
import SearchPage from "./searchPage";
import WordPos from "./wordPosPath";
import Word from "./wordPath";

function App() {
  return (
    <Router><div><Routes>
      <Route path={'/'} element={<SearchPage />}></Route>
      <Route path={'/part-of-speech/:part'} element={<RandPos />}></Route>
      <Route path={'/:word'} element={<Word />}></Route>
      <Route path={'/:word/:partOfSpeech'} element={<WordPos />}></Route>
    </Routes>
    </div></Router>
  );
}

export default App;
