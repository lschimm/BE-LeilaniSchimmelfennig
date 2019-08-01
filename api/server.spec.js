const server = require("./server.js");
const supertest = require("supertest")

describe("server", () => {
  describe("GET is at /", () => {
    it("server is up at /", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
    describe("should return 200", () => {
      it("server things", () => {
        return supertest(server)
          .get('/')
          .then(res => {
            expect(res.status).toBe(200)
          })
      })
    })
    it('should return some JSON data', () => {
      return supertest(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/)
          expect(res.type).toBe('application/json')
        })
    })
  });
});

