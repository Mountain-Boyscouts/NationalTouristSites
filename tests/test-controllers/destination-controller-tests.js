/* globals describe it beforeEach afterEach*/
"use strict";
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const data = {};
const req = {
    body: {
        content: "Some comment",
        commentId: "2",
        name: "sv. Aleksandar Nevski",
        description: "Nai-golqmata curkva na Balkanite",
        imagePath: "put"
    },
    params: {
        id: "2",
        username: "Vasil"
    },
    user: { username: "Vasil",
            _id: "5" 
    }
};

const controller = require("../../app/controllers/destination-controller")(data);

describe("NationalTouristSites/app/controllers/destination-controller.js tests", ()=>{
    let res = {};
    beforeEach(() => {
            res.redirect = sinon.stub();
            data.addCommentToDestination = sinon.stub();
            data.addCommentToDestination.returns(Promise.resolve());
            data.createDestination = sinon.stub();
            data.createDestination.returns(Promise.resolve());
        });

        afterEach(() => {
            res.redirect = null;
            data.addCommentToDestination = null;
            data.createDestination = null;
        });

    it("Expect addComment to exist and be a function.", () => {
            expect(controller.addComment).to.exist;
            expect(controller.addComment).to.be.a("function");
        });
    it("Expect addDestination to exist and be a function",()=>{
        expect(controller.addDestination).to.exist;
        expect(controller.addDestination).to.be.a("function");
        });
    it("Expect addComment to call data.addCommentToDestination with correct params once.", () => {
            controller.addComment(req, res);
            expect(data.addCommentToDestination.calledOnce).to.be.true;
            expect(data.addCommentToDestination.calledWith(req.params.id, req.body.content, req.user.username, req.user._id)).to.be.true;
        });
    it("Expect addDestination to call data.createDestination with correct params once.", () => {
            controller.addDestination(req, res);
            expect(data.createDestination.calledOnce).to.be.true;
            expect(data.createDestination.calledWith(req.body.name, req.body.description, req.body.imagePath)).to.be.true;
        });
});