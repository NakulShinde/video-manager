// create any initial state needed
export const initialState = {
    appData: {
        movieCategories: {
            "1": {
                "id": "1",
                "name": "Thriller"
            },
            allIds: ["1"]
        },
        videoList: {
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
        },
        authorList: {
            "1": {
                "id": "1",
                "name": "David Munch"
            },
            allIds: ["1"]
        }
    },
    apiIsLoading: false,
    apiHadError: false
};