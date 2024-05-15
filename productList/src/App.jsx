
import './App.css'
import products from './data'
import FilterableProductTable from './components/FilterableProductTable'


function App() {

  return (
    <>
      <FilterableProductTable products={products} />
    </>
  )
}

export default App