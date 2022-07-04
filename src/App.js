import React from 'react';

import Header from './features/Header/Header';
import Home from './features/Home/Home';
import Subreddits from './features/Subreddits/Subreddits';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Home />
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    );
};

export default App;