# SpiderX Native
SpiderX allows you to watch movies by scraping data from the internet. The frontend is built with Vue.js and the scraping process is handled by python scrapy framework.

## How it works
1. The user searches will be first sent to firestore, if the search is not found in the firestore then the scraper (python scrapy framework) will be called to initiate the scraping process.
2. Once the scraper scrapes the data, the data scraped will be sent to firestore.
3. Using firestore real-time updates, the vue interface will be updated in real-time.

## Features
1. Get trending movies 
2. Get tob imdb movies
3. List movies by genres
4. Trailers for those movies
5. Get info about the movie
6. Ofcourse, watch the movie itself

## UI

### Authentication

![Authentication](screenshots/auth.png)

### Home, Search, Imdb

![Home, Search, Imdb](screenshots/home_search_imdb.png)

### Favorites, Search Result, Movie Info

![Favorites, Search Result, Movie Info](screenshots/favorites_search_result_movie_details.png)

## Running Locally

This app is built with expo, so you need to install the expo cli package globally in your system.

```bash
npm i -g expo-cli
```

You also need to setup a firebase project and the url to your python scraper (I am using heroku for hosting the scraper)

Create a .env file at the root of the project that looks like this:

```bash
# the url to your python scraper
SPIDERX_HEROKU=<YOUR_URL_HERE>

# firebase web configuration (you need to first create a firebase project)
APIKEY=<APIKEY_HERE>
AUTHDOMAIN=<AUTHDOMAIN_HERE>
DATABASEURL=<DATABASEURL_HERE>
PROJECTID=<PROJECTID_HERE>
STORAGEBUCKET=<STORAGEBUCKET_HERE>
MESSAGESENDERID=<MESSAGESENDERID_HERE>
APPID=<APPID_HERE>
MEASUREMENTID=<MEASUREMENTID_HERE>
```

Then clone this repo, install the dependencies and run <code>expo start</code>

```bash
git clone https://github.com/manikandanraji/spiderx-native
cd spiderx-native
npm i
expo start
```

## Web

I also built a web interface using vuejs, if you are interested [here's the repo](https://github.com/manikandanraji/spiderx-frontend)
