export function parseDBVideoData(dbData) {
    let parsedData = {};
    if (dbData.hasOwnProperty('movie-categories')) {
        let dbMovieCat = dbData['movie-categories'];
        let movieCategories = {
            allIds: []
        };
        for (let index in dbMovieCat) {
            let category = dbMovieCat[index];
            movieCategories[category.id] = category;
            movieCategories
                .allIds
                .push(category.id);
        }
        parsedData['movieCategories'] = movieCategories;
    }

    if (dbData.hasOwnProperty('movie-authors')) {
        let dbAuthors = dbData['movie-authors'];
        let videoList = {
            allIds: []
        };
        let authorList = {
            allIds: []
        };
        for (let index in dbAuthors) {
            let author = dbAuthors[index];
            let authorId = author.id;
            authorList[author.id] = {
                id: author.id,
                name: author.name
            }
            authorList.allIds.push(author.id);
            let authorVideos = author.videos;
            for (let videoIndex in authorVideos) {
                let video = authorVideos[videoIndex];
                Object.assign(video, {author: authorId});
                videoList[video.id] = video;
                videoList
                    .allIds
                    .push(video.id);
            }
        }
        parsedData['videoList'] = videoList;
        parsedData['authorList'] = authorList;
    }

    return parsedData;
}