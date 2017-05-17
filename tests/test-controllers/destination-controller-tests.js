/* globals describe it beforeEach afterEach*/
"use strict";
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const data = {};

const controller = require("../../app/controllers/destination-controller")(data);

describe("NationalTouristSites/app/controllers/destination-controller.js tests", ()=>{
    it("Expect addComment to exist and be a function.", () => {
            expect(controller.addComment).to.exist;
            expect(controller.addComment).to.be.a("function");
        });
});