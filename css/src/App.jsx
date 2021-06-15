import './styles.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';

const App = () => {
  return (
    <div className='App'>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
};

export default App;
