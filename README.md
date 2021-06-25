## Packages used

- nextJS
- styled-components-babelrc
- firebase
- xlsx
- chakra UI
- react-icons
- next-images
- next-SEO
- Google Analytics at \_document.js
- react-audio-player
- file-loader url-loader --> To handle mp3 files
- next-compose-plugins --> for multiple plugins in next.config.js

## To maintain styling of useStyles during page refresh

- Need styled-components-babelrc
- add \_document.js into Pages

## TO DO

> Pending

- [ ] Added responsive font size
  - [x] Done for PageHeader and Searchbox Input ("md" is needed to avoid zoom in for inputs)
  - [x] use a form to enable a enter function to start search
  - [ ] Find a way to do it globally
- [ ] Add favorite words
- [ ] Add mobile nav bar
- [ ] Diary page
  - [ ] Allow users to write a simple daily diary
  - [ ] If set to public, users can let others check their writings
  - [ ] Quick word search within the same page for fast typing
- [ ] Activities
  - [ ] Chunk game to create longer sentences from one simple phrase.
    - [ ] Users can add in their own sentence
  - [ ] Provide a simple structured conversation topics to practice
- [ ] Index.JS Landing page
  - [ ] shows updates on weekly words, features, newcomers etc
- [ ] Quiz page
  - [ ] Test vocabulary (show hiragana toggle)
  - [ ] Filter by word level
- [ ] Add a diary blog feature
  - [ ] Users can create an account and start writing their daily activities in japanese
  - [ ] People can help correct sentences if they make it public
- [ ] By Topics
  - [ ] Create template
- [ ] By Stories
  - [ ] Youtube learning page
  - [ ] Create template

> 25/6/2021

- [x] Updated landing page UI
- [x] Replace index page with About page

> 24/6/2021

- [x] Mobile nav bar

> 21/6/2021

- [x] Word search UI and sorting

> 13/6/2021

- [x] Added wordsearch function using Jisho.org API

> 29/5/2021

- [x] Revalidate Word database from getStaticProps

> 23/5/2021

- [x] Convert hiragana to romaji function
- [x] show number of words in the current library
- [x] Added explanation field
- [x] show romaji instead of hiragana
- [x] show romaji for all conjugations
- [x] fixed bug where word type is not defined

> Done

- [x] About page
  - [x] Styling and images
- [x] Added Buy Me A Coffee
- [x] Vocabulary page
  - [x] Instead of showing table, do something like Google search
  - [x] Allow users to submit words that they can't find
  - [x] Irregular words
  - [x] Combine categories to one
  - [x] Add "all" to select filter, set that as default search
- [x] Filter by first two character for hiragana and romaji
