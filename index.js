function introduction(firstName) {
    return `Hi, my name is ${firstName}.`;
}
introduction("Aki")
introduction("Samip")
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Aki", "Ember.js")
introductionWithLanguage("Samip", "React")

function introductionWithLanguageOptional(name, language = "JavaScript") {
return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
