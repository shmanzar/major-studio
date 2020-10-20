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
    // displayHash: false
    // template:  {
    //   messageHashDisplay: false
    //     },
}
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);


const master = gitgraph.branch("US Constitution");
master.commit("1787 - states came together and adopted the constitution");
master.tag("1787");
const newFeature = gitgraph.branch("Bill of Rights");
newFeature.commit("1st Amendment");
// master.commit("Hotfix a bug");
newFeature.commit("2nd Amendment")
  .commit('3rd Amendment');
// Merge `newFeature` into `master`
master.merge(newFeature, "Release new version");