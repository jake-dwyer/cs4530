import { createServer as createHttpServer } from "http";
import { Server, Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from './shared';

const corsParams = {
    origin: "http://localhost:8080",  // Updated to match client port
    methods: ["GET", "POST"]
}

// to keep track of connected clients
const clients: Record<string, string> = {};

export default function createServer() {
    const httpServer = createHttpServer();
    const io = new Server
        <ClientToServerEvents, ServerToClientEvents>
        (httpServer, { cors: corsParams });
        io.on("connection", (socket) => {
            console.log('server reports new connection')
            startServerHandlers(socket)       
        })
    console.log('server.ts: Listening on port 8080')
    httpServer.listen(8080);

}

function startServerHandlers(socket: Socket<ClientToServerEvents, ServerToClientEvents>){
    socket.on("hello", (clientName: string) => {
    clients[socket.id] = clientName;
    console.log(
      `New client: ${clientName}. Clients Connected: ${Object.keys(clients).length}`,
    );

    console.log(`sending initial ping to ${clientName}`);
    socket.emit('ping', 0); // send initial ping

    socket.on('pong', (clientName: string, count: number) => {
        console.log(`server received pong from ${clientName} with count ${count}`);
        if (count < 5) {
           socket.emit('ping', count + 1); // reply with ping n+1
        } else {
            console.log(`server disconnecting ${clientName} after 5 pings`);
            socket.disconnect();
        }
    })
    
    socket.on('goodbye', (clientName: string) => {
        console.log(`server received goodbye from ${clientName}`);
            });

    socket.on("disconnect", () => {
        const clientName = clients[socket.id] || "Unknown Client";
        delete clients[socket.id];
        console.log(
          `Client disconnected: ${clientName}. Clients Connected: ${Object.keys(clients).length}`,
        );
      });
    })
}
