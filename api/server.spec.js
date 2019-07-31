const supertest = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("GET is at /", () => {
    it("server is up at /", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
  });
});
