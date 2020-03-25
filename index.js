function updateObjectWithKeyAndValue(object, key, value)
{
  var newObj = {};
  var newPair = {key:value};
  Object.assign(newObj, object, newPair);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  Object.assign(object, key:value);
  return object;
}

function deleteFromObjectByKey(object, key)
{
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
}
