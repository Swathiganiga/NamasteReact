   import React from 'react'
   import ReactDOM from 'react-dom/client'
   
   const element =React.createElement('div',{id:'main'},
       [ React.createElement('div',{id:'parent1'},
        React.createElement('div',{id:'child1'},
        [React.createElement('h1',null,'Im h1 tag'),
        React.createElement('h1',null,'Im h2 tag')])
    ), React.createElement('div',{id:'parent2'},
        React.createElement('div',{id:'child2'},
        [React.createElement('h1',null,'Im h3 tag'),
        React.createElement('h1',null,'Im h4 tag')])
    )]
    )

    
    const root = ReactDOM.createRoot(
  document.getElementById('root')
);

 root.render(element);