Jake Dwyer
Activity 5 - WebSockets
9/20

# Modifications:
1. Track number of clients 
  - Added a clients map in server.ts to store socket.id : clientName.
  - Keeps count of active connections using Object.keys(clients).length.

2. Hello message from client  
  - On connect, each client emits a hello event with its name.  
  - Implemented in client.ts.

3. Server logs on new client connection 
  - When the server receives hello, it:  
    - Logs the client’s name and the total number of connected clients.  
    - Sends the initial ping to the client.

4. Server logs on disconnect  
  - On disconnect, the server removes the client from the clients map.  
  - Logs the name of the client leaving and the decremented number of connected clients.