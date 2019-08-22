// const path = require("path");

// exports.createPages = ({ boundActionCreators, graphql }) => {
  
//   // Destruction createPage from boundActionCreators
//   const { createPage } = boundActionCreators;
//   // Path to markdown template file
//   const releaseNotesTemplate = path.resolve("src/templates/releaseNotesTemplate.js");

//   // GraphQL query
//   const data = graphql(`
//           {
//             allMarkdownRemark {
//               edges {
//                 node {
//                   html
//                   id
//                   frontmatter {
//                     path
//                     title
//                     date
//                   }
//                 }
//               }
//             }
//           }
//         `);
  
//   // Returns a promise
//   return data.then(res => {
//     if (res.errors) {
//       return Promise.reject(res.errors);
//     }
    
//     // Loops through each markdown file 
//     // and creates page
//     res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         // sets path 
//         path: node.frontmatter.path,
//         component: releaseNotesTemplate
//       });
//     });
//   });
// };