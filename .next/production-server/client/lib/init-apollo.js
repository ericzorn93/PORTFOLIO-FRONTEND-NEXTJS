"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
const apollo_link_context_1 = require("apollo-link-context");
const apollo_link_http_1 = require("apollo-link-http");
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
const isBrowser_1 = require("./isBrowser");
let apolloClient = null;
// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser_1.isBrowser) {
    global.fetch = isomorphic_unfetch_1.default;
}
function create(initialState, { getToken }) {
    const httpLink = apollo_link_http_1.createHttpLink({
        uri: "https://ez-portfolio-backend-graphql.herokuapp.com/graphql"
        // credentials: "include"
    });
    const authLink = apollo_link_context_1.setContext((_, { headers }) => {
        const token = getToken();
        return {
            headers: {
                ...headers,
                cookie: token ? `qid=${token}` : ""
            }
        };
    });
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new apollo_boost_1.ApolloClient({
        connectToDevTools: isBrowser_1.isBrowser,
        ssrMode: !isBrowser_1.isBrowser,
        link: authLink.concat(httpLink),
        cache: new apollo_boost_1.InMemoryCache().restore(initialState || {})
    });
}
function initApollo(initialState, options) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!isBrowser_1.isBrowser) {
        return create(initialState, options);
    }
    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState, options);
    }
    return apolloClient;
}
exports.default = initApollo;
//# sourceMappingURL=init-apollo.js.map