// import { createGitgraph } from "../node_modules/@gitgraph/js/lib/gitgraph.js";

const graphContainer = document.getElementById("gitgraph");

// Helper functions to create SVGs
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

function createText(options) {
  const text = document.createElementNS(SVG_NAMESPACE, "text");
  text.setAttribute("alignment-baseline", "central");
  text.setAttribute("dominant-baseline", "central");
  text.textContent = options.content;

  if (options.bold) {
    text.setAttribute("font-weight", "bold");
  }

  if (options.fill) {
    text.setAttribute("fill", options.fill);
  }

  if (options.font) {
    text.setAttribute("style", `font: ${options.font}`);
  }

  if (options.anchor) {
    text.setAttribute("text-anchor", options.anchor);
  }

  if (options.translate) {
    text.setAttribute("x", options.translate.x.toString());
    text.setAttribute("y", options.translate.y.toString());
  }

  if (options.onClick) {
    text.addEventListener("click", options.onClick);
  }

  return text;
}


function createG(options) {
  const g = document.createElementNS(SVG_NAMESPACE, "g");
  options.children.forEach((child) => child && g.appendChild(child));

  if (options.translate) {
    g.setAttribute(
      "transform",
      `translate(${options.translate.x}, ${options.translate.y})`,
    );
  }

  if (options.fill) {
    g.setAttribute("fill", options.fill);
  }

  if (options.stroke) {
    g.setAttribute("stroke", options.stroke);
  }

  if (options.strokeWidth) {
    g.setAttribute("stroke-width", options.strokeWidth.toString());
  }

  if (options.onClick) {
    g.addEventListener("click", options.onClick);
  }

  if (options.onMouseOver) {
    g.addEventListener("mouseover", options.onMouseOver);
  }

  if (options.onMouseOut) {
    g.addEventListener("mouseout", options.onMouseOut);
  }

  return g;
}

function createForeignObjectHTML(options) {
  const result = document.createElementNS(SVG_NAMESPACE, "foreignObject");
  result.setAttribute("width", options.width.toString());

  if (options.translate) {
    result.setAttribute("x", options.translate.x.toString());
    result.setAttribute("y", options.translate.y.toString());
  }

  const div = document.createElement("div");
  div.innerHTML = options.content;
  result.appendChild(div);

  return result;
}

const renderMessage = (commit) => {
    return createForeignObjectHTML({
        content: `<img src="${commit.subject}"/>`,
    });
};



options = {
    // author: ' ',
    orientation: 'vertical-reverse',
    mode: GitgraphJS.Mode.Compact,
    // generateCommitHash: GitgraphJS.createFixedHashGenerator(),
        template: GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
          branch: { label: { display: false } }, 
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


// var renderTooltip = function(commit) {
//   console.log('working');
//   var commitSize = commit.style.dot.size * 2;
//   return createG({
//     translate: { x: commitSize + 10, y: commitSize / 2 },
//     children: [
//       // renderSax(commit),
//       createText({
//         translate: { x: 40, y: 15 },
//         fill: commit.style.dot.color,
//         // fill: 'grey',
//         // content: commit.hashAbbrev + ' - ' + commit.subject,
//         content: commit.subject

//       }),
//     ],
//   });
// };
function showTooltip(evt, text) {
  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = text;
  tooltip.style.display = "grid";
  tooltip.style.left = 90 + 'px';
  tooltip.style.top = 50 + 'px';
  // tooltip.style.left = evt.pageX + 50 + 'px';
  // tooltip.style.top = evt.pageY + 50 + 'px';
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

const master = gitgraph.branch("US Constitution");
master.commit(
  {subject: "Articles of Confederation",
 onMouseOver(commit){
    showTooltip('evt', `<img src="img/constitution-page1.jpg" width='300px' height='400px'>`)
    console.log(`test ${commit.subject}`)
    // renderTooltip(commit)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
});
master.commit(
  {subject: 'constitution',
  onMouseOver(commit){
    showTooltip('evt', `<img src="img/NMAH-ET2016-04901.jpg" width='500px' height='800px'>`)
    console.log(`test ${commit.subject}`)
    // renderTooltip(commit)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}

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
master.merge(newFeature_BOR, {subject: "Add feature"});
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


