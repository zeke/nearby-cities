// This is a Netlify serverless function
// 
// https://docs.netlify.com/functions/build-with-javascript

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  })
}