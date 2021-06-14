# [Udemy - React に入門した人のためのもっと React が楽しくなるステップアップコース完全版](https://www.udemy.com/course/react_stepup/)

## memo

`9. レンダリング最適化１(memo)`

React は親コンポが再レンダリングされたら、その子コンポたちも再レンダリングされる。

`import { memo } from 'react';`でコンポーネントをラップすることで、props が変わらない限り再レンダリングされることを防止することができる。  
基本 memo で囲めばいい。memo 化することによるコストはあるため、部品まで memo 適用することは避けること。

## useCallback

`useCallback`を利用することで、関数の再生成を防止することができる。

`useCallback`を適用しないままアロー関数をそのまま props として子コンポに渡すと、memo 化していても親コンポの再レンダリング時に子コンポの再レンダリングが発生する。

`useCallback`の第 2 引数の役割は useEffect と同じで見張る値。

> 基本的には useCallback で囲った関数内で使用する「変数」「関数」を[]に指定してあげれば正しい動作を保ったまま最適化できる

```jsx
const App = () => {
  const [open, setOpen] = useState(true);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className='App'>
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
```
