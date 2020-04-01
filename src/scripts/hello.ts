// Description:
//   hello world
//
// Command:
//   bolt hello - say "Hey there @yourname"
//
// Author:
//   heyhoe <heyhoe@5ebec.dev>

import { app } from "../initializers";

const Hello = () => {
  app.message(/^bolt hello$/i, ({ message, say }) => {
    say(`Hey there <@${message.user}>!`);
  });
};

export default Hello;
