# git constitution

An exploration into visualising historical legal documents using a git graph.

[Link to the prototype](https://shmanzar.github.io/major-studio/project_03_interactive/final/index.html)

# Documentation

## Motivation

The United States of America’s Constitution is the oldest written and currently active constitution in the world. It is the supreme law of the land, and defines the structure of the government and the limitations imposed on it by way of rights that it enshrines to its citizens. It remains one of the most consequential documents in history and has inspired many subsequent similar documents in countries across the world. Domestically, however, it was a contentious exercise since its inception and it has only become more politically charged. The country remains sharply divided as to what it meant then and what it means today.

Git's version control n allows tracking changes in a text document as it evolves; it tracks deletions, additions, and even follows separate silos in which draft is being developed via branches.

The term branches reveals how Git visualises the changing text: in tree graphs and more specifically a directed acyclic graph . Each node represents a commit, version in time of the text - with major changes being developed in a separate branch, and then pushed back into the main branch as a a new commit.

To frame it into Git terms, the US Constitution has had 27 ‘commits’. 26 have been additions and one deletion. The first ten were developed and ratified as together - a single branch. While all the rest were pushed into the main as individual commits. Six amendments were proposed but never ratified, with two of them now past the date by which they could be ratified - representing four active ‘development branches’ and two dormant branches.

## Technologies used

### Major Studio 1 | Final | Fall 2020

[](smanzar@newschool.edu)
