export function generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random()*16|0, v = c === 'x' ? r : ((r&0x3)|0x8);
        return v.toString(16);
    });
}

export function getItems() {
    const result = localStorage.getItem("toDoListData");
    if (result === null || result.length === 0) { return []; }
    else { return JSON.parse(result); }
}

export function setItems(data) {
    localStorage.setItem("toDoListData", JSON.stringify(data));
}

export function deleteItem(id) {
    let list = getItems();
    let i = findArrayId(id, list);
    list.splice(i, 1); // remove list[i] from list
    setItems(list);
    return list;
}

export function editItem(id, item) {
    let list = getItems();
    const i = findArrayId(id, list);
    item.id = id;

    if (item.title) { list[i].title = item.title; }
    if (item.description) { list[i].description = item.description; }
    if (item.deadline) { list[i].deadline = item.deadline; }
    if (item.priority) { list[i].priority = item.priority; }
    if (item.attachedImage) { list[i].attachedImage = item.attachedImage; }
    if (item.tag) { list[i].tag = item.tag; }

    setItems(list);

    return list;
}


export function findArrayId(id, list) {
    let i = 0;
    for (i; i < list.length; i++) {
        if (list[i].id === id) {
            break;
        }
    }
    return i;
}

export function sortListByTabs(data, activeTab) {
    if (activeTab === "1") return data;

    let newData = [];

    if (activeTab === "2") {
        for (let i = 0; i < data.length; i++) {
            if(data[i].isDone === false) {
                newData.push(data[i])
            }
        }
        return newData;
    }

    if (activeTab === "3") {
        for (let i = 0; i < data.length; i++) {
            if(data[i].isDone === true) {
                newData.push(data[i])
            }
        }
        return newData;
    }
}

export function sortByIsDone(data) {
    return data.sort((a, b) => {
        return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1;
    });
}

export function sortByIsDeadline(data) {
    return data.sort((a, b) => {
        return new Date(a.date).getTime() === new Date(b.date).getTime() ? 0 : new Date(a.date).getTime() ? 1 : -1;
    });
}

export function sortByPriority(data) {
    return data.sort((a, b) => {
        if (a.priority === "High") {
            return -1;
        } else if (a.priority === "Middle") {
            if (b.priority === "High") {
                return 1;
            } else if (b.priority === "Middle") {
                return 0;
            } else if (b.priority === "Low") {
                return -1;
            }
        } else if (a.priority === "Low") {
            return 1;
        }
    });
}

export function sortItems(list) {
    if (list.length != 0) {
        let donePrioritisedList = sortByPriority(list.filter(item => item.isDone === false));
        let todoPrioritisedList = sortByPriority(list.filter(item => item.isDone === true));
        let resultingList = todoPrioritisedList.concat(donePrioritisedList);

        setItems(resultingList);
        return resultingList;
    }
    return null;
}

export function filterByDate(selected) {
    let date_now = new Date();
    let filtered_list = getItems();

    if (selected === "today"){
        return filtered_list.filter( item => (new Date(item.date).getMonth() - date_now.getMonth() === 0) && (new Date(item.date).getDate() - date_now.getDate() === 0 ) );
    }
    else if (selected === "tomorrow") {
        return filtered_list.filter( item => (new Date(item.date).getDate() - date_now.getDate() === 1) && (new Date(item.date).getMonth() -  date_now.getMonth() === 0) );
    }
    else if (selected === "week") {

        return filtered_list.filter( item => (new Date(item.date).getDate() - date_now.getDate() >= 0) && ( new Date(item.date).getDate() - date_now.getDate() <=7 ) && new Date(item.date).getMonth() - date_now.getMonth() === 0);
    }
    else if(selected === "month") {
        return filtered_list.filter( item => (new Date(item.date).getMonth() - date_now.getMonth() === 0) && (new Date(item.date).getDate() -  (date_now).getDate() >=0) );
    }
    return getItems();
}

export function validateExtension(name) {
    const nameSplitted = name.split(".");
    const extension = nameSplitted[nameSplitted.length-1];
    const validExtensions = ["apng", "bmp", "gif", "ico", "cur", "jpg", "jpeg", "jfif",
        "pjpeg", "pjp", "png", "svg", "tif", "tiff", "webp"];
    return !!validExtensions.find(item => item === extension);

}

export function attachedImageValidation(files) {
    if (files) {
        if (files.length) {
            if ((files[0].size / 1024) > 200) { return false; }
            return validateExtension(files[0].name);

        }
    }
    return false;
}

export function toBase64Promise(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}




