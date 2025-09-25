import Content from './components/Content'
import CounterApp from './components/CounterApp'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className = "App">
      <Header user = "Thilaka" />
      <Content />
      <Footer user = "Muthappan" />
      <CounterApp />
    </div>
  )
}

export default App
