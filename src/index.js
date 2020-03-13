import  express from "express";
import Home from "./container/Home";
import {renderToString} from 'react-dom/server';
import React from 'react';
var app=express();

app.get("/",function(req,res){
    res.send(renderToString(<Home />))
});
var server=app.listen(3000);