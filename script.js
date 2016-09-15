function Telefon(marka, kolor, cena) {
	this.marka = marka;
	this.kolor = kolor;
	this.cena = cena;
};

Telefon.prototype.printInfo = function () {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".")
};

var SamsungGalaxyS6 = new Telefon("Samsung", "czarny", 3500);
var iPhone6S = new Telefon("Apple", "złoty", 5000);
var OnePlusOne = new Telefon("1+", "biały", 4000);

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();