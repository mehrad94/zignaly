var http = require("http");
const axios = require("axios");
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
//ss
const sendSignal = async () => {
  const resSendSignal = await axios.post(
    "https://zignaly.com/api/signals.php",
    {
      key: "75e51daf22242349d46f88e633a3e35d",
      type: "entry",
      exchange: "binance",
      exchangeAccountType: "futures",
      side: "long",
      market: "QTUMUSDT",
      positionSizePercentage: "1",
      leverage: 1,
      price: "3.395",
      takeProfitPrice1: "3.405",
      stopLossPrice: "3.270",
      orderType: "stop-limit",
      buyStopPrice: "3.395"
    }
  );
  console.log({ resSendSignal: resSendSignal.status });
};
//S
sendSignal();
