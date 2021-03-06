import { useState, useCallback, useMemo } from 'react';

import './styles.css';
import ChildArea from './ChildArea';

const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(true);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};

export default App;
