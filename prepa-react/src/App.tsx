import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import CountComponent from './demo-component/components/components-reusable/count-component.tsx'
import Navbar from './demo-component/shared/navbar.tsx'
import Homepage from './demo-component/components/pages/homepage.tsx'
import NewProject from './demo-component/components/pages/Bases-1/newProject.tsx'
import StructureProject from './demo-component/components/pages/Bases-1/structureProject.tsx'
import Composants from './demo-component/components/pages/Bases-1/composants.tsx'
import Styles from './demo-component/components/pages/Bases-1/style.tsx'
import RenduConditionnel from './demo-component/components/pages/Bases-1/rendu-conditionnel.tsx'
import Collections from './demo-component/components/pages/Bases-1/collections.tsx'
import Navigation from './demo-component/components/pages/Bases-1/navigation.tsx'
import TsxExplication from './demo-component/components/pages/Bases-1/tsx-presentation.tsx'


function App() {
  return (  
    <>

    <Router>

      <Navbar />

      <Routes>
        {/* Menu */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/tsx" element={<TsxExplication />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/structure-project" element={<StructureProject />} />
        <Route path="/composants" element={<Composants />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/rendu-conditionnel" element={<RenduConditionnel />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/navigation" element={<Navigation />} />

        {/* Demo */}
        <Route path="/counter" element={<CountComponent />} />

      </Routes>


    </Router>
    </>
  )
}

export default App
