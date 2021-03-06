
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
    // orientation: 'vertical',

    orientation: 'vertical-reverse',
    mode: GitgraphJS.Mode.Compact,
    // generateCommitHash: GitgraphJS.createFixedHashGenerator(),
        template: GitgraphJS.templateExtend(GitgraphJS.TemplateName.Metro, {
          branch: { 
            label: { display: false }, lineWidth: "3px", spacing: 15}, 
          commit: {
            dot: {size: "6px"},
            spacing: 25,
            message: {
              // author: " ",
              displayHash: false,
              displayAuthor: false,
            },
          },
        })

}
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

// const tooltip = d3.select('#tooltip')
function showTooltip(evt, text) {
  let tooltip = document.getElementById("tooltip");


  tooltip.innerHTML = text
  tooltip.setAttribute('style', evt)
  tooltip.style.position = "absolute";
  tooltip.style.display = "block"
  // tooltip.style.left = 600 + 'px';
  // tooltip.style.left = 90 + 'px';
  // tooltip.style.top = 350 + 'px';
  tooltip.style.left = evt.pageX + '90' + 'px';
  tooltip.style.top = evt.pageY + '150' + 'px';
//   tooltip.style("left", (d3.mouse(this)[0]+70) + "px")
//   .style("top", (d3.mouse(this)[1]) + "px");
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
  document.querySelector(".const-text").classList.remove("const-text-green");

}


