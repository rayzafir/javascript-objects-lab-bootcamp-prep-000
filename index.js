var recipes = {recipes:'object'}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({},obj,{[key]:value})
}