import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          {" "}
          {/* Fixed typo */}
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => alert("Components tab clicked!")}>
              Components
            </TabButton>
            <TabButton onClick={() => alert("JSX tab clicked!")}>JSX</TabButton>
            <TabButton onClick={() => alert("Props tab clicked!")}>
              Props
            </TabButton>
            <TabButton onClick={() => alert("State tab clicked!")}>
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
