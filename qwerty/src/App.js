import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Users from './Components/Users/Users'
import './style/App.scss';

function App() {

  const users = [
    {
      name: 'Безлимитный 300',
      valey:'руб',
      number:'300',
      long:'/мес',
      speed:'до 10 Мбит/сек',
      text:'Объём включённого трафика не ограничен',
      color: 'aqua'
    },
    {
      name: 'Безлимитный 450',
      valey:'руб',
      number:'450',
      long:'/мес',
      speed:'до 50 Мбит/сек',
      text:'Объём включённого трафика не ограничен',
      color: 'green'
    },
    {
      name: 'Безлимитный 550',
      valey:'руб',
      number:'550',
      long:'/мес',
      speed:'до 100 Мбит/сек',
      text:'Объём включённого трафика не ограничен',
      color: 'red'
    },
    {
      name: 'Безлимитный 1000',
      valey:'руб',
      number:'1000',
      long:'/мес',
      speed:'до 200 Мбит/сек',
      text:'Объём включённого трафика не ограничен',
      color: 'black'
    }

  ]
    
  

  return (
    <div className="App">
     <Users name ={users[0].name} valey={users[0].valey} number = {users[0].number} long = {users[0].long} speed = {users[0].speed} text = {users[0].text} color = {users[0].color} />
     <Users name ={users[1].name} valey={users[1].valey} number = {users[1].number} long = {users[1].long} speed = {users[1].speed} text = {users[1].text} color = {users[1].color}/>
     <Users name ={users[2].name} valey={users[2].valey} number = {users[2].number} long = {users[2].long} speed = {users[2].speed} text = {users[2].text} color = {users[2].color}/>
     <Users name ={users[3].name} valey={users[3].valey} number = {users[3].number} long = {users[3].long} speed = {users[3].speed} text = {users[3].text} color = {users[3].color}/>
    
    </div>
  );
}

export default App;
