// styles
import './App.css';

// images
import NewYear from './assets/newyear.jpeg';

// hooks
import useCountdown from './hooks/useCountdown';

// components
import Title from './components/Title';
import Counter from './components/Counter';

function App() {

  const [day,hour,minute,second] = useCountdown('Jan 1, 2024 00:00:00')
  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
      <div className='container'>
        <Title title='New Year Countdown 2024'/>
        <div className='countdown-container'>
          <Counter title='Days' number={day}/>
          <Counter title='Hours' number={hour}/>
          <Counter title='Minutes' number={minute}/>
          <Counter title='Seconds' number={second}/>
        </div>
      </div>
    </div>
  );
}

export default App;
