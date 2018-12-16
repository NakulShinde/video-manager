export const movieCategories = {
    "1": {
        "id": "1",
        "name": "Thriller"
    },
    allIds: ["1"]
}
export const videoList = {
    "1": {
        "id": "1",
        "author": "1",
        "catIds": ["1"],
        "name": "Set the Moon",
        "formats": {
            "one": {
                "res": "1080p",
                "size": 1000
            },
            "two": {
                "res": "720p",
                "size": 2000
            },
            "three": {
                "res": "720p",
                "size": 900
            }
        },
        "releaseDate": "2018-08-09"
    },
    allIds: ["1"]
}
export const authorList = {
    "1": {
        "id": "1",
        "name": "David Munch"
    },
    allIds: ["1"]
}

// create any initial state needed
export const initialStoreState = {
    appData: {
        movieCategories: movieCategories,
        videoList: videoList,
        authorList: authorList
    },
    apiIsLoading: false,
    apiHadError: false
};