import './App.css';

function App() {
  return (
    <div className='container'>
      <div>
        <ul className='clock'>
          <li className='numbers'>
            <span>1</span>
          </li>
          <li className='numbers'>
            <span>2</span>
          </li>
          <li className='numbers'>
            <span>3</span>
          </li>
          <li className='numbers'>
            <span>4</span>
          </li>
          <li className='numbers'>
            <span>5</span>
          </li>
          <li className='numbers'>
            <span>6</span>
          </li>
          <li className='numbers'>
            <span>7</span>
          </li>
          <li className='numbers'>
            <span>8</span>
          </li>
          <li className='numbers'>
            <span>9</span>
          </li>
          <li className='numbers'>
            <span>10</span>
          </li>
          <li className='numbers'>
            <span>11</span>
          </li>
          <li className='numbers'>
            <span>12</span>
          </li>
          <li className='hours'>
            <span>hour</span>
          </li>
          <li className='minutes'>
            <span>minute</span>
          </li>
          <li className='seconds'>
            <span>second</span>
          </li>
        </ul>
        <div>
          <ul className='digital-clock'>
            <li className='digital-hours'>10</li>
            <li className='digital-minutes'>12</li>
            <li className='digital-seconds'>22</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
