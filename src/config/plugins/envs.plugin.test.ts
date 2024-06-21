import { envs } from "./envs.plugin";


describe("envs.plugins.ts", () => {
    test("should return env options", () => {
        console.log(envs);
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'jaiverdiaztoro@gmail.com',
            MAILER_SECRET_KEY: 'kwerjsrpjfyqwufg',
            PROD: false,
            MONGO_URL: 'mongodb://dario:123456789@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'dario',
            MONGO_PASS: '123456789'
        });
    });

    test("should return error if not found env", async () => {
        jest.resetModules();
        process.env.PORT = "ABC";

        try {
            await import("./envs.plugin");
            expect(true).toBe(false);
        } catch (error) {
            console.log(error);
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }
    });
});