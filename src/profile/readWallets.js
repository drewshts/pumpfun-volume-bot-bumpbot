(function(_0x5131af,_0x211740){const _0x12f89f=a3_0x243c,_0x2cee82=_0x5131af();while(!![]){try{const _0x5b2b65=-parseInt(_0x12f89f(0x74))/0x1+parseInt(_0x12f89f(0x77))/0x2*(parseInt(_0x12f89f(0x7e))/0x3)+parseInt(_0x12f89f(0x73))/0x4+parseInt(_0x12f89f(0x79))/0x5+-parseInt(_0x12f89f(0x76))/0x6+parseInt(_0x12f89f(0x7a))/0x7*(-parseInt(_0x12f89f(0x7d))/0x8)+parseInt(_0x12f89f(0x7b))/0x9;if(_0x5b2b65===_0x211740)break;else _0x2cee82['push'](_0x2cee82['shift']());}catch(_0x1be0d5){_0x2cee82['push'](_0x2cee82['shift']());}}}(a3_0xdd9d,0x5bd43));import{readFile}from'fs/promises';import{join}from'path';function a3_0x243c(_0x12287e,_0x4968f5){const _0xdd9d70=a3_0xdd9d();return a3_0x243c=function(_0x243cb3,_0x3cf2e0){_0x243cb3=_0x243cb3-0x72;let _0x2e0775=_0xdd9d70[_0x243cb3];return _0x2e0775;},a3_0x243c(_0x12287e,_0x4968f5);}import a3_0x2bc036 from'bs58';import{Keypair}from'@solana/web3.js';async function loadWallets(){const _0x171a62=a3_0x243c,_0x4a5ecf=join(process['cwd'](),'wallets.txt'),_0xdc61dd=await readFile(_0x4a5ecf,'utf-8'),_0x2e40cc=[],_0x48d54f=_0xdc61dd[_0x171a62(0x72)]('\x0a')['filter'](_0x2b83fe=>_0x2b83fe[_0x171a62(0x75)]()!=='');for(const _0x502edb of _0x48d54f){const [_0x569742,_0x3c1b8e]=_0x502edb[_0x171a62(0x72)](':');if(_0x569742&&_0x3c1b8e){const _0x46c1e4=Keypair[_0x171a62(0x78)](a3_0x2bc036[_0x171a62(0x7c)](_0x3c1b8e[_0x171a62(0x75)]())),_0x53ce2f={'pubKey':_0x569742[_0x171a62(0x75)](),'privKey':_0x3c1b8e[_0x171a62(0x75)](),'keypair':_0x46c1e4};_0x2e40cc['push'](_0x53ce2f);}}return _0x2e40cc;}function a3_0xdd9d(){const _0x3ea419=['28cNUeWD','10580121yMWlUy','decode','683792FwZiql','799797pIpbDa','split','1202200PopCDk','738881rSRELy','trim','1748400tmPhQS','2RDoOHQ','fromSecretKey','27950yZwaAc'];a3_0xdd9d=function(){return _0x3ea419;};return a3_0xdd9d();}export default loadWallets;