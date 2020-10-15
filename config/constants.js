const devConfig = {
    MONGO_URL: 'mongodb://localhost/mydb-dev',
    JWT_SECRET: 'thisisasecret',
};

const testConfig = {
    MONGO_URL: 'mongodb://localhost/mydb-test',
};

const prodConfig = {
    MONGO_URL: 'mongodb+srv://koAne:sp-kola@cluster0.2lii3.mongodb.net/mydb-prod?retryWrites=true&w=majority',
    JWT_SECRET: 'thisisasecret',
};

const defaultConfig = {
    PORT: process.env.PORT || 3300,
};

function envConfig(env) {
    console.log(env)
    switch (env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
}

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
};