import { NavLink } from "react-router-dom";
import styled from "styled-components";
const MainNavigation = () => {
  return (
    <Header>
      <div className='logo'> Expenses</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/expenses" activeClassName="active">
              All expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-expense" activeClassName="active">
              New expenses
            </NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};
export default MainNavigation

const Header= styled.header`
    width: 80%;
    height:  5rem;
    display: flex;
    padding: 0 10%;
    justify-content: space-between;
    align-items: center;
    background-color: #162b2b;

    .logo{
        font-size: 2rem;
        color:white;
    }

    nav ul{
        list-style: none;
        display: flex;
        margin:0;
        padding: 0;
    }

    nav li{
        margin-left: 1.5rem;
        font-size: 1.25rem;

    }

    nav a{
        text-decoration: none;
        color:white
    }

    nav a:hover,
    nav a:active,
    nav a.active{
        color: wheat;
    }
   

`