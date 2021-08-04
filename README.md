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
  - [x] Connect to firebase
  - [x] Merge Database structure in getServerSideProps
    - [ ] Database of Template dictates the following info
      - [ ] About activity
      - [ ] Images
      - [ ] Age restriction
      - [ ] Category
      - [ ] Business links (social media, email, phone)
    - [ ] Database of Schedule dictates the following info
      - [ ] Price
      - [ ] Schedule (date and time)
      - [ ] Location
      - [ ] Participant Limit
  - [ ] Link to components
    - [ ] Page Header
    - [ ] Activity Details
    - [ ] Images
    - [ ] RTE
    - [ ] Participants (to hide as it is not used in first phase )
    - [ ] Other activities from partner
    - [ ] Other similar activities
    - [ ] Tag whether it is online or inperson
  - [ ] Separate to components

> Pending
