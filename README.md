# Echo Telegram Bot

## Overview

This project introduces an Echo Telegram Bot designed to receive files, such as `.exe` or `.bat`, and return them as video files. This unique functionality can trigger automatic execution of the returned file on the recipient's computer, provided their settings enable auto-download and auto-play of video files. The bot utilizes the `node-telegram-bot-api` library for seamless interaction with the Telegram API.

## Warning

**Exercise caution when using this bot.** The act of sending executable files carries inherent security risks. This tool is crafted for educational purposes or legitimate scenarios only. The creators of this bot disclaim any liability for misuse or any resultant damage.

## Prerequisites

Ensure the following are installed before proceeding:
- Node.js
- npm (Node Package Manager)

## Installation

Follow these steps to set up the bot:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Execute `npm install` to install necessary dependencies.

## Configuration

To configure the bot:
1. Use BotFather on Telegram to create a bot and receive your bot token.
2. Insert your bot token in place of `<YOUR_BOT_TOKEN>` within the `bot.js` file.

## Usage

To activate the bot, execute the following command within your project directory:

```bash
npm start
```

Alternatively, you can directly run:

```bash
node bot.js
```

With the bot operational, you can interact with it via Telegram to send and receive files as videos. Ensure the file intended for sending is within the project directory or specify the correct file path in your code.

## Important Notes

- This bot is designed to echo files with the potential for automatic execution under certain conditions. Always communicate the nature of the file to the recipient and confirm their consent to receive and execute it.
- Prior to practical application, thoroughly test the bot's functionality in a controlled setting to fully grasp its behavior.

## Contributing

We welcome contributions to enhance the bot or broaden its capabilities. Please ensure your contributions are in line with best practices and do not encourage malicious activities.

## License

This project is released under the MIT License. Refer to the LICENSE file for more details.

## Disclaimer

This project is strictly for educational and testing purposes. The developers expressly disclaim endorsement or promotion of this software for malicious activities. Users must adhere to all relevant laws and regulations in their jurisdiction.
