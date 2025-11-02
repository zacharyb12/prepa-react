import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./demo-component/shared/navbar";
import Homepage from "./demo-component/components/pages/homepage";
import TsxExplication from "./demo-component/components/pages/Bases/tsx-presentation";
import NewProject from "./demo-component/components/pages/Bases/newProject";
import StructureProject from "./demo-component/components/pages/Bases/structureProject";
import Composants from "./demo-component/components/pages/Bases/composants";
import Styles from "./demo-component/components/pages/Bases/style";
import RenduConditionnel from "./demo-component/components/pages/Bases/rendu-conditionnel";
import Collections from "./demo-component/components/pages/Bases/collections";
import Navigation from "./demo-component/components/pages/Bases/navigation";
import HooksTheoryPage from "./demo-component/components/pages/Avances-one/hooks/hooks";
import HooksState from "./demo-component/components/pages/Avances-one/hooks/state";
import FormulairesTheoryPage from "./demo-component/components/pages/Avances-one/formulaires";
import CommunicationsTheoryPage from "./demo-component/components/pages/Avances-one/communications";
import EffectTheoryPage from "./demo-component/components/pages/Avances-one/hooks/effect";
import AjaxTheoryPage from "./demo-component/components/pages/Avances-one/ajax";
import HooksPersoTheoryPage from "./demo-component/components/pages/Avances-one/hooks/perso";
import DelegationTheoryPage from "./demo-component/components/pages/Avances-one/delegation";
import RefTheoryPage from "./demo-component/components/pages/Avances-one/hooks/ref";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tsx" element={<TsxExplication />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/structure-project" element={<StructureProject />} />
        <Route path="/composants" element={<Composants />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/rendu-conditionnel" element={<RenduConditionnel />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/hooks" element={<HooksTheoryPage />} />
        <Route path="/hooks-state" element={<HooksState />} />
        <Route path="/form" element={<FormulairesTheoryPage />} />
        <Route path="/communication" element={<CommunicationsTheoryPage />} />
        <Route path="/hooks-effect" element={<EffectTheoryPage />} />
        <Route path="/ajax" element={<AjaxTheoryPage />} />
        <Route path="/hooks-perso" element={<HooksPersoTheoryPage />} />
        <Route path="/delegation" element={<DelegationTheoryPage />} />
        <Route path="/hooks-ref" element={<RefTheoryPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;