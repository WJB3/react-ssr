const  express=require("express");
import Home from "./container/Home";
import {renderToString} from 'react-dom/server';
import React from 'react';
const content =renderToString(<Home />);
var app=express();

app.get("/",function(req,res){
    res.send(
        `
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                ${content}
            </body>
        </html>
        `)
});
var server=app.listen(3000);