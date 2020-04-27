const config = {
    apiKey: 'AIzaSyAXMUGZCy4oZRUgZErJZkMq-LD1696Lxww',
    authDomain: 'insight-2e278.firebaseapp.com',
    databaseURL: 'https://insight-2e278.firebaseio.com',
    projectId: 'insight-2e278',
    storageBucket: 'insight-2e278.appspot.com',
    messagingSenderId: '410338690054',
    appId: '1:410338690054:web:8224fcf9a8d77b03662f87',
    measurementId: 'G-PXW8QHV7YZ'
};

export default config;

export const snapshotToArray = snapshoy => {
    const returnArray = [];
    snapshoy.forEach(element => {
        const item = element.val();
        item.key = element.key;
        returnArray.push(item);
    });
    return returnArray;
};
