// Description:
//   echo
//
// Command:
//   /echo <message> - say <message>
//
// Author:
//   heyhoe <heyhoe@5ebec.dev>

import { app } from "../initializers"

const Echo = () => {
  app.command('/echo', async ({ command, ack, say }) => {
    ack();
    say(`${command.text}`);
  });
}

export default Echo;
