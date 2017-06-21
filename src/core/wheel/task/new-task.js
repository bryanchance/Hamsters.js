/*
* Title: Hamsters.js
* Description: Javascript library to add multi-threading support to javascript by exploiting concurrent web workers
* Author: Austin K. Smith
* Contact: austin@asmithdev.com
* Copyright: 2015 Austin K. Smith - austin@asmithdev.com
* License: Artistic License 2.0
*/

"use strict";

module.exports = (taskid, workers, order, dataType, fn, cb) => {
  tasks.push({
    id: taskid,
    workers: [],
    count: 0,
    threads: workers, 
    input: [],
    dataType: dataType || null,
    fn: fn,
    output: [], 
    order: order || null,
    callback: cb
  });
  return this.tasks[taskid];
},