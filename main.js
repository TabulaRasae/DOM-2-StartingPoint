// Please feel free to change the JS as you see fit! This is just a starting point.
/* 
 add rows to the grid  ***done
 add columns to the grid  *** done
 remove rows from the grid  ***done
 remove columns from the grid  ***
 select a color from a dropdown menu of colors
 click on a single cell, changing its color to the currently selected color
 fill all uncolored cells with the currently selected color
 fill all cells with the currently selected color
 clear all cells/restore all cells to their original/initial color
 click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells 
 from start to end change to the currently selected color */



const root = document.getElementById("root");
const divButtons = document.getElementById("buttons"); // this is button container
const createRemoveButton = document.createElement("button"); // this create button


root.addEventListener("click", (event) => {
  console.log("this TagName", event.target.tagName);
  console.log("this is Target",event.target);

  const createTr = document.createElement("tr"); // this create a tr

  const addRowButton = document.getElementById("add-row"); // this is add button
 
  const tbody = document.getElementsByTagName("TBODY")[0]; // this is table element

  
  if(event.target.id === "add-row") {
    const colCount = tbody.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      const createTd = document.createElement("td");// this crreats a td
      createTr.appendChild(createTd);
      console.log("this is",i)
    }
    tbody.appendChild(createTr);
  } 
  //----------
  if (event.target.id === "add-column") {
    const rowCount = tbody.rows.length;

    for (let i = 0; i < rowCount; i++) {
      const createTd = document.createElement("td");
      tbody.rows[i].appendChild(createTd);
    }
  }

  if(event.target.id === "remove-row-button") {
    const rowCount = tbody.rows.length;
    const lastRow = rowCount - 1;

    tbody.deleteRow(lastRow);
    // for (let i = 0; i < colCount; i++) {
    //   const createTd = document.createElement("td");
    //   createTr.appendChild(createTd);
    //   console.log("this is",i)
    // }
  }

  if( event.target.id === "remove-colunm-button") {
    const rowCount = tbody.rows.length;
    for(let i = 0; i < rowCount; i++) {
      const row = tbody.rows[i];
      row.deleteCell(-1);
    }
  }
  
});

const removeRowButton = document.createElement("button");
removeRowButton.id = "remove-row-button"
removeRowButton.textContent = "Remove Row";
divButtons.appendChild(removeRowButton);

const removeColunmButton = document.createElement("button");
removeColunmButton.id = "remove-colunm-button"
removeColunmButton.textContent = "Remove Colunm";
divButtons.appendChild(removeColunmButton);


