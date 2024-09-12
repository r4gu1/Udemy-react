import Navbar from './components/Navbar'
import Selecting from './components/Selecting'
import Sale from './components/Sale'
import Recommanded from './components/Recommanded'
import Topics from './components/Topic'
import Popular from './components/Popular'
import Footer from './components/Footer'

function App(){
    return (<div>
        <Navbar />
        <Selecting />
        <Sale />
        <Recommanded />
        <Topics />
        <Popular />
        <Footer />
      </div>)
}
export default App