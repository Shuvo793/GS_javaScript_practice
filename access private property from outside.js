const Mobile = function (model_no) {
    this.model = model_no;
    this.color = 'white';
    const price = 3000;//private property jeta baire theke access kora jabe na
    this.sp = price;
    this.sellingPrice = function () { //jehetu sellingPrice ta public ar er kaj holo price ke  show kora tai aita akhon baire theke access hobe
        return (price);
    }
};
const samsung = new Mobile('j2');
console.log(samsung.sellingPrice());
