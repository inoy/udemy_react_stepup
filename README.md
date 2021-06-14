# [Udemy - React に入門した人のためのもっと React が楽しくなるステップアップコース完全版](https://www.udemy.com/course/react_stepup/)

## memo

`9. レンダリング最適化１(memo)`

React は親コンポが再レンダリングされたら、その子コンポたちも再レンダリングされる。

`import { memo } from 'react';`でコンポーネントをラップすることで、props が変わらない限り再レンダリングされることを防止することができる。  
基本 memo で囲めばいい。memo 化することによるコストはあるため、部品まで memo 適用することは避けること。
