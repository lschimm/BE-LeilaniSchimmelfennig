const server = require("../api/server.js");
const db = require("../data/dbConfig.js");
const Users = require("./users-router.js")

const supertest = require("supertest");

//testing nestled in here


describe("routes", () => {
    it("is db in development? let's find out~", () => {
        expect(process.env.DB).toBe("development");
    });

    describe("GET /", () => {
        it("should return 200", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        describe("/login", () => {
            it("i should get that error", () => {
                return supertest(server)
                    .post("/api/login")
                    .then(res => {
                        expect(res.status).toBe(500);
                    });
            });
        });
    });
});
