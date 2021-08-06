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

- [ ] Activity page
  - [x] "I'm Interested" popup
  - [ ] Send notification Details to partner object
  - [ ] Request private class?
  - [ ] Request date
  - [ ] About Trainer/host
- [ ] Landing page
  - [ ] Hero
- [ ] Review database
  - [ ] PartnerId change to orgName rather than Firebase GID
    - [ ] Format example (tomi-build) which need to check if exist or not first
  - [ ] Database of Template
    - [ ] Add duration into Template
    - [ ] About activity
    - [ ] Images
    - [ ] Age restriction
    - [ ] Category
    - [ ] Business links (social media, email, phone)
    - [ ] Default Price (multiple price?)
    - [ ] Participant Limit
  - [ ] Database of Schedule
    - [ ] Add HostDetails in Schedule
    - [ ] Add spots left
    - [ ] Schedule (date and time)
      - [ ] Time should be based exactly on Duration set in template
    - [ ] Remove unnecessary info
      - [ ] Location to be removed here
      - [ ] Price to be removed here
      - [ ] Participant Limit to be removed here
  - [ ] Other similar activities

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
