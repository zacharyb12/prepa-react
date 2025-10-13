import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import CountComponent from './demo-component/components/components-reusable/count-component.tsx'
import Navbar from './demo-component/shared/navbar.tsx'
import Homepage from './demo-component/components/pages/homepage.tsx'
import NewProject from './demo-component/components/pages/Bases/newProject.tsx'
import StructureProject from './demo-component/components/pages/Bases/structureProject.tsx'
import Composants from './demo-component/components/pages/Bases/composants.tsx'
import Styles from './demo-component/components/pages/Bases/style.tsx'
import RenduConditionnel from './demo-component/components/pages/Bases/rendu-conditionnel.tsx'
import Collections from './demo-component/components/pages/Bases/collections.tsx'
import Navigation from './demo-component/components/pages/Bases/navigation.tsx'
import TsxExplication from './demo-component/components/pages/Bases/tsx-presentation.tsx'
import HooksTheoryPage from './demo-component/components/pages/Avances-one/hooks/hooks.tsx'
import HooksState from './demo-component/components/pages/Avances-one/hooks/state.tsx'
import FormulairesTheoryPage from './demo-component/components/pages/Avances-one/formulaires'
import CommunicationsTheoryPage from './demo-component/components/pages/Avances-one/communications.tsx'
import EffectTheoryPage from './demo-component/components/pages/Avances-one/hooks/effect.tsx'
import AjaxTheoryPage from './demo-component/components/pages/Avances-one/ajax.tsx'
import HooksPersoTheoryPage from './demo-component/components/pages/Avances-one/hooks/perso.tsx'
import DelegationTheoryPage from './demo-component/components/pages/Avances-one/delegation.tsx'
import RefTheoryPage from './demo-component/components/pages/Avances-one/hooks/ref.tsx'


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


        <Route path="/hooks" element={<HooksTheoryPage />} />
        <Route path="/hooks-state" element={<HooksState />} />
        <Route path="/form" element={<FormulairesTheoryPage />} />
        <Route path="/communication" element={<CommunicationsTheoryPage />} />
        <Route path="/hooks-effect" element={<EffectTheoryPage />} />
        <Route path="/ajax" element={<AjaxTheoryPage />} />
        <Route path="/hooks-perso" element={< HooksPersoTheoryPage />} />
        <Route path="/delegation" element={<DelegationTheoryPage />} />
        <Route path="/hooks-ref" element={<RefTheoryPage />} />


        {/* <Route path="/hooks-ref" element={<RouterTheoryPage />} />
        <Route path="/hooks-ref" element={<RoutesTheoryPage />} />
        <Route path="/hooks-ref" element={<HooksReactRouterTheoryPage />} />
        <Route path="/hooks-ref" element={<StateManagementTheoryPage />} />
        <Route path="/hooks-ref" element={<ReduxTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ReduxIntegrationTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<BonnesPratiquesReduxTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ReduxToolkitTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ActionCreatorsTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ReducersTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ConfigurationStoreTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<MiddlewareStoreTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ReactReduxTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ComposantProviderTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<HooksReactReduccxTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<HocConnectProviderTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ActionCreatorsTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<MiddlewaresReduxThunkTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ActionCreatorsAsyncTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ThunkApiTheoryPage />} /> */}
        {/* <Route path="/hooks-ref" element={<ActionCreatorConditionnalTheoryPage />} /> */}

        <Route path="*" element={<Homepage />} />

        {/* Demo */}
        <Route path="/counter" element={<CountComponent />} />

      </Routes>


    </Router>
    </>
  )
}

export default App
