## Packages used in this template

- nextJS (v11)
- styled-components-babelrc
- firebase
- draft-js (For rich text editor)
- draft-convert (For rich text editor
- express
- chakra UI
- momentJS
- react-device-detect
- react-day-picker
- react-icons
- react-share
- react-select
- swiper (carousel)
- react-responsive-carousel
- next-images
- next-SEO
- Google Analytics at \_document.js
- file-loader url-loader --> To handle mp3 files
- next-compose-plugins --> for multiple plugins in next.config.js

## To maintain styling of useStyles during page refresh

- Need styled-components-babelrc
- add \_document.js into Pages

## Changes to Template

- Reduce margin between sections
- Upgrade to NextJS v11
- Updated next.config.js

## TO DO

- [ ] Landing page (index.js)
  - [x] Featured
    - [x] FeaturedObject
    - [x] Add button to direct to activity
  - [ ] Cards
    - [x] Show if online activity
    - [ ] Randomize cards order
  - [ ] Review Hero design
  - [ ] Partner cards
    - [ ] Reduce image size
    - [ ] Remove tag
    - [ ] Change card design
  - [ ] Newsletter
  - [ ] Timetable (for this week)
- [ ] Fix focus image sizing
- [ ] Other similar activities
- [ ] Nice to have
  - [ ] Request date and private class
  - [ ] Get users interested topics
    - [ ] Reconsider usage of react-select (multi select is important)
- [ ] Signup
  - [ ] Signup is disabled at InterestForm

## Done

> 13/8/2021

- [x] Activity Page
  - [x] Payment notes
  - [x] Fix Vertical card size (380px)
  - [x] Order schedule by date
  - [x] Show only upcoming 3 schedules (add "see all" to expand list)
  - [x] Show only Published activities (isActive)
  - [x] Send "I'm interested" to Partner Database
- [x] Updated NextJS to V11
  - [x] Update Next Image (removed placeholder="blur")
  - [x] Updated next.config.js to allow png

> Previous

- [x] Activity Page
  - [x] Connect to firebase
  - [x] Merge Database structure in getServerSideProps
  - [x] Booking link override platform booking system
  - [x] Link DB to components
    - [x] Page Header
    - [x] Images
    - [x] RTE
    - [x] Remove Participants
    - [x] Other activities from partner
    - [x] Tag whether it is online or inperson
  - [x] Separate to components
  - [x] "I'm Interested" popup
  - [x] Add share url (with react-share)
  - [x] About Trainer/Host
