import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
   const [darkSet, setDark] = useState(true);

   const handleTheme = () => setDark(!darkSet);

   return (
      <div className={'App ' + (darkSet ? 'light' : 'dark')}>
         <header>
            <h2>Shopster</h2>
            <button onClick={handleTheme}>
               {darkSet ? 'Dark' : 'Light'} Mode
            </button>
         </header>
         <ShoppingList items={itemData} />
      </div>
   );
}

export default App;
