// core modules are buld-in modules(fundtions) like console.log("name") and etc..
// types of core modules 1. Global core modules( jinhe import na krna pade), non global modules( jinhe hume omort krna pade) like (const myfile = require('module-name('fs')'))

const { object } = require('framer-motion/client');
const myfile = require('fs');
//ab is mai file system ka instance me ne myfile k name se bana diya hai jo k mere fs k sare methodes ko asses kr sakta ho 
console.log("DEVOPS Engineer")
console.log("noode js core modules")

myfile.writeFileSync("coreModules.txt", "this is the tsxt in it")
//ye module koi b 1 file bnaye ga or os k ander text likh de ga


