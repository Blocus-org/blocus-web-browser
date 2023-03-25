# Thank you for being here!
Welcome to the Blocus Web Browser contributing aera. You can find here every information you need to contribute to this project. Please read our [Code of conduct]().
<br><br>First of all, ***--I do not know if everything is good like this, I will maybe update this file sometimes--***, so feel free to contribute here too for corrections! 
<br><br>Welcome to begginers and pros to teach or learn something useful! You will need some tools for contributing the best way. 

- If you are a begginer with Git and Github, do not be afraid, I was too, when I created this repository. But I can explain you if you need with the ([how?]()) label. You can also read some [docs](https://docs.github.com/fr/get-started), 
  it's always a good thing and the one from Github is good.
  
# How to contribute?
- Read our [objectives](#objectives) before continuing.
- Here's some infos to help you contriubute the best way without wasting your time:

  - ***The project is still in Alpha and updates a lot! (more than two updates a week sometimes)*** So, if you got somes big modifications to do, try to stay updated and feel free to ask to join directly the repository collaborators:
 
     - Verify somone else is not working on the same modification/fix ([here]())
     - Fork the MAIN branch to your account ([how?](#fork))
     - Do your mofifications/fixes ([how?](#modifs))
     - Pull request with this [template]() to a new branch: yourpseudo-nameofthepatch ([how?](#pull-request))
     - If your modifications/fixes fit with our objectives, it will be merged to the ***master*** branch for next alpha relaease. It is the moment we merge master and main branches.
<br>

## <a name="fork">How to fork a repository</a>
You will need a Github account:
- Go to the repository's root on Github ([here](https://github.com/Zqfd/blocus-web-browser))
- Click on 'Fork'
- Leave the default fork name like this 
- Be sure that 'fork only main branch' is selected
- Click on 'Create fork'

## <a name='modif'>How to modifiy a fork</a>
### Git GUI Windows 10
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
- Be sure to have Git last version installed
- Run git GUI
- Chose 'Clone Existing Repository'
- Source Location: https://github.com/yourusername/your-fork
- Target Directory: 'C://WhereYouWant/***your-fork***'
- Clone Type: Standard
- Select 'Recursively clone submodules too'
- Then clone it
- ***You can now do your modifications with your favourite text-editor, Git will scan for changes in your files.***

## <a name='pull-request'>How to create a pull request</a>
There's some steps to do before:
### Git GUI Windows 10
- Once you've done with your modifications/fixes you need to rescan the repository to update the Git interface
- One your modifications are displayed (in green and red), verify for errors.
- Click on stage changed (you can also put file one by one by opening the commit tab in the toolbar and clicking on Stage to commit, if you did something wrong you can unstage files with the same method if they've not been pushed already)
- Then write a brief descritpion of changes in the Commit Message area.
- DO NOT FORGET TO SIGN OFF UNLESS WE WON'T BE ABLE TO MERGE YOUR BRANCH ([how?]()) 
- Click on commit
- SIGN OFF AGAIN (my gad...)
- Click on 'push'
- Select 'Remote: origin' (It is the path from where you did clone the repository. You can change it in the Remote tab in the toolbar)
- Unselect all transfer options
- Push
- ***Your fork has now been updated on Github and you can create a pull request to the master branch of the original repository with this [template]()***

I hope you found it useful, feel free to suggest modifications or precisions, open a discussion, or directly send us messages on blocus-org@proton.me(may take some time to get an answer), if you need more infos/help.

## <a name='objectives'>This project objectives:
  - Remain a free opensource app desktop accessible to anybody
  - Protecting and not selling privacy
  - Block ads and tracking forever and the most efficiently possible.
  - Written in pure Javascript.
  - The renderer process, as the main process, must remain without node integration and on context isolated.
  - The user agen must remain 'Blocus Web Browser' without further information on the user's device, for the moment.
  - The app is compatible with all desktop platform.
  - No ads or sponsor inside the app.
  - If you're looking for a business or working contract, you need to contact somone else in another organization, we do not provide any marketing services, just love for coding and sharing it.
