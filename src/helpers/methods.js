
/**
 * Create unique id for new category
 *
 * @returns {String} return unique id for new category
 */
export function createUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 11);
}

/**
 * Depending on categoryData add subcategory or add task  inside the appropriate category
 *
 * @param {Object} categoryData - new category with init data or new task
 * @param {string} id - unique identifier category ID in which we want to add a new category
 * @param {Object} arr - array with all categories, except new ones which we are adding
 *
 * @returns {Object} return modified array with updated list of category
 */
export function addDataToCategory(categoryData, id, arr) {
    if (id.rootLevel) {
        addDataToCategory(categoryData, {rootLevel: false}, arr);
        let modifiedCategoryData = getCorrectKey(arr, categoryData);
        arr.push(modifiedCategoryData);
        return  arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].categoryList.length > 0) {
            addDataToCategory(categoryData, id, arr[i].categoryList);
        }
        if (arr[i].uniqueId === id) {
            switch (categoryData.type) {
                case ('activateCategory'):
                    arr[i].activeCategory = !arr[i].activeCategory;
                    break;
                case ('addTask'):
                    arr[i].categoryTasksList.push(categoryData.data);
                    break;
                case ('addCategory'):
                    let modifiedCategoryData = getCorrectKey(arr[i], categoryData);
                    arr[i].activeCategory = false;
                    arr[i].categoryList.push(modifiedCategoryData);
                    break;
                case ('removeCategory'):
                    arr.splice(i, 1);
                    break;
                default:
                    break;
            }
        }
        else {
            arr[i].activeCategory = false;
        }
    }
    return arr;
}

/**
 * Function which return extended categoryData with added correct item number to category
 *
 * @param {Object} parentItem - root category with current ones
 * @param {Object} data - new category with init data
 *
 * @returns {Object} return modified extended categoryData object
 */
export function getCorrectKey(parentItem, data) {
    let copiedData = Object.assign({}, data);

    if (parentItem.uniqKey) {
        let lastIdFromSiblingCategory = parentItem.categoryList[parentItem.categoryList.length-1] ? parentItem.categoryList[parentItem.categoryList.length-1].uniqKey : '';
        if (typeof lastIdFromSiblingCategory === 'string' && lastIdFromSiblingCategory !== '') {
            let resultValue = lastIdFromSiblingCategory.split(','),
                valueAfterComma = parseInt(resultValue[resultValue.length-1], 10) + 1,
                resultRow = '';

            resultValue.pop();
            resultValue.push(valueAfterComma);
            resultRow = resultValue.join(',');

            copiedData.uniqKey = resultRow;
        }
        else {
            copiedData.uniqKey = parentItem.uniqKey + lastIdFromSiblingCategory + ',' + 1;
        }
    }
    else {
        copiedData.uniqKey = parentItem[parentItem.length-1] ? parentItem[parentItem.length-1].uniqKey + 1 : 1;
    }
    return copiedData;
}

/**
 * function which add new category
 *
 * @param {String} payload - category id
 * @param {Array} storeCategory - categories list from Store
 */
export function addCategory(payload, storeCategory) {
    let categoryName = prompt('Please add category', "React");
    if (categoryName != null) {
        let categoryData = {
                type: 'addCategory',
                id: 0,
                name: categoryName,
                categoryTasksList: [],
                uniqueId: categoryName+createUniqueId(),
                categoryList: [],
                activeCategory: true
        };
        return addDataToCategory(categoryData, payload, storeCategory);
    }
}

/**
 * function which return flag depending on active category
 *
 * @param {Array} categoryData - categories list from Store
 * @param {Boolean} fullObj - depending on this flag - return correct data
 * @returns {Object} return object with data from category or just empty
 */

export function checkActiveCategory(categoryData, fullObj = false) {
    let resultObj = {};
    function privateActiveFunc(categoryData, fullObj) {
        for (let i = 0; i < categoryData.length; i++) {
            if (categoryData[i].categoryList.length > 0) {
                privateActiveFunc(categoryData[i].categoryList, fullObj);
            }
            if (categoryData[i].activeCategory) {
                resultObj = fullObj ? categoryData[i] : categoryData[i].uniqueId;
                return;
            }
        }
        return resultObj;
    }
    privateActiveFunc(categoryData, fullObj);
    return resultObj
}

/**
 * function which check task duration. If task duration expired (need to match with current day - return corresponding answer)
 *
 * @param {String} endDate - task end day
 * @returns {Boolean} return boolean - expired data or not
 */

export function checkTaskDuration(endDate) {
    var d1 = new Date();
    var d2 = new Date(endDate);
    return d1 < d2;
}
