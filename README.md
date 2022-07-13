# nasa-api-picture-v2-react-study

This project was created in React after the completion of the Udemy course, [JavaScript Web Project: 20 Projects to Build Your Portfolio](https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/).

During this course, the project was made with vanilla JavaScript so I rewrote the entire app in React.
The vanilla JavaScript version: [nasa-api-picture-v1-javascript-study](https://github.com/Pyon18Pyon/nasa-api-picture-v1-javascript-study).

## What it does?

This app is incorporating the NASA API to get random astronomy pictures of the day. If we click on an image we can view the full resolution version of that image in a new tab. There is a **Favorites** button so it is able to store our favorite pictures. Click the **Load More** button to load more pictures. 

## Key features

- The results are formatted into cards with an image title.
- Ability to add images to the favorites which is accomplished by using localStorage.
- When **Add To Favorites** button is clicked a little pop up comes up and notifies us that the image has been added to favorites. If we click the same image again the pop up doesn't come up because it has already been added to the favorites object.
- Ability to remove images from the favorite page.
- Has the option to go back to the main page.
- Loading animation.
- When scroll down the page and press **Load More** it will scroll back up to the top of the page with 10 fresh images.
- These images are lazy loaded in order to improve performance.
- Mobile responsive.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