const master = gitgraph.branch({name:"US Constitution", style: {color: '#19184a'}});
master.commit(
  {subject: "Declaration of Independance", style: {dot:{color: '#19184a'}},
 onMouseOver(commit){
    showTooltip(`left: 600px; top:10px;`, `<img src="img/NMAH-ET2016-04901.jpg" width='500px' height='800px'>`)
    // console.log(`test ${commit.subject}`)

    // renderTooltip(commit)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
});
master.commit(
  {subject: 'Preamble to Constitution and the Articles',style: {dot:{color: '#19184a'}},
  onMouseOver(commit){
    showTooltip(`left: 600px; top: 10px;`, `<img src="img/constitution-page1.jpg" width='300px' height='400px'>`)
    console.log(`test ${commit.subject}`)
    document.querySelector(".const-text-pre").classList.toggle("const-text-green");

  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}

});
// master.tag("1787");
const newFeature_PBOR = gitgraph.branch({name:"Proposed Bill of Rights", style: {color: '#cebd50'}});
newFeature_PBOR.commit({subject: "Proposed 1st Amendment", style: {dot: {color: '#cebd50'}},
onMouseOver(commit){
  showTooltip(`left: 400px; top: 100px;`, `<img src="img/proposed_1.png" width='1000px' height='100px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
});
const newFeature_P27 = gitgraph.branch({name: "Proposed 2nd Amendment", style: {color: '#cebd50'}});
newFeature_P27.commit({subject: "Proposed 2nd Amendment", style: {dot: {color: '#cebd50'}},
onMouseOver(commit){
  showTooltip('left: 400px; top: 200px;', `<img src="img/proposed_2.png" width='1000px' height='50px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
});


const newFeature_BOR = gitgraph.branch({name:"Bill of Rights", style: {color: '#9cc28b'}});

// newFeature_BOR.commit({subject: "Proposed 2nd Amendment", style: {dot: {color: '#9cc28b'}},
// onMouseOver(commit){
//   showTooltip('left: 50px; top:600px', `<img src="img/a1.png" width='1000px' height='60px'>`)
//   console.log(`test ${commit.subject}`)
// },
// onMouseOut(commit){
//   hideTooltip()
// },
// renderTooltip(commit){}
// });


newFeature_BOR.commit({subject: "1st Amendment", style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip('left: 400px; top: 150px;', `<img src="img/a1.png" width='1000px' height='60px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
});

newFeature_BOR.commit({subject: "2nd Amendment", style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip('left: 400px; top: 180px', `<img src="img/a2.png" width='1000px' height='20px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){},

})
  .commit({subject: "3rd Amendment", style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip('left: 400px; top: 180px', `<img src="img/a3.png" width='1000px' height='40px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "4th Amendment", style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip('left: 400px; top: 220px', `<img src="img/a4.png" width='1000px' height='50px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "5th Amendment", style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip('left: 400px; top: 250px;', `<img src="img/a5.png" width='1000px' height='80px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "6th Amendment", style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip('left: 400px; top: 280px;', `<img src="img/a6.png" width='1000px' height='90px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "7th Amendment", style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip('left: 400px; top: 290px;', `<img src="img/a7.png" width='1000px' height='40px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "8th Amendment", style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip("left: 400px; top: 250px", `<img src="img/a8.png" width='1000px' height='30px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "9th Amendment",  style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip('left: 400px; top: 250px', `<img src="img/a9.png" width='1000px' height='29px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "10th Amendment", style: {dot: {color: '#9cc28b'}},
  onMouseOver(commit){
    showTooltip('left: 400px; top: 280px', `<img src="img/a10.png" width='1000px' height='50px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
// Merge `newFeature` into `master`
master.merge({branch: newFeature_BOR, commitOptions: {subject:"Amendment passed on September 25, 1789", style: {dot: {color: '#19184a'}}}});
const newFeature_11 = gitgraph.branch({name:"11th Amendment", style: {color: '#9cc28b'}});
newFeature_11.commit({subject: "11th Amendment", style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 600px; top: 290px;`, `<img src="img/a11.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_11, commitOptions: {subject:"Amendment passed on February 7, 1795", style: {dot: {color: '#19184a'}}}})
const newFeature_12 = gitgraph.branch({name:"12th Amendment",  style: {color: '#9cc28b'}});
newFeature_12.commit({subject: "12th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 600px; top: 290px;`, `<img src="img/a12.jpg" width='400px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_12, commitOptions: {subject:"Amendment passed on June 15, 1804", style: {dot: {color: '#19184a'}}}})
const newFeature_13 = gitgraph.branch({name:"13th Amendment",  style: {color: '#9cc28b'}});
newFeature_13.commit({subject: "13th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 680px; top: 300px;`, `<img src="img/a13.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
const newFeature_P13 = gitgraph.branch({name:"Proposed 13th Amendment", style: {color: '#cebd50'}});
newFeature_P13.commit({subject: "Proposed 13th Amendment",style: {dot: {color: '#cebd50'}},
onMouseOver(commit){
  showTooltip(`left: 600px; top: 290px;`, '<h3><i>Proposed:</i> Titles of Nobility Amendment</h3><p>If any citizen of the United States shall accept, claim, receive or retain, any title of nobility or honour, or shall, without the consent of Congress, accept and retain any present, pension, office or emolument of any kind whatever, from any emperor, king, prince or foreign power, such person shall cease to be a citizen of the United States, and shall be incapable of holding any office of trust or profit under them, or either of them.</p>')
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_13, commitOptions: {subject:"Amendment passed on December 6, 1865", style: {dot: {color: '#19184a'}}}})
const newFeature_14 = gitgraph.branch({name:"14th Amendment",  style: {color: '#9cc28b'}});
newFeature_14.commit({subject: "14th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 700px; top: 300px;`, `<img src="img/a14.jpg" width='500px' height='750px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
const newFeature_P14 = gitgraph.branch({name:"Proposed 14th Amendment", style: {color: '#cebd50'}});
newFeature_P14.commit({subject: "Proposed 14th Amendment",style: {dot: {color: '#cebd50'}},
onMouseOver(commit){
  showTooltip(`left: 600px; top: 350px;`, '<h3><i>Proposed: </i> Corwin Amendment</h3><p>No amendment shall be made to the Constitution which will authorize or give to Congress the power to abolish or interfere, within any State, with the domestic institutions thereof, including that of persons held to labor or service by the laws of said State</p>')
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
})
master.merge({branch: newFeature_14, commitOptions: {subject:"Amendment passed on July 9, 1868", style: {dot: {color: '#19184a'}}}})
const newFeature_15 = gitgraph.branch({name:"15th Amendment",  style: {color: '#9cc28b'}});
newFeature_15.commit({subject: "15th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 700px; top: 300px;`, `<img src="img/a15.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_15, commitOptions: {subject:"Amendment passed on February 3, 1870", style: {dot: {color: '#19184a'}}}})
const newFeature_16 = gitgraph.branch({name:"16th Amendment",  style: {color: '#9cc28b'}});
newFeature_16.commit({subject: "16th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 700px; top: 300px;`, `<img src="img/a16.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_16, commitOptions: {subject:"Amendment passed on February 3, 1913", style: {dot: {color: '#19184a'}}}})
const newFeature_17 = gitgraph.branch({name:"17th Amendment",  style: {color: '#9cc28b'}});
newFeature_17.commit({subject: "17th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 730px; top: 350px;`, `<img src="img/a17.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_17, commitOptions: {subject: "Amendment passed on April 8, 1913", style: {dot: {color: '#19184a'}}}})
const newFeature_18 = gitgraph.branch({name:"18th Amendment", style: {color: '#9e4343'}});
newFeature_18.commit({subject: "18th Amendment",style: {dot: {color: '#9e4343'}},
onMouseOver(commit){
  showTooltip(`left: 730px; top: 350px;`, `<img src="img/a18.jpg" width='500px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_18, commitOptions: {subject: "Amendment passed January 16, 1919", style: {dot: {color: '#19184a'}}}})
const newFeature_19 = gitgraph.branch({name:"19th Amendment",  style: {color: '#9cc28b'}});
newFeature_19.commit({subject: "19th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 750px; top: 350px;`, `<img src="img/a19.jpg" width='500px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
const newFeature_P20 = gitgraph.branch({name:"Proposed 20th Amendment", style: {color: '#cebd50'}});
newFeature_P20.commit({subject: "Proposed 20th Amendment",style: {dot: {color: '#cebd50'}},
onMouseOver(commit){
  showTooltip(`left: 750px; top: 550px;`, `<h3><i>Proposed: </i> Child Labour Amendment</h3><p>Section 1. The Congress shall have power to limit, regulate, and prohibit the labor of persons under eighteen years of age.</p>
  
  <p>Section 2. The power of the several States is unimpaired by this article except that the operation of State laws shall be suspended to the extent necessary to give effect to legislation enacted by the Congress</p>
  <p><img src="img/cla.jpg" width='300px' height='500px'></p>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
})

master.merge({branch: newFeature_19, commitOptions:{subject: "Amendment passed on August 18, 1920", style: {dot: {color: '#19184a'}}}})

const newFeature_20 = gitgraph.branch({name:"20th Amendment",  style: {color: '#9cc28b'}});
newFeature_20.commit({subject: "20th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 780px; top: 500px;`, `<img src="img/a20.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_20, commitOptions:{subject: "Amendment passed on January 23, 1933", style: {dot: {color: '#19184a'}}}})
const newFeature_21 = gitgraph.branch({name:"21st Amendment",  style: {color: '#9cc28b'}});
newFeature_21.commit({subject: "21st Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 790px; top: 550px;`, `<img src="img/a21.jpg" width='500px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_21, commitOptions: {subject: "Amendment passed on December 5, 1933", style: {dot: {color: '#19184a'}}}})
const newFeature_22 = gitgraph.branch({name:"22nd Amendment",  style: {color: '#9cc28b'}});
newFeature_22.commit({subject: "22nd Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 820px; top: 590px;`, `<img src="img/a22.jpg" width='450px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_22, commitOptions: {subject: "Amendment passed on February 27, 1951", style: {dot: {color: '#19184a'}}}})
const newFeature_23 = gitgraph.branch({name:"23th Amendment",  style: {color: '#9cc28b'}});
newFeature_23.commit({subject: "23rd Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 820px; top: 600px;`, `<img src="img/a23.jpg" width='430px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_23, commitOptions: {subject: "Amendment passed on March 29, 1961", style: {dot: {color: '#19184a'}}}})
const newFeature_24 = gitgraph.branch({name:"24th Amendment",  style: {color: '#9cc28b'}});
newFeature_24.commit({subject: "24th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 850px; top: 620px;`, `<img src="img/a24.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_24, commitOptions: {subject: "Amendment passed on January 23, 1964", style: {dot: {color: '#19184a'}}}})
const newFeature_25 = gitgraph.branch({name:"25th Amendment",  style: {color: '#9cc28b'}});
newFeature_25.commit({subject: "25th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 870px; top: 690px;`, `<img src="img/a25.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_25, commitOptions: {subject: "Amendment passed on February 10, 1967", style: {dot: {color: '#19184a'}}}})
const newFeature_26 = gitgraph.branch({name:"26th Amendment", style: {color: '#9cc28b'}});
newFeature_26.commit({subject: "26th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 880px; top: 700px;`, `<img src="img/a26_.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})

const newFeature_P26 = gitgraph.branch({name:"Proposed 26th Amendment", style: {color: '#cebd50'}});
newFeature_P26.commit({subject: "Proposed 26th Amendment",style: {dot: {color: '#cebd50'}},
onMouseOver(commit){
  showTooltip(`left: 880px; top: 750px;`, `<h3><i>Proposed: </i> Equal Rights Amendment</h3>

  <p>"Section 1. Equality of rights under the law shall not be denied or abridged by the United States or by any State on account of sex.</p>

  <p>Sec. 2. The Congress shall have the power to enforce, by appropriate legislation, the provisions of this article.</p>

 <p>Sec. 3. This amendment shall take effect two years after the date of ratification."</p>
  <p><img src="img/era.jpg" width='400px' height='600px'></p>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
})

const newFeature_P28 = gitgraph.branch({name:"Proposed 26th Amendment", style: {color: '#cebd50'}});
newFeature_P28.commit({subject: "Proposed 26th Amendment",style: {dot: {color: '#cebd50'}},
onMouseOver(commit){
  showTooltip(`left: 820px; top: 750px;`, `<h3><i>Proposed: </i> District of Columbia Voting Rights Amendment</h3>

  <p>Section 1. For purposes of representation in the Congress, election of the President and Vice President, and article V of this Constitution, the District constituting the seat of government of the United States shall be treated as though it were a State.</p>

  <p>  Section 2. The exercise of the rights and powers conferred under this article shall be by the people of the District constituting the seat of government, and as shall be provided by the Congress.</p>

 <p>Section 3. The twenty-third article of amendment to the Constitution of the United States is hereby repealed.</p>
  <p>Section 4. This article shall be inoperative, unless it shall have been ratified as an amendment to the Constitution by the legislatures of three-fourths of the several States within seven years from the date of its submission.</p>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
})
master.merge({branch: newFeature_26, commitOptions: {subject:"Amendment passed on July 1, 1971", style: {dot: {color: '#19184a'}}}})
const newFeature_27 = gitgraph.branch({name:"27th Amendment",  style: {color: '#9cc28b'}});
newFeature_27.merge({branch: newFeature_P27, commitOptions: {displayhash: false,subject:"Amendment passed on May 5, 1992", style: {dot: {color: '#cebd50'}}}})
newFeature_27.commit({subject: "27th Amendment",style: {dot: {color: '#9cc28b'}},
onMouseOver(commit){
  showTooltip(`left: 880px; top: 790px;`, `<img src="img/27_.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge({branch: newFeature_27, commitOptions: {subject:"Amendment passed on May 5, 1992", style: {dot: {color: '#19184a'}}}})
