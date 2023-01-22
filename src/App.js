import logo from './logo.svg';
import './App.css';
import BluetoothModule from './BluetoothModule';
import VideoBarcodeReader from './VideoBarcodeReader';
import PrintBarcode from './PrintBarcode';


function App() {
  return (
    <div className="App">
      <BluetoothModule />

      <PrintBarcode />

      <br/>
      <VideoBarcodeReader />

    </div>
  );
}

export default App;
