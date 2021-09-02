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
- Added npm i react-input-autosize
- Added npm i react-to-print
- Added stripeJS

## PENDING

- [ ] Partner cards
  - [ ] Reduce image size
  - [ ] Remove tag
  - [ ] Change card design
- [ ] Timetable (for this week)
- [ ] Nice to have
  - [ ] Request date and private class
  - [ ] Get users interested topics
    - [ ] Reconsider usage of react-select (multi select is important)
- [ ] Signup
  - [ ] Signup is disabled at InterestForm

## TO DO

- [ ] Checkout summary page
  - [x] Summary of activity and price
  - [x] Can adjust quantity
  - [ ] Contact information (name, email, contact)
  - [ ] Ticket info for each attendant
  - [x] Link to payment page
  - [x] Redirect back to page after payment
  - [ ] Ticket information for all participants
- [ ] Newsletter
  - [ ] Get notified if there's new activities

## Done

> 1/9/2021

- [x] Landing page (index.js)
  - [x] Featured
    - [x] FeaturedObject
    - [x] Add button to direct to activity
  - [x] Cards
    - [x] Show if online activity
    - [x] Randomize cards order
  - [x] Review Hero design
  - [x] Location bar
  - [x] Navbar
  - [x] Community activities
  - [x] Branding
  - [x] Integrate stripe system
    - [x] Success page
      - [x] Add selected schedule date into metadata
      - [x] Pull information from Metadata
    - [x] Pull pricing from database in api instead of from client side
      - [x] Use activityId
      - [x] Get price from activityId at index.js/checkout_sessions

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
