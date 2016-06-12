import {Request, Response} from "express";
var express = require('express');
var router = express.Router();


export interface Network {
    _id: string;
}

export interface App {
    _id: string;
    title: string;
    description: string;
}

export interface Kiosk {
    _id: string;
    networkId: string;
}

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
    res.render('index', { title: 'Network by tumbi' })
});

module.exports = router;