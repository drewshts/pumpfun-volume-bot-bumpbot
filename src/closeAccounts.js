(function(_0x3fc4cd,_0x3f3694){const _0x24dcf6=a5_0x2e66,_0x26d19e=_0x3fc4cd();while(!![]){try{const _0x3166ec=-parseInt(_0x24dcf6(0x157))/0x1*(parseInt(_0x24dcf6(0x13b))/0x2)+-parseInt(_0x24dcf6(0x154))/0x3+-parseInt(_0x24dcf6(0x129))/0x4*(-parseInt(_0x24dcf6(0x128))/0x5)+-parseInt(_0x24dcf6(0x126))/0x6+-parseInt(_0x24dcf6(0x15a))/0x7+parseInt(_0x24dcf6(0x134))/0x8+parseInt(_0x24dcf6(0x132))/0x9*(parseInt(_0x24dcf6(0x145))/0xa);if(_0x3166ec===_0x3f3694)break;else _0x26d19e['push'](_0x26d19e['shift']());}catch(_0x2e7206){_0x26d19e['push'](_0x26d19e['shift']());}}}(a5_0x59cd,0xda7d3));import{PublicKey,Keypair,Connection,TransactionMessage,VersionedTransaction,SystemProgram,TransactionInstruction}from'@solana/web3.js';import{TOKEN_PROGRAM_ID,createCloseAccountInstruction}from'@solana/spl-token';import{searcherClient}from'jito-ts/dist/sdk/block-engine/searcher.js';import{Bundle}from'jito-ts/dist/sdk/block-engine/types.js';import a5_0x2fc154 from'./loadWallets.js';function a5_0x2e66(_0x3c3b6f,_0x42c42f){const _0x59cd54=a5_0x59cd();return a5_0x2e66=function(_0x2e6628,_0x57f183){_0x2e6628=_0x2e6628-0x11f;let _0x7482c6=_0x59cd54[_0x2e6628];return _0x7482c6;},a5_0x2e66(_0x3c3b6f,_0x42c42f);}import a5_0x31ae29 from'./loadConfig.js';import a5_0x5ce9c6 from'bs58';import a5_0x4e6c3b from'chalk';import a5_0x55c3a7 from'./sendBundle.js';async function closeAccounts(){const _0x1a31f5=a5_0x2e66,_0x1ca601=await a5_0x31ae29(),_0x1d241a=_0x1ca601['rpcURL'],_0x4fc267=_0x1ca601[_0x1a31f5(0x149)],_0xd2f0da=_0x1ca601['blockEngineURL'],_0x5c59ce=new Connection(_0x1d241a,{'commitment':_0x1a31f5(0x13c),'wsEndpoint':_0x4fc267}),_0x426e83=await a5_0x2fc154(),_0x44138d=0x5,_0x137929=Math[_0x1a31f5(0x142)](_0x426e83[_0x1a31f5(0x12d)]/_0x44138d);for(let _0xbe7ccf=0x0;_0xbe7ccf<_0x137929;_0xbe7ccf++){const _0x12fb6c=_0xbe7ccf*_0x44138d,_0x3d6db9=_0x12fb6c+_0x44138d,_0xb9d800=_0x426e83['slice'](_0x12fb6c,_0x3d6db9),_0x22c2e6=[],_0x5a5e72=[];for(const _0x4e31b8 of _0xb9d800){try{console[_0x1a31f5(0x12f)](a5_0x4e6c3b[_0x1a31f5(0x14c)](_0x1a31f5(0x159)+_0x4e31b8[_0x1a31f5(0x12e)]+'\x0a'));const _0x56b1f0=new PublicKey(_0x4e31b8[_0x1a31f5(0x12e)]),_0x2fdd4b=Keypair[_0x1a31f5(0x120)](new Uint8Array(a5_0x5ce9c6[_0x1a31f5(0x151)](_0x4e31b8[_0x1a31f5(0x152)]))),_0x399828=await _0x5c59ce[_0x1a31f5(0x156)](_0x56b1f0,{'programId':TOKEN_PROGRAM_ID});if(_0x399828[_0x1a31f5(0x150)][_0x1a31f5(0x12d)]===0x0){console[_0x1a31f5(0x12f)](a5_0x4e6c3b[_0x1a31f5(0x144)](_0x1a31f5(0x12a)+_0x4e31b8[_0x1a31f5(0x12e)]));continue;}console['log'](a5_0x4e6c3b['green'](_0x1a31f5(0x131)+_0x399828[_0x1a31f5(0x150)]['length']+'\x20token\x20accounts\x20for\x20wallet:\x20'+_0x4e31b8[_0x1a31f5(0x12e)]));const _0x2ef32b=_0x399828[_0x1a31f5(0x150)][_0x1a31f5(0x133)](_0x416126=>_0x416126[_0x1a31f5(0x143)]);let _0x22d1c5;_0x4e31b8===_0xb9d800[_0xb9d800['length']-0x1]?(_0x22d1c5=await createCloseWithTip(_0x2ef32b,_0x56b1f0,_0x2fdd4b,_0x5c59ce),_0x22c2e6['push'](_0x22d1c5),_0x5a5e72[_0x1a31f5(0x121)](_0x4e31b8['privKey'])):(_0x22d1c5=await createCloseIX(_0x2ef32b,_0x56b1f0,_0x2fdd4b,_0x5c59ce),_0x22c2e6['push'](_0x22d1c5),_0x5a5e72['push'](_0x4e31b8[_0x1a31f5(0x152)]));}catch(_0x9821e5){console[_0x1a31f5(0x146)](a5_0x4e6c3b['red'](_0x1a31f5(0x14a),_0x9821e5));}}if(_0x22c2e6[_0x1a31f5(0x12d)]===0x0){console[_0x1a31f5(0x12f)](a5_0x4e6c3b[_0x1a31f5(0x136)](_0x1a31f5(0x139)));continue;}const _0x51829d=searcherClient(_0xd2f0da),_0x270ad9=new Bundle([]);for(const _0x45b141 of _0x22c2e6){_0x270ad9[_0x1a31f5(0x14d)](_0x45b141);}console[_0x1a31f5(0x12f)](_0x1a31f5(0x137)),console['log'](_0x1a31f5(0x125),_0x270ad9[_0x1a31f5(0x13e)][_0x1a31f5(0x12d)]);try{const _0x47b73e=await a5_0x55c3a7(_0x270ad9,_0xd2f0da);console['log'](_0x1a31f5(0x12b)+_0x47b73e),console['log']('Processing\x20times\x20may\x20be\x20slow...\x0a');}catch(_0x3a8b19){if(_0x3a8b19[_0x1a31f5(0x127)]&&_0x3a8b19[_0x1a31f5(0x127)][_0x1a31f5(0x123)]('bundle\x20contains\x20an\x20already\x20processed\x20transaction')){console[_0x1a31f5(0x12f)](_0x1a31f5(0x148));return;}console[_0x1a31f5(0x146)]('Error\x20sending\x20bundle:',_0x3a8b19);}await new Promise(_0x111ad8=>setTimeout(_0x111ad8,_0x1ca601[_0x1a31f5(0x14b)]));}}async function createCloseIX(_0x15cb4c,_0x464e27,_0x3935d2,_0x217ed2){const _0x48ed7a=a5_0x2e66,_0x34c40d=_0x15cb4c[_0x48ed7a(0x133)](_0x129261=>{const _0x6b2b6=_0x48ed7a,_0x37f1e5=createCloseAccountInstruction(_0x129261,_0x464e27,_0x464e27);return new TransactionInstruction({'keys':[{'pubkey':_0x129261,'isSigner':![],'isWritable':!![]},{'pubkey':_0x464e27,'isSigner':![],'isWritable':!![]},{'pubkey':_0x3935d2['publicKey']instanceof PublicKey?_0x3935d2[_0x6b2b6(0x11f)]:new PublicKey(_0x3935d2[_0x6b2b6(0x11f)]),'isSigner':!![],'isWritable':![]}],'programId':TOKEN_PROGRAM_ID,'data':_0x37f1e5[_0x6b2b6(0x130)]});}),_0x3135e7=_0x3935d2[_0x48ed7a(0x11f)]instanceof PublicKey?_0x3935d2[_0x48ed7a(0x11f)]:new PublicKey(_0x3935d2[_0x48ed7a(0x11f)]),_0x708b1d=await _0x217ed2[_0x48ed7a(0x13a)]('finalized'),_0x5c41f7=_0x708b1d['blockhash'],_0x42e50b=new TransactionMessage({'payerKey':_0x3135e7,'instructions':_0x34c40d,'recentBlockhash':_0x5c41f7})[_0x48ed7a(0x124)](),_0x27fa16=new VersionedTransaction(_0x42e50b);return _0x27fa16[_0x48ed7a(0x138)]([_0x3935d2]),console['log'](_0x48ed7a(0x155),_0x34c40d[_0x48ed7a(0x12d)]),_0x27fa16;}function a5_0x59cd(){const _0x329d7b=['5wFdJsG','5060324DbVLRc','No\x20token\x20accounts\x20found\x20for\x20wallet:\x20','Confirm\x20Bundle\x20Manually\x20(JITO):\x20https://explorer.jito.wtf/bundle/','blockhash','length','pubKey','log','data','Found\x20','846hREhyF','map','8885408PimNGQ','floor','yellow','Transaction\x20added\x20to\x20bundle','sign','No\x20transactions\x20to\x20process\x20in\x20this\x20batch,\x20skipping\x20bundle\x20creation.','getLatestBlockhash','248LEoVye','confirmed','ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt','transactions','finalized','Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY','DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh','ceil','pubkey','red','269530HlNGSo','error','DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUiL2KRL','Bundle\x20Landed!','wsURL','Error\x20closing\x20account:','delay','green','addTransactions','Created\x20transaction\x20with\x20instructions\x20and\x20tip:','ADaUMid9yfUytqMBgopwjb2DTLSokTSzL1zt6iGPaS49','value','decode','privKey','jitoTip','3704391DDNpce','Created\x20transaction\x20with\x20instructions:','getTokenAccountsByOwner','9067cvbeXW','3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT','Processing\x20wallet:\x20','7201838rqLiLp','publicKey','fromSecretKey','push','random','includes','compileToV0Message','Number\x20of\x20transactions\x20in\x20the\x20bundle:','3758814rfTmzc','message'];a5_0x59cd=function(){return _0x329d7b;};return a5_0x59cd();}async function createCloseWithTip(_0x19d73f,_0x2a74ac,_0x570a1c,_0x29bfd1){const _0x5e90e3=a5_0x2e66,_0x3b687a=await a5_0x31ae29(),_0x58a621=Keypair[_0x5e90e3(0x120)](new Uint8Array(a5_0x5ce9c6[_0x5e90e3(0x151)](_0x3b687a[_0x5e90e3(0x153)]))),_0x4f62a5=_0x3b687a['jitoTipAmount'],_0x1ff6b0=_0x4f62a5*0x3b9aca00,_0x2206d8=_0x19d73f[_0x5e90e3(0x133)](_0x4bc9cd=>{const _0x3363dd=_0x5e90e3,_0x1f997d=createCloseAccountInstruction(_0x4bc9cd,_0x2a74ac,_0x2a74ac);return new TransactionInstruction({'keys':[{'pubkey':_0x4bc9cd,'isSigner':![],'isWritable':!![]},{'pubkey':_0x2a74ac,'isSigner':![],'isWritable':!![]},{'pubkey':_0x570a1c[_0x3363dd(0x11f)]instanceof PublicKey?_0x570a1c[_0x3363dd(0x11f)]:new PublicKey(_0x570a1c[_0x3363dd(0x11f)]),'isSigner':!![],'isWritable':![]}],'programId':TOKEN_PROGRAM_ID,'data':_0x1f997d[_0x3363dd(0x130)]});}),_0x39909a=_0x570a1c[_0x5e90e3(0x11f)]instanceof PublicKey?_0x570a1c[_0x5e90e3(0x11f)]:new PublicKey(_0x570a1c[_0x5e90e3(0x11f)]),_0xc1d3f5=['96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5','HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe',_0x5e90e3(0x140),_0x5e90e3(0x14f),_0x5e90e3(0x141),_0x5e90e3(0x13d),_0x5e90e3(0x147),_0x5e90e3(0x158)],_0x55d7c5=Math[_0x5e90e3(0x135)](Math[_0x5e90e3(0x122)]()*_0xc1d3f5[_0x5e90e3(0x12d)]),_0x47d7ba=new PublicKey(_0xc1d3f5[_0x55d7c5]),_0x48428a=await _0x29bfd1[_0x5e90e3(0x13a)](_0x5e90e3(0x13f)),_0x530383=_0x48428a[_0x5e90e3(0x12c)],_0x456aa9=SystemProgram['transfer']({'fromPubkey':_0x58a621[_0x5e90e3(0x11f)],'toPubkey':_0x47d7ba,'lamports':_0x1ff6b0}),_0x5a813f=new TransactionMessage({'payerKey':_0x39909a,'instructions':[..._0x2206d8,_0x456aa9],'recentBlockhash':_0x530383})[_0x5e90e3(0x124)](),_0x71a059=new VersionedTransaction(_0x5a813f);return _0x71a059[_0x5e90e3(0x138)]([_0x570a1c,_0x58a621]),console['log'](_0x5e90e3(0x14e),_0x2206d8[_0x5e90e3(0x12d)]),_0x71a059;}export default closeAccounts;