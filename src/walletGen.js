function a33_0x5a2c(){const _0x5801ac=['./keypairs/keypair','publicKey','log','13576XzEyMt','stringify','mkdirSync','381xHMjMq','./walletBackup','appendFileSync','getHours','Backup\x20of\x20wallets.txt\x20created\x20at\x20','generate','535896HgSYsJ','copyFileSync','writeFileSync','./keypairBackup/keypair','getMinutes','./keypairBackup','./wallets.txt','23452mYZQqd','existsSync','secretKey','./keypairs','3787570QurLhW','3380069qszvvi','3996384DYajeY','encode','getDate','./walletBackup/wallets-','All\x20wallets\x20generated\x20successfully.','from','359712FvSPCQ','getMonth','toString','.json'];a33_0x5a2c=function(){return _0x5801ac;};return a33_0x5a2c();}(function(_0x35b40c,_0x19c798){const _0x22f14e=a33_0x20fd,_0x340609=_0x35b40c();while(!![]){try{const _0x44612b=-parseInt(_0x22f14e(0x9d))/0x1+parseInt(_0x22f14e(0xb7))/0x2*(parseInt(_0x22f14e(0xba))/0x3)+-parseInt(_0x22f14e(0xa4))/0x4+-parseInt(_0x22f14e(0xa8))/0x5+parseInt(_0x22f14e(0xaa))/0x6+parseInt(_0x22f14e(0xa9))/0x7+-parseInt(_0x22f14e(0xb0))/0x8;if(_0x44612b===_0x19c798)break;else _0x340609['push'](_0x340609['shift']());}catch(_0x6a80ef){_0x340609['push'](_0x340609['shift']());}}}(a33_0x5a2c,0xa2c92));function a33_0x20fd(_0x41ed66,_0x3ec1bd){const _0x5a2cf1=a33_0x5a2c();return a33_0x20fd=function(_0x20fd9b,_0x5e63f2){_0x20fd9b=_0x20fd9b-0x9c;let _0x3e6c30=_0x5a2cf1[_0x20fd9b];return _0x3e6c30;},a33_0x20fd(_0x41ed66,_0x3ec1bd);}import{Keypair}from'@solana/web3.js';import a33_0x46c844 from'bs58';import a33_0x5f233b from'fs';async function genWallet(_0x328318){const _0x26e83c=a33_0x20fd;!a33_0x5f233b[_0x26e83c(0xa5)](_0x26e83c(0xa7))&&a33_0x5f233b['mkdirSync']('./keypairs');!a33_0x5f233b[_0x26e83c(0xa5)](_0x26e83c(0xa2))&&a33_0x5f233b[_0x26e83c(0xb9)]('./keypairBackup');!a33_0x5f233b[_0x26e83c(0xa5)](_0x26e83c(0xbb))&&a33_0x5f233b[_0x26e83c(0xb9)]('./walletBackup');a33_0x5f233b[_0x26e83c(0x9f)](_0x26e83c(0xa3),'');for(let _0x250a19=0x0;_0x250a19<_0x328318;_0x250a19++){const _0x2ee541=Keypair[_0x26e83c(0x9c)](),_0x45cc9e=_0x2ee541[_0x26e83c(0xb5)][_0x26e83c(0xb2)]()+':'+a33_0x46c844[_0x26e83c(0xab)](_0x2ee541[_0x26e83c(0xa6)]);_0x250a19<_0x328318-0x1?a33_0x5f233b['appendFileSync'](_0x26e83c(0xa3),_0x45cc9e+'\x0a'):a33_0x5f233b[_0x26e83c(0xbc)](_0x26e83c(0xa3),''+_0x45cc9e);a33_0x5f233b['writeFileSync'](_0x26e83c(0xb4)+(_0x250a19+0x1)+_0x26e83c(0xb3),JSON[_0x26e83c(0xb8)](Array['from'](_0x2ee541[_0x26e83c(0xa6)])));const _0x5ed5ce=new Date(),_0xe2ab8b=_0x5ed5ce[_0x26e83c(0xb1)]()+0x1+'-'+_0x5ed5ce['getDate']()+'-'+_0x5ed5ce[_0x26e83c(0xbd)]()+'-'+_0x5ed5ce[_0x26e83c(0xa1)]();a33_0x5f233b[_0x26e83c(0x9f)](_0x26e83c(0xa0)+(_0x250a19+0x1)+'-'+_0xe2ab8b+_0x26e83c(0xb3),JSON['stringify'](Array[_0x26e83c(0xaf)](_0x2ee541[_0x26e83c(0xa6)])));}const _0x21878b=new Date(),_0x15b6d2=_0x21878b['getMonth']()+0x1+'-'+_0x21878b[_0x26e83c(0xac)]()+'-'+_0x21878b[_0x26e83c(0xbd)]()+'-'+_0x21878b[_0x26e83c(0xa1)](),_0x3a34a6=_0x26e83c(0xad)+_0x15b6d2+'.txt';a33_0x5f233b[_0x26e83c(0x9e)](_0x26e83c(0xa3),_0x3a34a6),console[_0x26e83c(0xb6)](_0x26e83c(0xae)),console[_0x26e83c(0xb6)](_0x26e83c(0xbe)+_0x3a34a6);}export default genWallet;