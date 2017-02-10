import * as actions from './ajaxfire'

export function getCategory(subcategory) {
    return getLocalStorageData(subcategory).then((value) => {
        if (value === null || undefined) {
            return new Promise(function(resolve, reject) {
                actions.ajaxFire().then((val) => {
                    var category = val.data;
                    setLocalStorageData(subcategory, JSON.stringify(category));
                    resolve(val.data)
                }, (error) => {
                    reject(error)
                })
            });
        } else if (value !== null || undefined) {
            return new Promise(function(resolve, reject) {
                let sub_cat = null;
                console.log(JSON.parse(value));
                sub_cat = JSON.parse(value);
                resolve(sub_cat);
            });
        }
    });
}
