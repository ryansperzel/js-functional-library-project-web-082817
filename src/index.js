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

    reduce: function(list, iteratee, memo = 0) {
      debugger;
      if (Array.isArray(list)) {
        for (const item of list) {
          memo = iteratee(memo, item);
        }
      } else {
        for (const key in list) {
          memo = iteratee(memo, list[key]);
        }
      }
      return memo;
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

    first: function(array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        return array.slice(array.length - n);
      }
    },

    compact: function(array) {
      const arr = [];
      for (const el of array) {
        if (!!el) {
          arr.push(el);
        }
      }
      return arr;
    },

    helper: function(array) {
      for (const el of array) {
        if (typeof el === "object") {
          fi.helper(el);
        } else {
          return el;
        }
      }
    },

    flatten: function(array) {
      for (const el of array) {
        if (typeof el === "object") {
          fi.flatten(el);
        } else {
          const arr = [...el];
        }
      }
      return arr;
      // const arr = [];
      // debugger;
      // for (const el of array) {
      //   if (typeof el === "object") {
      //     arr.push(fi.helper(el));
      //   } else {
      //     arr.push(el);
      //   }
      // }
      // return arr;
    },

    uniq: function(array) {
      const arr = [];
      for (const el of array) {
        if (!arr.includes(el)) {
          arr.push(el);
        }
      }
      return arr;
    },

    keys: function(object) {
      const arr = [];
      for (const key in object) {
        arr.push(key);
      }
      return arr;
    },

    values: function(object) {
      const arr = [];
      for (const key in object) {
        arr.push(object[key]);
      }
      return arr;
    },

    functions: function(object) {
      const arr = [];
      for (const key in object) {
        if (typeof object[key] === "function") {
          arr.push(key);
        }
      }
      return arr;
    }
  };
})();
