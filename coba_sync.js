const getUserSync = (id) => {
    // let nama = '';

    // if(id == 1){
    //     nama = 'Puspakirana';
    // } else{
    //     nama = 'Jane';
    // }

    const nama = id === 1 ? 'Puspakirana' : 'Jane';

    return {id, nama};
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = "Hello World";
console.log(halo);