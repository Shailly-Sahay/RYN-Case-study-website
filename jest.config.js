export default {
  testEnvironment: "jsdom", // ✅ Ensures Jest can test React components
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // ✅ Ensures Jest transforms JSX
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // ✅ Prevents Jest from failing on CSS imports
  },
};
