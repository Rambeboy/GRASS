# GRASS EXTENSIONS NODE BOT

![GRASS](assets/img1.jpg)

This repository contains the code for `GRASS`, a bot designed to establish WebSocket connections through various HTTP and SOCKS proxies, specifically aimed at farming for Grass Airdrop Season 2.

---

## OVERVIEW

`GRASS` connects to a specified WebSocket server using both HTTP and SOCKS proxies. It leverages the `ws` library for WebSocket communication and integrates the `https-proxy-agent` and `socks-proxy-agent` libraries for enhanced proxy support. This allows for more versatile and resilient connections, accommodating a wider range of proxy types.

---

## BOT FEATURE

- **Single Account With Multiple Worker Based On proy**
- **Proxy Support (HTTP / SOCKS5)**
- **Auto Run GRASS Node**
- **Server Proxy**

---

## INSTALLATION

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Rambeboy/GRASS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd GRASS
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

---

## USAGE

1. Obtain your user ID from the Getgrass website:

- Visit [https://app.getgrass.io/dashboard](https://app.getgrass.io/register/?referralCode=_D-RVWUQOUA6vDI).
- Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect").
- Go to the "Console" tab.
- Paste the following command and press Enter:

  ```javascript
  localStorage.getItem('userId');
  ```

- Copy the value returned, which is your user ID.

2. Create a file named `uid.txt` in the project directory and list your user IDs, each on a new line, like so:

   ```text
   123123213
   123123123
   ```

3. To specify proxies, create a file named `proxy-list.txt` in the project directory and add your desired proxy URLs, following the same new-line format, like this:

   ```text
   http://username:password@hostname:port
   socks5://username:password@hostname:port
   ```

4. To run the `GRASS`, execute the following command in your terminal:

   ```bash
   npm start
   ```

---

## GET USERID TUTORIAL

**Watch this Video Tutorial:**


## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## CONTRIBUTION

If you find this project useful, please consider giving it a star on GitHub! Your support motivates further development and enhancements.

---
