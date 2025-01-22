import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body';
import About from './components/About'
import Contact from './components/Contact';
import Error from './components/Error'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ResturantMenu from './components/ResturantMenu'



// const parent = React.createElement(
//     'div', 
//     {id:'parent'}, [
//         React.createElement('div', 
//             {id:'child'}, 
//             [
//             React.createElement('h1', {}, ' Hi Manisha' ), React.createElement('h2', {}, 'Riya' )], ),
//             React.createElement('div', 
//             {id:'child2'}, 
//             [React.createElement('h1', {}, 'Manisha' ), React.createElement('h2', {}, 'Riya' )])
//     ]
//         )



const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}





// const appRouter = BrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout />,
//     },
//     {
//         path: "/about",
//         element: <About />,
//     },{
//         path: "/contact",
//         element: <About />,
//     }
// ])

// Main Router Component
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Body />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resturant/:restID" element={<ResturantMenu />} />
                </Route>
              

                <Route path="*" element={<Error />} /> {/* For undefined routes */}
            </Routes>
        </BrowserRouter>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


