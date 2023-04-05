import Counter from "./components/Counter/Counter"
import { CountContextProvider } from "./context/CountContext"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
      </CountContextProvider >
      <GlobalStyles />

    </>
  )
}

export default App

//<>