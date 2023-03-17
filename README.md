# Blocus Web Browser ***-- A work in progress***

Secure web browser with configurable privacy front-ends (coming soon).
Made with [Electron](https://github.com/electron/electron).

- Dev installation
    - [Windows](#installwin)
    - [Linux](#installdeb) (unstable)
    - [MacOs](#installmac) (coming soon or maybe not, i do not like apple so much)

- Testing branch
    - [Releases](https://github.com/Zqfd/blocus-web-browser/releases) (Windows 10 only)

- How to contribute?
    - See [how to report a vulnerability](https://github.com/Zqfd/blocus-web-browser/blob/main/SECURITY.md)
    - Fork or clone the main branch
    - Do improvements, modifications, etc
    - Push to a new branch in the blocus web browser repository (pseudo-nameofthepatch)
    - Pull request explaining changes
    - Feel free to ask some questions: [discussion](https://github.com/Zqfd/blocus-web-browser/discussions)

### Related repos coming soon

- Blocus private search engine (search.blocus.sx).
- Blocus Invidious instance (not-ytb.blocus.sx).
- Blocus WebMail (Postfix TLS Swiss Server with opensource GUI).
- Blocus ChatRoom (WebApp PHP instant messaging with encrypted database).


### In future updates

- Index.html with more than a blank page without tabs.
- Customisable url toolbar.
- Proxy.
- Simple and light interface.
- A lot of work for MacOs compatibility

# Developpement

## Compatibility
- Tested on Windows 10.
- Not yet tested on Windows 11.
- Needs main.js rework for Linux.
- Not yet tested on MacOs.

## <a name="install">Installation<a>

#### <a name="installwin">Install on Windows 10</a><br><span style="font-size:10px;">(PowerShell / Git Bash)</span>

- Download [Nodejs](https://nodejs.org/en/download/)18.x.x for windows. This setup will also install npm.
- Check if it's ok:
```sh
node --version
> v18.14.2
```
```sh
npm --version
> 9.5.0
```

- Theses commands will clone the repository and install dependencies:<br>
```sh
git clone https://github.com/Zqfd/blocus-web-browser.git
cd blocus-web-browser
npm install
```

- Run the app:
```sh
npm start
```

#### <a name="installdeb">Install on Linux</a> (*unstable*)
- Be sure you run at least Nodejs version 18.x.x.x
```sh
node --version
> v18.14.2
```
- Be sure you run the last version of npm
```sh
npm --version
> 9.5.0
```
- Theses commands will clone the repository and install dependencies:
```sh
git clone https://github.com/Zqfd/blocus-web-browser.git
cd blocus-web-browser
npm install
```
- Run the app
```sh
npm start
```

