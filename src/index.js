const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(list, iteratee) {
      if (Array.isArray(list)) {
        const listCopy = list.slice();
        let i = -1;
        for (const item of listCopy) {
          i++;
          iteratee(item, i, listCopy);
        }
        return listCopy;
      } else {
        const listCopy = Object.assign({}, list);
        for (const key in listCopy) {
          iteratee(listCopy[key], key, listCopy);
        }
        return listCopy;
      }
    },

    map: function(list, iteratee) {
      const arr = [];
      if (Array.isArray(list)) {
        const listCopy = list.slice();
        let i = -1;
        for (const item of listCopy) {
          i++;
          arr.push(iteratee(item, i, listCopy));
        }
      } else {
        const listCopy = Object.assign({}, list);
        for (const key in listCopy) {
          arr.push(iteratee(listCopy[key], key, listCopy));
        }
      }
      return arr;
    },

    reduce: function(list, iteratee, [memo]) {
      if (Array.isArray(list)) {
        const listCopy = list.slice();
        let i = -1;
        let counter = 0;
        for (const item of listCopy) {
          i++;
        }
      } else {
      }
    },

    find: function(list, predicate) {
      if (Array.isArray(list)) {
        for (const item of list) {
          if (predicate(item)) {
            return item;
          }
        }
      } else {
        for (const key in list) {
          if (predicate(key)) {
            return key;
          }
        }
      }
    },
    filter: function(list, predicate) {
      const arr = [];
      for (const item of list) {
        if (predicate(item)) {
          arr.push(item);
        }
      }
      return arr;
    },

    sortBy: function(list, iteratee) {
      const listCopy = list.slice();
      let counter = list.length;
      let num0 = 0;
      let numi = 0;
      debugger;
      while (counter > 0) {
        let i = 1;
        while (i < list.length) {
          if (iteratee(listCopy[i - 1]) < iteratee(listCopy[i])) {
            i++;
          } else {
            num0 = listCopy[i - 1];
            numi = listCopy[i];
            listCopy[i - 1] = numi;
            listCopy[i] = num0;
            i++;
          }
        }
        counter--;
      }
      return listCopy;
    },

    size: function(list) {
      let counter = 0;
      for (const key in list) {
        counter++;
      }
      return counter;
    },

    first: function(array) {
      debugger;
    }
  };
})();
