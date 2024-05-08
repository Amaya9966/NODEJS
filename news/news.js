const { EventEmitter } = require("events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  const newsEventInterval = setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  const breakingNewsInterval = setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  const errorTimeout = setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
    clearInterval(newsEventInterval);
    clearInterval(breakingNewsInterval);
  }, 5000);

  setTimeout(() => {
    clearTimeout(errorTimeout);
  }, 6000);

  return emitter;
}

const newsFeed = createNewsFeed();

// Attach event listeners
newsFeed.on("newsEvent", (data) => {
  console.log("newsEvent:", data);
});

newsFeed.on("breakingNews", (data) => {
  console.log("breakingNews:", data);
});

newsFeed.on("error", (error) => {
  console.error("error:", error.message);
});
