function a14_0x4cb1(){const _0x110517=['Account\x20not\x20found','wsURL','virtualSolReserves','deserialize','590713SyAjgM','259SeMTwK','confirmed','3558141gCTrbR','81176iTypLm','437724fxECjw','rpcURL','10LHdBDa','15VlzDyL','2PqJHUd','2924586JfvkIh','29540489ydbDoO','getAccountInfo','3101010GroDHM','toString'];a14_0x4cb1=function(){return _0x110517;};return a14_0x4cb1();}(function(_0x5f068d,_0x28d349){const _0x239b48=a14_0x1007,_0x1ac2f9=_0x5f068d();while(!![]){try{const _0x4abbac=-parseInt(_0x239b48(0x186))/0x1*(-parseInt(_0x239b48(0x17c))/0x2)+parseInt(_0x239b48(0x17b))/0x3*(parseInt(_0x239b48(0x178))/0x4)+parseInt(_0x239b48(0x180))/0x5+parseInt(_0x239b48(0x17d))/0x6+parseInt(_0x239b48(0x187))/0x7*(parseInt(_0x239b48(0x177))/0x8)+parseInt(_0x239b48(0x189))/0x9*(parseInt(_0x239b48(0x17a))/0xa)+-parseInt(_0x239b48(0x17e))/0xb;if(_0x4abbac===_0x28d349)break;else _0x1ac2f9['push'](_0x1ac2f9['shift']());}catch(_0x1d1a40){_0x1ac2f9['push'](_0x1ac2f9['shift']());}}}(a14_0x4cb1,0x50c26));import{BondingCurveLayout}from'./PUMP_LAYOUT.js';import{PublicKey,Connection}from'@solana/web3.js';function a14_0x1007(_0x34d210,_0x15f427){const _0x4cb15b=a14_0x4cb1();return a14_0x1007=function(_0x10072f,_0x5711d7){_0x10072f=_0x10072f-0x177;let _0x29eddc=_0x4cb15b[_0x10072f];return _0x29eddc;},a14_0x1007(_0x34d210,_0x15f427);}import a14_0x38d70a from'./loadConfig.js';async function getCurveData(_0x14e021){const _0x51aee3=a14_0x1007,_0x28ad17=await a14_0x38d70a(),_0x5dc9fc=new Connection(_0x28ad17[_0x51aee3(0x179)],{'wsEndpoint':_0x28ad17[_0x51aee3(0x183)],'commitment':_0x51aee3(0x188)}),_0x4e0a34=await _0x5dc9fc[_0x51aee3(0x17f)](new PublicKey(_0x14e021));if(!_0x4e0a34)throw new Error(_0x51aee3(0x182));const {data:_0x102607}=_0x4e0a34;if(!_0x102607)throw new Error('Buffer\x20not\x20found');const _0x3211ef=BondingCurveLayout[_0x51aee3(0x185)](_0x102607);let _0x5cb151=_0x3211ef[_0x51aee3(0x184)][_0x51aee3(0x181)](),_0x1ffc34=_0x3211ef['virtualTokenReserves'][_0x51aee3(0x181)]();return _0x1ffc34=parseInt(_0x1ffc34),_0x5cb151=parseInt(_0x5cb151),{'virtualTokenReserves':_0x5cb151,'virtualSolReserves':_0x1ffc34};}export default getCurveData;