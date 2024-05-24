import Pages from "./pages/Pages"
import Category from "./componenets/Category"
import{BrowserRouter} from 'react-router-dom'
import Search from "./componenets/Search"

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
     
    </div>
  )
}

export default App
