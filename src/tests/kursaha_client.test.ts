import KursahaClient from "../kursaha_client";

test("connection test", () => {
    const apiKey = "";
    const kClient: KursahaClient = new KursahaClient(apiKey)
    const respsonse = kClient.edd.checkConnection()
    expect(respsonse).toBe("pong");
})