import Pages from "./pages/Pages"
import Category from "./componenets/Category"
import{BrowserRouter} from 'react-router-dom'
import Search from "./componenets/Search"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SiGreasyfork } from "react-icons/si";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <SiGreasyfork />
        <Logo to={'/'}>ChefThing </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
     
    </div>
  )
}

const Logo = styled(Link)`
text_decoration: none;
font-size: 1.rem;
font-weight: 400;
font-family: 'Lobster two', cursive;
text-decoration: none;
color: black;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;

}
`

export default App
