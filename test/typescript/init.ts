/// <reference path='../../typescript/pg-promise' />

import * as pgPromise from 'pg-promise';

var pgp = pgPromise({
    capSQL: true,
    pgFormatting: true,
    pgNative: true
});

interface Test {
    hello:string;
}

var db = <pgPromise.IDatabase<Test>&Test>pgp('connection');

db.one('');

db.one(new pgPromise.QueryFile(''));

var ps1 = new pgp.PreparedStatement({name:'', text:''});
var ps2 = new pgp.PreparedStatement(ps1);

db.one(ps1.create(123));

db.one({
    name:'',
    text:''
});


var txMode = new pgPromise.txMode.TransactionMode();

function myTransaction(t) {
}

myTransaction['txMode'] = txMode;

db.tx(function (t) {
    var w = t.one('');
    var q = t.hello;
});
