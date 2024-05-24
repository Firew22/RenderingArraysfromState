import Pages from "./pages/Pages"
import Category from "./componenets/Category"
import{BrowserRouter} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Category />
      <Pages />
      </BrowserRouter>
     
    </div>
  )
}

export default App
