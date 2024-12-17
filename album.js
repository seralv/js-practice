const album = {
  title: "Random Access Memories",
  artist: "Daft Punk",
  releaseYear: 2013,
  tracks: [
    { title: "Give Life Back to Music", duration: "4:34" },
    { title: "Get Lucky", duration: "6:09" },
    { title: "Instant Crush", duration: "5:37" },
  ],
};

const {
  title: albumTitle,
  artist,
  tracks: [{ title: firstTrackTitle }, { duration: secondTrackDuration }],
} = album;

console.log(
  `${albumTitle} by ${artist} features the song '${firstTrackTitle}' as the first track. The second track is ${secondTrackDuration} long.`,
);
