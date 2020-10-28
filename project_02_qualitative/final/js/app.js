// import { createGitgraph } from "../node_modules/@gitgraph/js/lib/gitgraph.js";

const graphContainer = document.getElementById("gitgraph");
// const options = {
//   template: templateExtend("metro", {
//     colors: ["red", "blue", "orange"],
//     // …
//   }),
// };

options = {
    author: ' ',
    orientation: 'vertical-reverse',
    // messageHashDisplay: false
    // generateCommitHash: 
    // mode: 'compact',
    // displayHash: false,
    // template:  {
    //   messageHashDisplay: false
    //     },
}
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);


const master = gitgraph.branch("US Constitution");
master.commit(
  {subject: "1787 - states came together and adopted the constitution",
  onMouseOver(commit) {
    console.log('test')
    tooltip({ content: `<img src="https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTc1NDQ5ODg3Mjk3MzE2MDM0/constitutional-amendments-gettyimages-170466249.webp" />` });
  }});
master.tag("1787");
const newFeature = gitgraph.branch("Bill of Rights");
newFeature.commit("1st Amendment");
// master.commit("Hotfix a bug");
newFeature.commit("2nd Amendment")
  .commit('3rd Amendment');
// Merge `newFeature` into `master`
master.merge(newFeature, "Release new version");