## Packages used in this template

- nextJS
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

## TO DO

- [ ] Database updates
  - [ ] PartnerId change to orgName rather than Firebase GID
    - [ ] Format example (tomi-build) which need to check if exist or not first
  - [ ] Database of Template
    - [ ] Add duration into Template
    - [ ] Edit Default Price (how to deal with multiple pricing under one booking?)
    - [ ] Add Conductor info (conductorSummary, conductorName, conductorImage)
  - [ ] Database of Partner
    - [ ] Change orgDescription to orgSummary (limit to 30 characters)
    - [ ] Edit orgWebsite to include https:// by default
  - [ ] Database of Schedule
    - [ ] Add HostDetails in Schedule
    - [ ] Add spots left
    - [ ] Schedule (date and time)
      - [ ] Time should be based exactly on Duration set in template
    - [ ] Remove unnecessary info
      - [ ] Location to be removed here
      - [ ] Price to be removed here
      - [ ] Participant Limit to be removed here
  - [ ] Send notification Details to partner object
- [ ] Landing page
  - [ ] Hero
- [ ] Other similar activities
- [ ] Nice to have
  - [ ] Request date and private class
  - [ ] Get users interested topics
    - [ ] Reconsider usage of react-select (multi select is important)

> Done

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
