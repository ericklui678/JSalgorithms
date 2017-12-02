// BFS will return obj showing how far each node is from the root
// FYI they are not really nodes, just numbers
function BFS(graph, root) {
  let nodesLen = {};

  // default all distances to infinity
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  // set root node's distance to itself to 0
  nodesLen[root] = 0;

  // use queue to keep track of nodes to visit
  let queue = [root];
  // use curr to keep track of which node we are at
  let curr;

  // while loop to visit nodes as long as there are nodes in queue
  while (queue.length) {
    curr = queue.shift();

    // get nodes connected to curr by referencing graph/adjList
    let currConnected = graph[curr]

    // keep track of list nodes connected to current nodes
    let neighborIdx = [];

    // idx is the first node connected to our current node
    let idx = currConnected.indexOf(1);

    // while idx exists or while there are nodes connected to our root
    while (idx !== -1) {
      neighborIdx.push(idx);
      // set idx to next neighboring node of root
      console.log(`curr ${curr} idx ${idx}`);
      idx = currConnected.indexOf(1, idx + 1);
    }
    // console.log('neighborIdx', neighborIdx);
    for (let i = 0; i < neighborIdx.length; i++) {
      let nIdx = neighborIdx[i];
      // if neighboring index has not been set, let's set it
      if (nodesLen[nIdx] === Infinity) {
        nodesLen[nIdx] = nodesLen[curr] + 1;
        queue.push(nIdx);
      }
    }
  } // while loop queue ends
  return nodesLen;
}

const adjMatrix = [
  [0,1,1,1,0],
  [0,0,1,0,0],
  [1,1,0,0,0],
  [0,0,0,1,0],
  [0,1,0,0,0],
];

console.log(BFS(adjMatrix, 1));
