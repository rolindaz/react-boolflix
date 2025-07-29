import { GlobalProvider } from "./contexts/GlobalContext"
import HomePage from "./pages/HomePage"


function App() {

  return (
    <>
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    </>
  )
}

export default App
