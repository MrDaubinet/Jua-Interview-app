# Jua Interview Application
This repository holds contains my work for the Jua.ai interview assignment.

## Scope of the assesment
The assesment required a web application which could ingest and display geojson data. Functionality includes:
* The ability to create a new geojson file,
* The ability to view a geojson file using a 3rd party library,
* The ability to edit a geojson file.
* The ability to save and load geojson files

## Architecture
to be completed.

## Design
To tackle this problem, I started by desigining my user interface in Figma. The design ideology took inspiration from [Refactoring UI](https://www.refactoringui.com/?ref=sidebar) with minimul colors, a soft approach to edges and lots of padding between content. Below are resulting images of my design work.

The landing page which displays a general map, along with a list of saved geojson files.
![home](/figma/Home.png)

The creation page, where a user can upload a new geojson file. Either by writing it out or uploading an already created file
![home](/figma/new.png)

The view page, where a user can view geojson files and there respective visualizations on a map.
![home](/figma/view.png)

Mobile versons of each page can be seen below
<p float="left">
    <img src="https://github.com/MrDaubinet/Jua-Interview-app/blob/master/figma/home-mobile.png" width="100" />
    <img src="https://github.com/MrDaubinet/Jua-Interview-app/blob/master/figma/new-mobile.png" width="100" /> 
    <img src="https://github.com/MrDaubinet/Jua-Interview-app/blob/master/jua-interview/figma/view-mobile1.png" width="100" />
    <img src="https://github.com/MrDaubinet/Jua-Interview-app/blob/master/figma/view-mobile2.png" width="100" />
</p>

After creating these designs, I deciceded to align the implemented solution closer to the look and feel of the [Jua.ia](jua.ai) website.

## Technologies
To be completed...

Technologies include:
* Figma
* Svelte.js
* tailwind.css
* Leaflet.js
* Firebase Hosting
* Firebase Firestore

## Design Decisions
1. Why did I create design?
2. Why did I use Svelte.js?
3. Why did I use Tailwind.css?
4. Why did I use Leaflet.js?
5. Why did I use Firebase hosting and firestore?
## local Develpopment

install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

