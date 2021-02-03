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
      key: "c96a35053c62cfabe5dc3df2c75d7144",
      type: "entry",
      exchange: "binance",
      exchangeAccountType: "futures",
      side: "long",
      market: "ONTUSDT",
      positionSizePercentage: "90",
      leverage: 20,
      orderType: "stop-limit",
      buyStopPrice: "0.6317",
      price: "0.6318",
      takeProfitPrice1: "0.6350",
      stopLossPrice: "0.6250"
    }
  );

  console.log({ resSendSignal: resSendSignal.status });
};
//Sss
sendSignal();
