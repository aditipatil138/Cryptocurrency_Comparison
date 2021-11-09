import './App.css';
import React, { Component} from 'react';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      crypto_btc: [],
      crypto_eth: [],
      coing_btc: [],
      coing_eth: [],
      cryptocomaprebtc: [],
      coingekobtc: [],
      cryptocomapreeth: [],
      coingekoeth: [],
    };
  }

  componentDidMount () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
      .then(res => {
        const crypto_btc = res.data
        console.log(crypto_btc);
        console.log(crypto_btc.BTC['USD'])
        this.setState({crypto_btc: crypto_btc})
        const cryptocomaprebtc = this.state.crypto_btc.BTC['USD'];
        this.setState({cryptocomaprebtc: cryptocomaprebtc});
      })
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
      .then(res => {
        const crypto_eth = res.data
        console.log(crypto_eth);
        console.log(crypto_eth.ETH['USD']);
        this.setState({crypto_eth: crypto_eth})
        const cryptocomapreeth = this.state.crypto_eth.ETH['USD'];
        this.setState({cryptocomapreeth: cryptocomapreeth});
      })

      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
      .then(res => {
        const coing_btc = res.data
        console.log(coing_btc);
        console.log(coing_btc[0].symbol);
        console.log(coing_btc[0].current_price);
        this.setState({coing_btc: coing_btc})
        const coingekobtc = this.state.coing_btc[0].current_price;
        this.setState({coingekobtc: coingekobtc});
      })

      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum')
      .then(res => {
        const coing_eth = res.data
        console.log(coing_eth);
        console.log(coing_eth[0].symbol);
        console.log(coing_eth[0].current_price);
        this.setState({coing_eth: coing_eth})
        const coingekoeth = this.state.coing_eth[0].current_price;
        this.setState({coingekoeth: coingekoeth});
      })   
  }

  render() {
    const ccbtc = this.state.cryptocomaprebtc;
    const cgbtc = this.state.coingekobtc;
    const cceth = this.state.cryptocomapreeth;
    const cgeth = this.state.coingekoeth;
    return (
      <div className="App">
        <div id="title">
          <h1>Cryptocurrency Comparison</h1> 
        </div>
        <hr />
        <div id="title-div">
          <span className="left-title">Source</span>
          <span className="center-title">Coin</span>
          <span className="right-title"><b>Rate in US $</b></span>
        </div> 
        {Object.keys(this.state.crypto_btc).map((key) =>
         (
           <div id="cryptocurrency-div">
             <span className="left">CryptoCompare</span>
             <span className="center">{key}</span>
             <span className="right">${this.state.crypto_btc[key].USD}</span>
           </div>  
         ))}
         {Object.keys(this.state.crypto_eth).map((key) =>
         (
           <div id="cryptocurrency-div">
             <span className="left">CryptoCompare</span>
             <span className="center">{key}</span>
             <span className="right">${this.state.crypto_eth[key].USD}</span>
           </div>  
         ))}
         {Object.keys(this.state.coing_btc).map(key => 
         <div id="cryptocurrency-div">
             <span className="left">CoinGeko</span>
             <span className="center">{this.state.coing_btc[0].symbol}</span>
             <span className="right">${this.state.coing_btc[0].current_price}</span>
         </div>
         )}
         {Object.keys(this.state.coing_eth).map(key => 
         <div id="cryptocurrency-div">
             <span className="left">CoinGeko</span>
             <span className="center">{this.state.coing_eth[0].symbol}</span>
             <span className="right">${this.state.coing_eth[0].current_price}</span>
         </div>
         )}
         <div id="recommendation-div">
           {(() => {
             if (ccbtc > cgbtc) {
               return (
                 <span><b>Recommendation:</b> Buy Bitcoin from CoinGeko and Sell on CoinCompare </span>
               )
             } else {
               return (
                 <span><b>Recommendation:</b> Buy Bitcoin from CoinCompare and sell on CoinGeko </span>
               )
             }
           })()}         
         </div>
         <div id="recommendation-div">
           {(() => {
             if (cceth > cgeth) {
               return (
                 <span><b>Recommendation:</b> Buy Ethereum from CoinGeko and Sell on CoinCompare </span>
               )
             } else {
               return (
                 <span><b>Recommendation:</b> Buy Ethereum from CoinCompare and sell on CoinGeko</span>
               )
             }
           })()}         
         </div>        
      </div>
    )
  }
}

export default App;


