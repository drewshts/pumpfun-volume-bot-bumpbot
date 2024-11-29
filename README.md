<h1>Pump.Fun Volume Bot / Bump Bot || Supports Multi Workers</h1>

<h3>CONFIG Guide (config.json):</h3>

"rpc": "Your RPC URL (http or https supported) (must support GPA (ask ur provider if unsure))",

"ws": "Your WSS URL (ws or wss supported) (must support GPA (ask ur provider if unsure))",

"delay": 5000, // leave default

"slippage" Your desired slippage for buying tokens (ex: 0.15 = 15%)

"minBuy": "Minimum buy amount (ex: 0.0001)",

"maxBuy": "Maximum buy amount (ex: 0.1)",

"microBuyAmount": "0.0001",

"computeUnit": "100000 (leave default)",

"computeLimit": "100000 (leave default)",

"blockEngineUrl": "JITO BlockEngine Url (List provided below)",

"jitoTipPK": "JITO Tip Private Key (private key to pay tips from)",

"jitoTipAmount": "JITO Tip Amount (ex: 0.01)",

"sender": "PRIVATE KEY for the wallet that will distribute SOL to volume wallets",

"devWallet": "PUBLIC KEY (wallet address) of the deployer wallet to monitor for new launches"

"useJITO": true/false --> is used for human/auto mode to use JITO or regular TXs (JITO acts as mev protection)

"LICENSE_KEY": "6a6de41e7864a0dc9cc855e9276c2bf3 (leave default)"

--------------------------------------------------------------------------------------------------------------------------------

BlockEngine URLs (pick the closest to your location):

AMSTERDAM: amsterdam.mainnet.block-engine.jito.wtf

FRANKFURT: frankfurt.mainnet.block-engine.jito.wtf

NEW YORK: ny.mainnet.block-engine.jito.wtf

TOKYO: tokyo.mainnet.block-engine.jito.wtf


--------------------------------------------------------------------------------------------------------------------------------

How to run:
1. Install NodeJS (https://nodejs.org)
2. Install the required packages (npm install) inside the terminal
3. Edit the config.json file
4. Run the bot (node main.js)

--------------------------------------------------------------------------------------------------------------------------------

----------------------------------------- **1: Buy Modes** -------------------------------------------

1: Bump Bot: Enter token address (CA), buy amount & delay when prompted. This mode will use THE FIRST WALLET inside wallet.txt and spam (non JITO) TX's buying & selling your token in the same TX, hit "x" and enter key to kill the infinite loop and return to main menu at any time

2: Back to Main Menu: Enter X to return to main menu

----------------------------------------- **2: Sell Modes** -------------------------------------------

1: Sell All (JITO): This mode will bundle all the wallets and sell 100% of the tokens in each wallet until every wallet has sold.

2: Single Sell: This mode will prompt you to enter the token address (CA) and to enter the (index) of the wallet you want to sell. It will then sell 100% of tokens in that wallet

3: Back to Main Menu: Enter X to return to main menu

----------------------------------------- **3: Wallet Modes** -------------------------------------------

1: Gen Wallets: Generates wallets based on the amount entered when prompted, stores them in /keypairs folder along with wallets.txt

2: Check Balances: Checks the SOL & SPL Token balance of every wallet

3: Close Token Accounts: Closes SPL Token Accounts of each wallet reclaiming the rent fees

4: Create Profiles: Creates profiles on Pump.Fun (Username + Bio)

5: Back to Main Menu: Returns to main menu

----------------------------------------- **4: Transfer Modes** -------------------------------------------

1: This mode will transfer SOL from ur main wallet (Sender from config file) to EVERY sub wallet you have in wallets.txt/keyapirs directory

2: This mode will send SOL from every VOLUME/SUB wallet back to the desired MAIN wallet address (NOTE 0.0009 SOL)  will remain in every wallet you will need to manually send this back if u want it

3: This mode will send 100% of the token balance in the VOLUME/SUB wallets to the wallet address you provided when running!

4: Back to Main Menu: Returns to main menu

--------------------------------------------------------------------------------------------------------------------------------
