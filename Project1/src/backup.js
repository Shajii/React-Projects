import './App.css';
import Header from "./Header";
import Todos from "./Todos";
import Footer from "./Footer";
import Test1 from "./Test1";

function App() {
  let todos = [
        {sno:1, title: 'Take first class', Des: 'Zoom'},
        {sno:2, title: 'Take sec class', Des: 'Skype'},
        {sno:3, title: 'Take third class', Des: 'Teams'}
  ];
  return (
    <>
    <Header/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}
