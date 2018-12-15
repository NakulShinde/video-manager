export function getCategories(catIds, movieCategories) {
    let categoriesArray = []
    for (const index in catIds) {
        let category = movieCategories[catIds[index]];
        categoriesArray.push(category.name)
    }
    return categoriesArray.join(', ')
}

function matchFirstNumberInstring(input) {
    let numberMatch = input.match(/(\d+)/g);
    return numberMatch
        ? parseInt(numberMatch[0])
        : 0;
}

export function getHighQualityFormat(formatArr) {
    let formatKeys = Object.keys(formatArr);
    if (!formatArr || formatKeys.length <= 0) {
        return 'N/A'
    } else if (formatKeys.length === 1) {
        return `${formatKeys[0]} ${formatArr[formatKeys[0]].res}`
    }
    let highQualityFormatKey = formatKeys[0];
    let highQualityFormat = formatArr[highQualityFormatKey];
    for (let index = 1; index < formatKeys.length; index++) {
        const currentKey = formatKeys[index];
        const currentFormat = formatArr[currentKey];
        const resInNum = matchFirstNumberInstring(currentFormat.res);
        const highResInNum = matchFirstNumberInstring(highQualityFormat.res);
        if (resInNum >= highResInNum && currentFormat.size >= highQualityFormat.size) {
            highQualityFormatKey = currentKey;
            highQualityFormat = currentFormat;
        }
    }
    return `${highQualityFormatKey} ${highQualityFormat.res}`
}