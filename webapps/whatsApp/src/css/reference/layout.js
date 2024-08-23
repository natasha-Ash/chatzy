let list = []
for(let i=1;i<=12;i++){
     let  value = (i/12 *100) + "%";
  
  list.push(`
      .layout-row > .flex-${i} {
        flex: 1 1 100%;
        max-width: ${value};
        max-height: 100%;
      }
  
      .layout-column > .flex-${i} {
        flex: 1 1 100%;
        max-width: 100%;
        max-height: ${value};
      }
      `)
  
    }
    console.log(list.join("\n"))