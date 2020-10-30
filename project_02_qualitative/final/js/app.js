// import { createGitgraph } from "../node_modules/@gitgraph/js/lib/gitgraph.js";

const graphContainer = document.getElementById("gitgraph");
// const options = {
//   template: templateExtend("metro", {
//     colors: ["red", "blue", "orange"],
//     // …
//   }),
// };
// var withoutHash = GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
//   commit: {
//     message: {
//       displayHash: false,
//     },
//   },
// })
options = {
    // author: ' ',
    orientation: 'vertical-reverse',
    // generateCommitHash: GitgraphJS.createFixedHashGenerator(),
        template: GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
          commit: {
            message: {
              // author: " ",
              displayHash: false,
              displayAuthor: false,
            },
          },
        })

}
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

var renderTooltip = function(commit) {
  console.log('working');
  var commitSize = commit.style.dot.size * 2;
  return createG({
    translate: { x: commitSize + 10, y: commitSize / 2 },
    children: [
      // renderSax(commit),
      createText({
        translate: { x: 40, y: 15 },
        fill: commit.style.dot.color,
        // content: commit.hashAbbrev + ' - ' + commit.subject,
        content: commit.subject,

      }),
    ],
  });
};

const master = gitgraph.branch("US Constitution");
master.commit(
  {subject: "Articles of Confederation"
});
master.commit(
  {subject: "states came together and adopted the constitution",
  // onMouseOver(commit) {
  //   console.log('test')
  //   tooltip({ content: `<img src="https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTc1NDQ5ODg3Mjk3MzE2MDM0/constitutional-amendments-gettyimages-170466249.webp" />` });}
  renderTooltip: renderTooltip,
});
master.tag("1787");
const newFeature_BOR = gitgraph.branch("Bill of Rights");
newFeature_BOR.commit("1st Amendment");
newFeature_BOR.commit("2nd Amendment")
  .commit('3rd Amendment')
  .commit('4th Amendment')
  .commit('5th Amendment')
  .commit('6th Amendment')
  .commit('7th Amendment')
  .commit('8th Amendment')
  .commit('9th Amendment')
  .commit('10th Amendment')
// Merge `newFeature` into `master`
master.merge(newFeature_BOR, "passed in 23432");
const newFeature_11 = gitgraph.branch("11th Amendment");
newFeature_11.commit("11th Amendment")
master.merge(newFeature_11, "Amendment passed in 13123")
const newFeature_12 = gitgraph.branch("12th Amendment");
newFeature_12.commit("12th Amendment")
master.merge(newFeature_12, "Amendment passed in 13123")
const newFeature_13 = gitgraph.branch("13th Amendment");
newFeature_13.commit("13th Amendment")
master.merge(newFeature_13, "Amendment passed in 13123")
const newFeature_14 = gitgraph.branch("14th Amendment");
newFeature_14.commit("14th Amendment")
master.merge(newFeature_14, "Amendment passed in 13123")
const newFeature_15 = gitgraph.branch("15th Amendment");
newFeature_15.commit("15th Amendment")
master.merge(newFeature_15, "Amendment passed in 13123")
const newFeature_16 = gitgraph.branch("16th Amendment");
newFeature_16.commit("16th Amendment")
master.merge(newFeature_16, "Amendment passed in 13123")
const newFeature_17 = gitgraph.branch("17th Amendment");
newFeature_17.commit("17th Amendment")
master.merge(newFeature_17, "Amendment passed in 13123")
const newFeature_18 = gitgraph.branch("18th Amendment");
newFeature_18.commit("18th Amendment")
master.merge(newFeature_18, "Amendment passed in 13123")
const newFeature_19 = gitgraph.branch("19th Amendment");
newFeature_19.commit("19th Amendment")
master.merge(newFeature_19, "Amendment passed in 13123")
const newFeature_20 = gitgraph.branch("20th Amendment");
newFeature_20.commit("20th Amendment")
master.merge(newFeature_20, "Amendment passed in 13123")
const newFeature_21 = gitgraph.branch("21st Amendment");
newFeature_21.commit("21st Amendment")
master.merge(newFeature_21, "Amendment passed in 13123")
const newFeature_22 = gitgraph.branch("22nd Amendment");
newFeature_22.commit("22th Amendment")
master.merge(newFeature_22, "Amendment passed in 13123")
const newFeature_23 = gitgraph.branch("23th Amendment");
newFeature_23.commit("23rd Amendment")
master.merge(newFeature_23, "Amendment passed in 13123")
const newFeature_24 = gitgraph.branch("24th Amendment");
newFeature_24.commit("24th Amendment")
master.merge(newFeature_24, "Amendment passed in 13123")
const newFeature_25 = gitgraph.branch("25th Amendment");
newFeature_25.commit("25th Amendment")
master.merge(newFeature_25, "Amendment passed in 13123")
const newFeature_26 = gitgraph.branch("26th Amendment");
newFeature_26.commit("26th Amendment")
master.merge(newFeature_26, "Amendment passed in 13123")
const newFeature_27 = gitgraph.branch("27th Amendment");
newFeature_27.commit("27th Amendment")
master.merge(newFeature_27, "Amendment passed in 13123")