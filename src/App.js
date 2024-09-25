import MyBoxs from './MyBoxs';
import MyHeader from './MyHeader';
import Button from './button';

function App() {
  return (
    <div >
      <MyHeader/>
      <div className='container'>
      <div>
      <MyBoxs/>
      <MyBoxs/>
      <MyBoxs/>
      <MyBoxs/>
      <MyBoxs/>
      <MyBoxs/>
      <MyBoxs/>
      </div>
      <div className='stylebox1'>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/><Button/>
      </div>
      </div>
    </div>
  );
}

export default App;
