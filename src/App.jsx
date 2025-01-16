import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UesrGreeting from "./UserGreeting.jsx"

function App() {

  return(
    <>
      <Header/>
      <Button/>
      <Student name="John" age={30} isStudent={false}/>
      <Student name="Nimal" age={45} isStudent={false}/>
      <Student name="Ann" age={18} isStudent={true}/>
      <Student/>
      <UserGreeting isLoggedIn={true} uesrname="MyApp"/>
      <Food/>
      <Card/><Card/><Card/><Card/>
      <Footer/>
  
    </>
  );
  
}

export default App
