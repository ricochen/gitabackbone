contrib guidelines

assuming you have forked the repo and cloned to your own computer.

1) after forking and cloning
- create a feature branch using your name
git checkout -b kevin
- do all work on your feature branch, not dev branch
- commit changes any changes
- prefix commits 
(feat)...
(fix)...
(refactor)
(cleanup)
(test)
(design)
(doc)...
etc....
- any work you do will 'always' be ahead of the dev branch

2) pulling from github/upstream
- git checkout
-  pull from github 
git pull upstream --rebase dev
- all recent work is now on your local computer 


3) rebase
-swtich to your feature branch
git checkout kevin
-to add features/commits to repo
git rebase dev
-resolve merge conflicts(if any).
- after resolving conflicts do another 
git add (whatever files)

4) submit pull request
- from you feature name branch
- MAKE SURE APP IS NOT BROKEN
git push origin kevin


Commit Message Guidelines

Commit messages should be written in the present tense; e.g. "Fix continuous integration script".
The first line of your commit message should be a brief summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.
If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.