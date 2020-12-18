# git constitution

An exploration into visualising historical legal documents using a git graph.

[Link to the prototype](https://shmanzar.github.io/major-studio/project_03_interactive/final/index.html)

# Documentation

## Motivation

The **United States of America’s Constitution** is the oldest written and currently active constitution in the world. It is the supreme law of the land, and defines the structure of the government and the limitations imposed on it by way of rights that it enshrines to its citizens. It remains one of the most consequential documents in history and has inspired many subsequent similar documents in countries across the world. Domestically, however, it was a contentious exercise since its inception and it has only become more politically charged. _The country remains sharply divided as to what it meant then and what it means today._

Is the Constitution a living document? If so, then can it be visualised as such? I believe that the question can be better engaged with if it could be visualised as such. Tracking changes and "evolution" in text documents is important endeavour and one which has many solutions. Computer scientists and programmers, for example, use **git** to track changes in their codes repositories which are more often than not, entirely text-based. This gives us on opportunity to use the same mechanism for tracking changes the constitution.

[](https://raw.githubusercontent.com/shmanzar/major-studio/master/project_03_interactive/final/screens/images/index.png)

Git's version control allows tracking changes in a text document as it evolves; **it tracks deletions, additions, and even follows separate silos in which draft is being developed via branches**.

The term branches reveals how Git visualises the changing text: in **tree graphs** and more specifically a directed acyclic graph . Each node represents a commit, version in time of the text - with major changes being developed in a separate branch, and then pushed back into the main branch as a a new commit.

[](https://raw.githubusercontent.com/shmanzar/major-studio/master/project_03_interactive/final/screens/images/state01png)

To frame it into Git terms, the US Constitution has had 27 ‘commits’. 26 have been additions and one deletion. The first ten were developed and ratified as together - a single branch. While all the rest were pushed into the main as individual commits. Six amendments were proposed but never ratified, with two of them now past the date by which they could be ratified - representing four active ‘development branches’ and two dormant branches.

[](https://raw.githubusercontent.com/shmanzar/major-studio/master/project_03_interactive/final/screens/images/state02.png)

## Data used

Partners: **The Smithsonian Institution**

Data API and sources : [Smithsonian Open Access](https://www.si.edu/openaccess) and [The National Archives public domain data](https://www.archives.gov/research)

## Technologies used

Tools: JavaScript (d3 and node), CSS, HTML, AWS and Adobe Illustrator

### Major Studio 1 | Final | Fall 2020

[](smanzar@newschool.edu)
