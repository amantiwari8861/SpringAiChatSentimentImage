# Git and Github

- Git -> local version control system (VCS)
- Github -> a platform where we can host our code

## Setup Git and Github

- install git for windows/linux/Mac
- open terminal
- type `git -v` to check git version
- `git config --global --list`
- `git config --global user.email "youremail@gmail.com"`
- `git config --global user.name "your name"`
- `git config --global --list`
- `git init` -> to initialize the empty repository
- `git add -A`  -> add all files to track by Git
- `git commit -a -m "any message"` -> commit is just like a savepoint where you can rollback
- make account on github
- make a repository on github and copy repository url
- `git remote add origin your-repository-url` -> telling git that here you have to push the codes
- `git push -u origin master` -> final command to push codes on github
- `git rm --cached SpringAiProject/src/main/resources/*.properties`
- `git restore --staged src/main/resources/*.properties`
