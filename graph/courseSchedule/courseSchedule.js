/*
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


var moveCourse = function(course, source, target){
    source.delete(course);
    target.add(course);
};

var canFinish = function(numCourses, prerequisites) {
    // if a cycle => false
    const initialMap = new Map();
    const toVisit = new Set();
    const currentSet = new Set();
    const visited = new Set();

    var dfs = function(course){
        moveCourse(course, toVisit, currentSet);
        const prereqs = initialMap.get(course);
        if(!prereqs){
            moveCourse(course, currentSet, visited);
            return true;
        }
        for(let c of prereqs){
            if(visited.has(c)){
                continue;
            }
            if(currentSet.has(c)){
                return false;
            }
            if(!dfs(c)){
                return false;
            }
        }
        moveCourse(course, currentSet, visited);
        return true;
    };

    for(let i=0; i<numCourses; i++){
        toVisit.add(i);
    }

    // build a map of prerequisites
    prerequisites.forEach( prerequisite => {
        let coursePrerequesites = new Set();
        if(initialMap.has(prerequisite[0])){
            coursePrerequesites = initialMap.get(prerequisite[0]);
        }
        coursePrerequesites.add(prerequisite[1]);
        initialMap.set(prerequisite[0], coursePrerequesites);
    });

    // main logic
    for(let course of toVisit){
        if(!dfs(course)){
            return false;
        }
    }

    return true;
};
