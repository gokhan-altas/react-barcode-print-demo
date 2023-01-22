import React, { useState } from 'react';

function BluetoothModule() {
  const [devices, setDevices] = useState([]);

  async function scanForDevices() {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['heart_rate'] }],
      });
      device.requestDevice({ acceptAllDevices: true}).then((device) => {});
      setDevices([...devices, device]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={scanForDevices}> Scan for devices </button>
      {devices.map((device) => (
        <p key={device.id}>{device.name}</p>
      ))}
    </div>
  );
}

export default BluetoothModule;

// import React, { useState } from "react";

// function BluetoothModule() {
//   const [devices, setDevices] = useState([]);

//   async function scanForDevices() {
//     try {
//       const device = await navigator.bluetooth
//         .requestDevice({ acceptAllDevices: true})
//         .then((device) => {
//           /* … */
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//       setDevices([...devices, device]);
//       // filters: [{ services: ['heart_rate'] }],


//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <button onClick={scanForDevices}>Scan for devices</button>
//       {devices.map((device) => (
//         <button >{device}</button>
//       ))}
//     </div>
//   );
// }

// export default BluetoothModule;
