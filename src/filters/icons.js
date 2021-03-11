const iconsChip = {
    "c#": "mdi-language-csharp",
    c: "mdi-language-c",
    "c++": "mdi-language-cpp",
    java: "mdi-language-java",
    py: "mdi-language-python",
    js: "mdi-language-javascript",
    php: "mdi-language-php",
    sql: "mdi-database-search",
    hc: "mdi-language-html5",
    androids: "mdi-android-studio",
    git: "mdi-git",
    scrum: "mdi-account-group",
    unity: "mdi-unity",
    ps: "mdi-adobe",
    bootstrap: "mdi-bootstrap",
    vue: "mdi-vuejs",
    express: "mdi-api",
    foundation: "mdi-language-css-3",
    vuetify: "mdi-vuetify",
    mysql: "mdi-database-outline",
    postgre: "mdi-database",
    github: "mdi-github",
    linkedin: "mdi-linkedin",
    twitter: "mdi-twitter",
    email: "mdi-email-outline",
    info: "mdi-information-outline",
    calendar: "mdi-calendar-check",
    moon: "mdi-power-sleep",
    sun: "mdi-white-balance-sunny",
    lightDark: "mdi-theme-light-dark",
    code: "mdi-code-braces",
    tools: "mdi-tools",
    location: "mdi-google-maps",
    reroll: "mdi-reload",
    firebase: "mdi-firebase",
    whatsapp: "mdi-whatsapp",
    node: "mdi-nodejs",
    axios: "mdi-lambda",
    heroku: "mdi-alpha-h-box",
    sequelize: "mdi-database-arrow-up-outline",
    search: "mdi-magnify"
}
const lvlsIcons = {
    0: "mdi-star-half",
    1: "mdi-star-half-full",
    2: "mdi-star",
    3: "mdi-death-star-variant",
}

const iconsChips = function (value) {
    return iconsChip[value];
}
const iconslvls = function (value) {
    return value == -1 ? "" : lvlsIcons[value];
}


export {
    iconsChips
}
export {
    iconslvls
}