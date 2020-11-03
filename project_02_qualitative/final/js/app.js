// import { createGitgraph } from "../node_modules/@gitgraph/js/lib/gitgraph.js";

var options = {
  // strings: ['>❚','>^1000 git log --graph^1300 us_constitution'],
  strings: [`<h1 class= "title">></h1>`,`<h1 class= "title">>git log --graph^1300 us_constitution</h1>`],
  typeSpeed: 40,
  startDelay: 10,
  showCursor: false,
  cursorChar: '❚',
  contentType: 'html'
  // autoInsertCss:true
};

var typed = new Typed('.title', options);


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

// const tooltip = d3.select('#tooltip')
function showTooltip(evt, text) {
  let tooltip = document.getElementById("tooltip");


  tooltip.innerHTML = text
  tooltip.setAttribute('style', evt)
  tooltip.style.position = "absolute";
  tooltip.style.display = "block"
  // tooltip.style.left = 90 + 'px';
  // tooltip.style.top = 500 + 'px';
  // tooltip.style.left = evt.pageX + '50' + 'px';
  // tooltip.style.top = evt.pageY + '50' + 'px';
  // tooltip.style("left", (d3.mouse(this)[0]+70) + "px")
  // .style("top", (d3.mouse(this)[1]) + "px");
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

const master = gitgraph.branch({name:"US Constitution", style: {color: 'cornflowerblue'}});
master.commit(
  {subject: "Declaration of Independance", style: {dot:{color: 'royalblue'}},
 onMouseOver(commit){
    showTooltip(`left: 50px; top:300px;`, `<img src="img/NMAH-ET2016-04901.jpg" width='500px' height='800px'>`)
    console.log(`test ${commit.subject}`)
    // renderTooltip(commit)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
});
master.commit(
  {subject: 'Preamble to Constitution and the Articles',style: {dot:{color: 'royalblue'}},
  onMouseOver(commit){
    showTooltip(`left: 50px; top:300px;`, `<img src="img/constitution-page1.jpg" width='300px' height='400px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}

});
// master.tag("1787");
const newFeature_PBOR = gitgraph.branch({name:"Proposed Bill of Rights", style: {color: 'pink'}});
newFeature_PBOR.commit({subject: "Proposed 1st Amendment", style: {dot: {color: 'pink'}},
onMouseOver(commit){
  showTooltip(`left: 50px; top:600px;`, `<img src="img/proposed_1.png" width='1000px' height='100px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
});
const newFeature_P27 = gitgraph.branch("Proposed 2nd Amendment");
newFeature_P27.commit({subject: "Proposed 2nd Amendment",
onMouseOver(commit){
  showTooltip('left: 50px; top:600px', `<img src="img/proposed_2.png" width='1000px' height='60px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
});


const newFeature_BOR = gitgraph.branch({name:"Bill of Rights", style: {color: 'mediumseagreen'}});

// newFeature_BOR.commit({subject: "Proposed 2nd Amendment", style: {dot: {color: 'mediumseagreen'}},
// onMouseOver(commit){
//   showTooltip('left: 50px; top:600px', `<img src="img/a1.png" width='1000px' height='60px'>`)
//   console.log(`test ${commit.subject}`)
// },
// onMouseOut(commit){
//   hideTooltip()
// },
// renderTooltip(commit){}
// });


newFeature_BOR.commit({subject: "1st Amendment", style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip('left: 90px; top:660px', `<img src="img/a1.png" width='1000px' height='60px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
});

newFeature_BOR.commit({subject: "2nd Amendment", style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip('left: 50px; top:680px', `<img src="img/a2.png" width='1000px' height='40px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){},

})
  .commit({subject: "3rd Amendment",style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip('left: 50px; top:700px', `<img src="img/a3.png" width='1000px' height='60px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "4th Amendment",style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip('left: 50px; top:800px;', `<img src="img/a4.png" width='1000px' height='40px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "5th Amendment",style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip('left: 50px; top:900px;', `<img src="img/a5.png" width='1000px' height='90px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "6th Amendment",style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip('left: 90px; top:1130px;', `<img src="img/a6.png" width='1000px' height='90px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "7th Amendment",style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip('left: 50px; top:1160px;', `<img src="img/a7.png" width='1000px' height='60px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "8th Amendment",style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip("left: 50px; top:1180px", `<img src="img/a8.png" width='1000px' height='30px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "9th Amendment", style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip('left: 50px; top:1270px', `<img src="img/a9.png" width='1000px' height='30px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
  .commit({subject: "10th Amendment",style: {dot: {color: 'mediumseagreen'}},
  onMouseOver(commit){
    showTooltip('left: 50px; top:1300px', `<img src="img/a10.png" width='1000px' height='50px'>`)
    console.log(`test ${commit.subject}`)
  },
  onMouseOut(commit){
    hideTooltip()
  },
  renderTooltip(commit){}
  })
// Merge `newFeature` into `master`
master.merge(newFeature_BOR, "September 25, 1789");
const newFeature_11 = gitgraph.branch({name:"11th Amendment", style: {color: 'mediumseagreen'}});
newFeature_11.commit({subject: "11th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 250px; top:1400px;`, `<img src="img/a11.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_11, "Amendment passed on February 7, 1795 ")
const newFeature_12 = gitgraph.branch({name:"12th Amendment", style: {color: 'mediumseagreen'}});
newFeature_12.commit({subject: "12th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 350px; top: 1450px;`, `<img src="img/a12.jpg" width='400px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_12, "Amendment passed on June 15, 1804 ")
const newFeature_13 = gitgraph.branch({name:"13th Amendment", style: {color: 'mediumseagreen'}});
newFeature_13.commit({subject: "13th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 400px; top:1450px;`, `<img src="img/a13.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
const newFeature_P13 = gitgraph.branch({name:"Proposed 13th Amendment", style: {color: 'pink'}});
newFeature_P13.commit({subject: "Proposed 13th Amendment",style: {dot: {color: 'pink'}},
onMouseOver(commit){
  showTooltip(`left: 450px; top:2000px;`, '<h3><i>Proposed:</i> Titles of Nobility Amendment</h3><p>If any citizen of the United States shall accept, claim, receive or retain, any title of nobility or honour, or shall, without the consent of Congress, accept and retain any present, pension, office or emolument of any kind whatever, from any emperor, king, prince or foreign power, such person shall cease to be a citizen of the United States, and shall be incapable of holding any office of trust or profit under them, or either of them.</p>')
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_13, "Amendment passed on December 6, 1865 ")
const newFeature_14 = gitgraph.branch({name:"14th Amendment", style: {color: 'mediumseagreen'}});
newFeature_14.commit({subject: "14th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 440px; top:1500px;`, `<img src="img/a14.jpg" width='500px' height='750px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
const newFeature_P14 = gitgraph.branch({name:"Proposed 14th Amendment", style: {color: 'pink'}});
newFeature_P14.commit({subject: "Proposed 14th Amendment",style: {dot: {color: 'pink'}},
onMouseOver(commit){
  showTooltip(`left: 450px; top:2000px;`, '<h3><i>Proposed: </i> Corwin Amendment</h3><p>No amendment shall be made to the Constitution which will authorize or give to Congress the power to abolish or interfere, within any State, with the domestic institutions thereof, including that of persons held to labor or service by the laws of said State</p>')
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
})
master.merge(newFeature_14, "Amendment passed on July 9, 1868 ")
const newFeature_15 = gitgraph.branch({name:"15th Amendment", style: {color: 'mediumseagreen'}});
newFeature_15.commit({subject: "15th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 490px; top:1540px;`, `<img src="img/a15.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_15, "Amendment passed on February 3, 1870 ")
const newFeature_16 = gitgraph.branch({name:"16th Amendment", style: {color: 'mediumseagreen'}});
newFeature_16.commit({subject: "16th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 400px; top:1670px;`, `<img src="img/a16.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_16, "Amendment passed on February 3, 1913")
const newFeature_17 = gitgraph.branch({name:"17th Amendment", style: {color: 'mediumseagreen'}});
newFeature_17.commit({subject: "17th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 400px; top:1900px;`, `<img src="img/a17.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_17, "Amendment passed on April 8, 1913")
const newFeature_18 = gitgraph.branch({name:"18th Amendment", style: {color: 'crimson'}});
newFeature_18.commit({subject: "18th Amendment",style: {dot: {color: 'crimson'}},
onMouseOver(commit){
  showTooltip(`left: 610px; top:2090px;`, `<img src="img/a18.jpg" width='500px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_18, "Amendment passed January 16, 1919 ")
const newFeature_19 = gitgraph.branch({name:"19th Amendment", style: {color: 'mediumseagreen'}});
newFeature_19.commit({subject: "19th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 650px; top:2180px;`, `<img src="img/a19.jpg" width='500px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
const newFeature_P20 = gitgraph.branch({name:"Proposed 20th Amendment", style: {color: 'pink'}});
newFeature_P20.commit({subject: "Proposed 20th Amendment",style: {dot: {color: 'pink'}},
onMouseOver(commit){
  showTooltip(`left: 800px; top:2900px;`, `<h3><i>Proposed: </i> Child Labour Amendment</h3><p>Section 1. The Congress shall have power to limit, regulate, and prohibit the labor of persons under eighteen years of age.</p>
  
  <p>Section 2. The power of the several States is unimpaired by this article except that the operation of State laws shall be suspended to the extent necessary to give effect to legislation enacted by the Congress</p>
  <p><img src="img/cla.jpg" width='300px' height='500px'></p>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}
})

master.merge(newFeature_19, "Amendment passed on August 18, 1920 ")

const newFeature_20 = gitgraph.branch({name:"20th Amendment", style: {color: 'mediumseagreen'}});
newFeature_20.commit({subject: "20th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 700px; top:2400px;`, `<img src="img/a20.jpg" width='500px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_20, "Amendment passed on January 23, 1933")
const newFeature_21 = gitgraph.branch({name:"21st Amendment", style: {color: 'mediumseagreen'}});
newFeature_21.commit({subject: "21st Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 730px; top:2600px;`, `<img src="img/a21.jpg" width='500px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_21, "Amendment passed on  	December 5, 1933")
const newFeature_22 = gitgraph.branch({name:"22nd Amendment", style: {color: 'lime'}});
newFeature_22.commit({subject: "22nd Amendment",style: {dot: {color: 'lime'}},
onMouseOver(commit){
  showTooltip(`left: 790px; top:2790px;`, `<img src="img/a22.jpg" width='400px' height='700px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_22, "Amendment passed on February 27, 1951")
const newFeature_23 = gitgraph.branch({name:"23th Amendment", style: {color: 'mediumseagreen'}});
newFeature_23.commit({subject: "23rd Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 850px; top:2820px;`, `<img src="img/a23.jpg" width='430px' height='800px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_23, "Amendment passed on March 29, 1961")
const newFeature_24 = gitgraph.branch({name:"24th Amendment", style: {color: 'mediumseagreen'}});
newFeature_24.commit({subject: "24th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 950px; top:3200px;`, `<img src="img/a24.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_24, "Amendment passed on January 23, 1964")
const newFeature_25 = gitgraph.branch({name:"25th Amendment", style: {color: 'mediumseagreen'}});
newFeature_25.commit({subject: "25th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 970px; top:3700px;`, `<img src="img/a25.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_25, "Amendment passed on February 10, 1967")
const newFeature_26 = gitgraph.branch({name:"26th Amendment", style: {color: 'mediumseagreen'}});
newFeature_26.commit({subject: "26th Amendment",style: {dot: {color: 'mediumseagreen'}},
onMouseOver(commit){
  showTooltip(`left: 870px; top:3400px;`, `<img src="img/a26_.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})

const newFeature_P26 = gitgraph.branch({name:"Proposed 26th Amendment", style: {color: 'pink'}});
newFeature_P26.commit({subject: "Proposed 26th Amendment",style: {dot: {color: 'pink'}},
onMouseOver(commit){
  showTooltip(`left: 20px; top:3900px;`, `<h3><i>Proposed: </i> Equal Rights Amendment</h3>

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

const newFeature_P28 = gitgraph.branch({name:"Proposed 26th Amendment", style: {color: 'pink'}});
newFeature_P28.commit({subject: "Proposed 26th Amendment",style: {dot: {color: 'pink'}},
onMouseOver(commit){
  showTooltip(`left: 20px; top:3900px;`, `<h3><i>Proposed: </i> District of Columbia Voting Rights Amendment</h3>

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
master.merge(newFeature_26, "Amendment passed on July 1, 1971")
const newFeature_27 = gitgraph.branch({name:"27th Amendment", style: {color: 'mediumseagreen'}});
newFeature_27.merge(newFeature_P27, "Amendment passed in 1992")
newFeature_27.commit({subject: "27th Amendment",style: {dot: {color: 'gold'}},
onMouseOver(commit){
  showTooltip(`left: 550px; top:4200px;`, `<img src="img/27_.jpg" width='400px' height='600px'>`)
  console.log(`test ${commit.subject}`)
},
onMouseOut(commit){
  hideTooltip()
},
renderTooltip(commit){}

})
master.merge(newFeature_27, "Amendment passed on May 5, 1992")






