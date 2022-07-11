var canFinish = function(numCourses, prerequisites) {
    // Create hashmap for all courses and its associated prereqs
    let hashMap = {};
    
    // Populate hashMap with each course as a key with an empty array as its value
    for (let i=0; i<numCourses; i++) {
        hashMap[i] = []
    }

    for (let i=0; i<prerequisites.length; i++) {
        let preReq = prerequisites[i];
        if (preReq[0]===preReq[1]) return false;
        hashMap[preReq[0]].push(preReq[1])
    }
    
    let set = new Set();
    
    let depthFS = (num) => {
        
        // Base Cases
        if (set.has(num)) return false;
        if (hashMap[num].length === 0) return true;
        //console.log(num, set)
        
        set.add(num);
        let preReqs = hashMap[num]
        for (let preReqIndex=0; preReqIndex<preReqs.length; preReqIndex++) {
            if (!depthFS(preReqs[preReqIndex])) return false
        }
        set.delete(num);
        hashMap[num] = []
        return true;
    }
    
    // Run DFS for each prereq for each course
    for (let i=0; i<numCourses; i++) {
        if (!depthFS(i)) {
            return false
        }
    }
    
    return true
};

let bigPre = [[2,0],[1,0],[3,1],[3,2],[1,3]]
console.log(canFinish(4, bigPre))