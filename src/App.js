import React, { useState } from 'react';
import createBootableDrive from './createBootableDrive';

function App() {
  const [isoPath, setIsoPath] = useState('');
  const [usbDevice, setUsbDevice] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await createBootableDrive(isoPath, usbDevice);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Bootify</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ISO Path:
          <input type="file" onChange={(event) => setIsoPath(event.target.value)} />
        </label>
        <br />
        <label>
          USB Device:
          <input type="text" value={usbDevice} onChange={(event) => setUsbDevice(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Bootable Drive</button>
      </form>
      <pre>{output}</pre>
    </div>
  );
}

export default App;
