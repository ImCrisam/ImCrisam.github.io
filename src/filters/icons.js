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
    unreal: "mdi-unreal",
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
    search: "mdi-magnify",
    angular: "mdi-angular",
    net: "mdi-dot-net",
    eslint: "mdi-eslint",
    kubernetes: "mdi-kubernetes",
    docker: "mdi-docker",
    webpack: "mdi-webpack",
    xml: "mdi-xml",
    sass: "mdi-sass",
    dev: "mdi-mdi-dev-to",
    nuxt: "mdi-nuxt",
    xamarin: "mdi-xamarin",
    graphql: "mdi-graphql",
    windows: "mdi-windows",
    babel: "mdi-babel",
    blender: "mdi-blender-software",
    azure: "mdi-azure",
    linux: "mdi-linux",
    npm: "mdi-npm",
    nativescript: "mdi-nativescript",
    visual_studio_code: "mdi-microsoft-visual-studio-code",
    visual_studio: "mdi-microsoft-visual-studio",
    laravel: "mdi-laravel",
    material_ui: "mdi-material-ui",
    ruby_on_rails: "mdi-language-ruby-on-rails",
    ruby: "mdi-language-ruby",
    fedora: "mdi-hat-fedora",
    debian: "mdi-debian",
    ubuntu: "mdi-ubuntu",
    wordpress: "mdi-wordpress",
    googleads: "mdi-google-ads",
    typescript: "mdi-language-typescript",
    r: "mdi-language-r",
    rust: "mdi-language-rust",
    go: "mdi-language-go",
    react: "mdi-react"
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