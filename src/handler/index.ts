import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";

export const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = uuidv4();
    socket.emit("room-created", { roomId });
    console.log(`user created room with id: ${roomId}`);
  };
  const joinRoom = ({ roomId }: { roomId: string }) => {
    console.log("user joined room", roomId);
    socket.join(roomId);
  };

  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
};
