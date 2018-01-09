import * as Http from "http";

namespace ServerTest {
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server: Http.Server = Http.createServer();
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(port);

    function handleListen(): void {
        console.log("Server listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Ich höre Stimmen!!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.write("Ich höre<br> Stimmen!!");
        _response.end();
    }
}