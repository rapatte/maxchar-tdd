module.exports = maxChar = (str) => {
    // objet qui contient les elements de la string avec comme 
    // valeur le nombre de fois que l'element apparait
    let chars = {};
    for (const char of str) {
        if (!chars[char]) {
            chars[char] = 1
        }
        if (chars[char]) {
            chars[char] ++
        }
    }
    const max = Math.max(...Object.values(chars))
    for (let key in chars) {
        if (chars[key] === max) return key
    }
}