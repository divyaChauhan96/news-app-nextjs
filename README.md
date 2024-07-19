NextLevel News Application

To start the project-------------------------------------------------------------------

1. Run npm install on terminal
2. npm run dev (To run in dev mode)
3. npm run build (for optimized production build) followed by npm start

###----------------News page----------------###
This Page shows news grid with dummy news items. The file dummyNews.js contains the pre-initialized dummy data
populated on the News page

###----------------Archive page----------------###
This page will contain Two parallel routes- Archive and Latest
Since these 2 are parallel routes nested inside archive so the two components/paths will be accessible from
'/archive' path only
Archive will contain the news from previou years can be filtered on the basis of years, months
Latest will show the news from the dummy data(dummyNews.js) The top 3 records
