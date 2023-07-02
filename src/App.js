import React, { useState, useMemo, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContext } from './UserContext';
import routes from './routes';


export default function App() {

    let userLocalStorage = null;

    if(localStorage.getItem('user_data') != null){
		userLocalStorage = JSON.parse(localStorage.getItem('user_data'));
    }

	const [user, setUser] = useState(userLocalStorage);

	const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

    return (
        <>
           <Router>
                <Suspense fallback={loading()}>
                    <Switch>
                        <UserContext.Provider value={value}>
							{routes.map((route, idx) => {
								return route.component ? (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									component={route.component}
								/>
								) : (null);
							})}
						</UserContext.Provider>
                    </Switch>
                </Suspense>
           </Router>
        </>
    )
}
