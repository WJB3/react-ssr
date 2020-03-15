import  express from "express";
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import Routes from '../routes';
import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

var app=express();
app.use(express.static("public"));

app.get("*",function(req,res){

    const reducer = (state = { wjb: "wjb",age:18 }, action) => {
        return state;
    }

    const store = createStore(reducer);

    const content =renderToString((
        <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
        </Provider>
        
    ));
    res.send(
        `
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
              
                <script src="/index.js"></script>
            </body>
        </html>
        `)
});
var server=app.listen(3000);