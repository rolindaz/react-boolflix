import { GlobalProvider } from "./contexts/GlobalContext"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"

function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <HomePage />
      </GlobalProvider>
    </>
  )
}

export default App
