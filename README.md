# Blocus Web Browser ***-- A work in progress Alpha 0.0.7***
![preview](src/img/preview.png)

Secure web browser with configurable privacy front-ends (coming soon).
Made with [Electron](https://github.com/electron/electron) (without node integration).

- Testing installation
    - [Releases](https://github.com/Zqfd/blocus-web-browser/tags) (Windows & Debian)

- Dev installation
    - [Windows](#installwin)
    - [Linux](#installdeb)
    - [MacOs](#installmac) (coming soon or maybe not, I do not like apple so much)

- How to contribute?
    - See [how to report a vulnerability](https://github.com/Zqfd/blocus-web-browser/blob/main/SECURITY.md)
    - Fork or clone the main branch
    - Do improvements, modifications, etc
    - Push to a new branch in the blocus web browser repository (pseudo-nameofthepatch)
    - Pull request explaining changes
    - Feel free to ask some questions: [discussion](https://github.com/Zqfd/blocus-web-browser/discussions)

### Related repos

- [Blocus Search Engine](https://github.com/Zqfd/blocus-search-engine)
- Blocus Invidious instance (not-ytb.blocus.sx). wip
- Blocus WebMail (Postfix TLS Swiss Server with opensource GUI). wip
- Blocus ChatRoom (WebApp PHP instant messaging with encrypted database). wip


### Features
- Integrated ad blocker (uBlock Origin)
- Other fun things

### In future updates

- Customisable url toolbar.
- Themes.
- Proxies.
- Simple and light interface.
- A lot of work for MacOs compatibility

# Developpement

## Compatibility
- Works on Windows 10.
- Not yet tested on Windows 11.
- Works on Debian
- Not yet tested on MacOs.

## <a name="install">Installation<a>

#### <a name="installwin">Install on Windows 10</a><br><span style="font-size:10px;">(Git Bash)</span>

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

