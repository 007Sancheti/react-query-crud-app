import { Switch, Route } from 'react-router-dom'
import BooksList from './BooksList/BooksList';

function App() {
  return (
    <Switch>
      <Route path="/">
        <BooksList />
      </Route>
    </Switch>
  );
}

export default App;
