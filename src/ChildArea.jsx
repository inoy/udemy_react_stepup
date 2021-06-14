import { memo } from 'react';

const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

const ChildArea = memo((props) => {
  const data = [...Array(2000).keys()];
  console.log('子コンポーネントがレンダリングされた');
  data.forEach(() => console.log('...'));

  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
