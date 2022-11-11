// adding filter for the timestamp on the blog section
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig){
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).
      toLocaleString(DateTime.DATE_MED);
    }
  )
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public"
      
    }
  }
}
