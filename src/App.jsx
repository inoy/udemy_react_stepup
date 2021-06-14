import { useState } from 'react';

import './styles.css';
import ChildArea from './ChildArea';

const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(true);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
};

export default App;
