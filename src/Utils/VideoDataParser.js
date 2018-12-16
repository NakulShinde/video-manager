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
            authorList
                .allIds
                .push(author.id);
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

export function parseVideoDataToDBData(videoData, originalDbData, mode) {
    let movieAuthors = originalDbData['movie-authors'];

    for (let authorIndex in movieAuthors) {
        let authorData = movieAuthors[authorIndex];

        //videoData.author has author id ref
        if (videoData.author === authorData.id) {
            delete videoData.author;
            let videos = authorData.videos;
            if (mode === "add-mode") {
                videos = (videos)
                    ? videos
                    : [];
                videos.push(videoData)
                Object.assign(authorData, {videos: videos});

            } else if (mode === "update-mode") {

                let videoFound = false;
                for (let index in videos) {
                    let authorVideo = videos[index];

                    if (authorVideo.id === videoData.id) {
                        videoFound = true;
                        Object.assign(authorVideo, {
                            name: videoData.name,
                            catIds: videoData.catIds
                        })
                        break;
                    }
                }
                if (!videoFound) {
                    videos.push({
                        ...videoData
                    })
                }
            } else {}
            return authorData;
        }
    }
    return {};
}