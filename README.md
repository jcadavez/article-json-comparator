# article-json-comparator
Compares Articles JSON Files

## How to Use this tool
1. Download local branch
2. Add your JSON object from each article after the `module.exports = `
    - _article-prod.js_ is for Production articles
    - _article-dev.js_ is for Dev articles
3. Run the test by running this project by command `npm run test`
4. Each * is a layer when comparing the JSON object
5. These are the statuses
    - PASS - Both JSON share the same values
    - FAIL - The Dev JSON has a different value than Prod's
    - MISS - The Prod JSON doesn't have the value from Dev JSON

## Resources
- [How to do Nested Checks](https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript/8511350#8511350)
