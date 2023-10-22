import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../component/Home";
import AddProduct from "../component/products/addProduct";
import Login from "../component/LoignSignup/Login";
import MyProdcut from "../component/Products/MyProdcut";

const Routes = createBrowserRouter([
    {
        path :  "/",
        element : <Layout></Layout> ,
        
        children : [
             {
                 path : "/",
                 element : <Home></Home>,
                 loader : () => fetch ('/brand.json')
             },
            
             {
                path : "/addProduct",
                element: <AddProduct />
            },
             
            {
                path : "/myProduct",
                element: <MyProdcut />
            },
             {
                 path : "/login",
                 element: <Login></Login>
             },
             
          
        ]
     }
]);

export default Routes;
