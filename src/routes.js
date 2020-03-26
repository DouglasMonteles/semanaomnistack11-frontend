import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';

/* 
    react-router verifica se o 'path' raiz começa com o que foi indicado na url, caso começe com
    o indicado, ele redireciona. O 'exact' verifica exatamente o caminho raiz
*/

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}