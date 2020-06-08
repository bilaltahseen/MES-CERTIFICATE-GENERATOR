import React from 'react';

import Certificate from './Certificate';
import { saveSvgAsPng } from 'save-svg-as-png';

function App() {
  const [Name, setName] = React.useState('');
  const [Key, setKey] = React.useState('');
  const [isChecked, setChecked] = React.useState(false);

  const saveCertificateHandler = () => {
    if (Name === '') {
      alert('Please enter a name');
    } else {
      setChecked(true);
      saveSvgAsPng(
        document.getElementById('svgCert'),
        `${Name}-Certificate-${new Date().toGMTString()}`
      );
      setTimeout(() => {
        setChecked(false);
        setName('');
      }, 1000);
    }
  };
  React.useEffect(() => setKey(prompt('Enter Your Key')), []);
  return (
    <React.Fragment>
      {Key === 'MES-CERT-KEY_ASBS611232' ? (
        <div>
          <Certificate Name={Name} isChecked={isChecked} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: 10,
            }}
          >
            <input
              placeholder='Enter Name'
              style={{ height: '20px', width: '200px' }}
              type='text'
              value={Name}
              maxLength='25'
              onChange={(event) => setName(event.target.value)}
            />
            <button onClick={saveCertificateHandler}>Save Certificate</button>
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default App;
