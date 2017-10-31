function DFS(graph, curr, path=new Set()) {
  path.add(curr);

  for (neighbor of graph[curr]) {
    // if neighbor has not been visited, visit that neighbor
    if (!path.has(neighbor)) {
      path = DFS(graph, neighbor, path);
    }
  }
  return path;
}

adjMatrix = {
  1: [2,3],
  2: [4,5],
  3: [5],
  4: [6],
  5: [6],
  6: [7],
  7: []
}

console.log(DFS(adjMatrix, 1));
