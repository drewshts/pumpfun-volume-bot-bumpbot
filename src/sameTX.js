const a1_0x3fb17c=a1_0x367f;(function(_0x495f4f,_0x2d350a){const _0x2e9ec2=a1_0x367f,_0x14b354=_0x495f4f();while(!![]){try{const _0x382015=-parseInt(_0x2e9ec2(0x90))/0x1+parseInt(_0x2e9ec2(0x8e))/0x2+parseInt(_0x2e9ec2(0x8f))/0x3*(-parseInt(_0x2e9ec2(0x9f))/0x4)+-parseInt(_0x2e9ec2(0x9e))/0x5*(-parseInt(_0x2e9ec2(0xb4))/0x6)+-parseInt(_0x2e9ec2(0xb8))/0x7+-parseInt(_0x2e9ec2(0x97))/0x8+parseInt(_0x2e9ec2(0xb0))/0x9;if(_0x382015===_0x2d350a)break;else _0x14b354['push'](_0x14b354['shift']());}catch(_0x1dd432){_0x14b354['push'](_0x14b354['shift']());}}}(a1_0x3715,0xbfce0));import{Connection,PublicKey,TransactionMessage,VersionedTransaction}from'@solana/web3.js';import{getAssociatedTokenAddressSync}from'@solana/spl-token';function a1_0x3715(){const _0x492433=['getBalance','compileToV0Message','toBase58','computeLimit','encode','13925358vnhymO','round','payer','removeAllListeners','78ZOqSts','sign','Starting\x20buy\x20and\x20sell\x20loop\x20for\x20Worker\x20','pubKey','1825299aRlLxa','Wallet\x20SOL\x20balance\x20too\x20low,\x20recalculating\x20amount\x20to\x20buy.','log','1969502ZGcFUe','15234PoMeCt','1324257EroezL','red','.\x20Press\x20\x27x\x27\x20and\x20enter\x20to\x20exit.','error','Exiting\x20loop,\x20or\x20press\x20CTRL\x20+\x20C\x20to\x20exit\x20immediately....','bonding-curve','toLowerCase','383832xSaDXw','instructions','toBuffer','floor','Buy\x20amount\x20too\x20low,\x20exiting.','rpcURL','amt','204430NWzLQI','508YXIcZe','toFixed','wsURL','Error\x20in\x20buy\x20and\x20sell\x20loop:','getLatestBlockhash','6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P','computeUnit','yellow','confirmed','sendTransaction','ExperimentalWarning','publicKey'];a1_0x3715=function(){return _0x492433;};return a1_0x3715();}import{encode}from'@coral-xyz/anchor/dist/cjs/utils/bytes/utf8.js';import a1_0x2e87e9 from'./loadConfig.js';import a1_0x97813f from'./loadWallets.js';import a1_0x19164c from'bs58';import a1_0x38caa4 from'chalk';import{createSameTX,createSolTransferTX}from'./createTX.js';import{createSellTX}from'./createSellTX.js';process['removeAllListeners']('warning'),process[a1_0x3fb17c(0xb3)](a1_0x3fb17c(0xa9));function a1_0x367f(_0x38c547,_0x534d78){const _0x371578=a1_0x3715();return a1_0x367f=function(_0x367fa3,_0x1dae75){_0x367fa3=_0x367fa3-0x8c;let _0x17ed69=_0x371578[_0x367fa3];return _0x17ed69;},a1_0x367f(_0x38c547,_0x534d78);}function getBondingCurve(_0x1a346a,_0xc4752b){const _0x3bcf50=a1_0x3fb17c,[_0x75b4ca,_0x57f6e8]=PublicKey['findProgramAddressSync']([encode(_0x3bcf50(0x95)),_0x1a346a[_0x3bcf50(0x99)]()],_0xc4752b);return _0x75b4ca;}async function buyAndSell(_0x356165,_0x16de62,_0x2bbca7,_0x41edde,_0x2a1493){const _0x491f67=a1_0x3fb17c,_0x1db677=await a1_0x2e87e9(),_0x34257e=_0x1db677[_0x491f67(0x9c)],_0x70cfb=_0x1db677[_0x491f67(0xa1)];let _0x173697=_0x1db677[_0x491f67(0xa5)],_0x36945e=_0x1db677[_0x491f67(0xae)];const _0x4e61e0=new Connection(_0x34257e,{'commitment':_0x491f67(0xa7),'wsEndpoint':_0x70cfb}),_0x4efc0c=_0x491f67(0xa4),_0x156460=new PublicKey(_0x4efc0c),_0x1f1803=new PublicKey(_0x356165),_0x2991da=getBondingCurve(_0x1f1803,_0x156460),_0xeedfeb=getAssociatedTokenAddressSync(_0x1f1803,_0x2991da,!![]),_0x3d7a4a=a1_0x19164c[_0x491f67(0xaf)](_0x2991da[_0x491f67(0x99)]()),_0x126606=a1_0x19164c[_0x491f67(0xaf)](_0xeedfeb[_0x491f67(0x99)]()),_0x361454=await a1_0x97813f(),_0x1017c6=_0x361454[_0x2a1493];let _0x298b2a=!![];console['log'](_0x491f67(0xb6)+(_0x2a1493+0x1)+_0x491f67(0x92)),_0x41edde['on']('line',_0x8d0b08=>{const _0x3b5ada=_0x491f67;_0x8d0b08[_0x3b5ada(0x96)]()==='x'&&(_0x298b2a=![],console[_0x3b5ada(0x8d)](a1_0x38caa4[_0x3b5ada(0x91)](_0x3b5ada(0x94))));});while(_0x298b2a){try{const _0x2a1953=new PublicKey(_0x1017c6[_0x491f67(0xb7)]),_0x580654=await _0x4e61e0[_0x491f67(0xab)](_0x2a1953),_0x5635ce=_0x580654/0x3b9aca00;if(_0x5635ce<0.01){console[_0x491f67(0x8d)](a1_0x38caa4[_0x491f67(0xa6)]('Wallet\x20SOL\x20balance\x20too\x20low\x20(<\x200.01\x20SOL),\x20exiting.'));break;}let _0x61f922=parseFloat(_0x16de62);if(_0x61f922>=_0x5635ce){console[_0x491f67(0x8d)](a1_0x38caa4[_0x491f67(0x91)](_0x491f67(0x8c))),_0x61f922=_0x5635ce*0.75,_0x61f922=parseFloat(_0x61f922[_0x491f67(0xa0)](0x4)),console['log']('New\x20Buy\x20Amount:\x20',_0x61f922);if(_0x61f922<0.01){console[_0x491f67(0x8d)](a1_0x38caa4[_0x491f67(0xa6)](_0x491f67(0x9b)));break;}}const _0x513afe=Math[_0x491f67(0xb1)](_0x61f922*0x3b9aca00),_0x138770=new PublicKey(_0x356165),_0x5f19df=new PublicKey(_0x3d7a4a),_0x4d8667=new PublicKey(_0x126606),_0x39c460=new PublicKey(_0x4efc0c);let _0x2a346c=await createSameTX(_0x138770,_0x5f19df,_0x4d8667,_0x39c460,_0x1017c6,_0x513afe,_0x36945e,_0x173697),_0x3c497b=_0x2a346c['instructions'],_0x3a8b91=_0x2a346c[_0x491f67(0x9d)];const _0xcfd796=getAssociatedTokenAddressSync(_0x138770,_0x2a1953,!![]),_0x1f382a=_0xcfd796[_0x491f67(0xad)]();let _0x36dee=Math[_0x491f67(0x9a)](_0x3a8b91),_0x16be2f=await createSellTX(_0x138770,_0x5f19df,_0x4d8667,_0x39c460,_0x1017c6,_0x36dee,_0x1f382a),_0x56151d=_0x16be2f[_0x491f67(0x98)];const _0x4ef556=Math[_0x491f67(0xb1)](_0x513afe*0.1);let _0x29eb9d=await createSolTransferTX(_0x1017c6,_0x4ef556),_0x3cb0fd=_0x29eb9d[_0x491f67(0x98)];const _0x3a3158=[..._0x3c497b,..._0x56151d,..._0x3cb0fd],_0x1f1e4b=await _0x4e61e0[_0x491f67(0xa3)]('finalized'),_0x419332=_0x1f1e4b['blockhash'],_0x1ee211=new TransactionMessage({'payerKey':_0x2a346c[_0x491f67(0xb2)][_0x491f67(0xaa)],'instructions':_0x3a3158,'recentBlockhash':_0x419332})[_0x491f67(0xac)]([]),_0x572e1e=new VersionedTransaction(_0x1ee211);_0x572e1e[_0x491f67(0xb5)]([_0x2a346c['payer']]);const _0x3fd635=await _0x4e61e0[_0x491f67(0xa8)](_0x572e1e,{'skipPreflight':!![],'commitment':_0x491f67(0xa7)});console[_0x491f67(0x8d)]('Transaction\x20sent:',_0x3fd635),await new Promise(_0x337e57=>setTimeout(_0x337e57,_0x2bbca7));if(!_0x298b2a)break;}catch(_0x5bc6bc){console[_0x491f67(0x93)](_0x491f67(0xa2),_0x5bc6bc),await new Promise(_0x5c9f22=>setTimeout(_0x5c9f22,0x1388));}}}export default buyAndSell;