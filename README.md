<!-- @format -->

# Bus Booking App

## Kurulum

Kurulum için extra bir şey yapmaya gerek yoktur.
[Apk Dosyası](https://expo.dev/accounts/azizkzgn/projects/bus-booking/builds/17430c95-e88e-4ae7-8073-048152fb6067)
Uygulamada kullanılan kütüphanler şunlardır:

```json
    "@aziz_kizgin/react-native-checkbox": "^1.0.1",
    "@aziz_kizgin/react-native-toast-message": "^1.0.4",
    "@react-native-async-storage/async-storage": "1.17.11",
    "@react-native-community/datetimepicker": "6.7.3",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "eas-cli": "^3.9.2",
    "expo": "~48.0.10",
    "expo-firebase-app": "^2.0.0",
    "expo-status-bar": "~1.4.4",
    "firebase": "^9.19.1",
    "formik": "^2.2.9",
    "native-base": "^3.4.28",
    "react": "18.2.0",
    "react-native": "0.71.6",
    "react-native-modal-datetime-picker": "^15.0.0",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0",
    "react-native-svg": "13.4.0",
    "yup": "^1.1.0"
```

Uygulamada kullanılan [Toast Message](https://www.npmjs.com/package/@aziz_kizgin/react-native-toast-message) ve [CheckBox](https://www.npmjs.com/package/@aziz_kizgin/react-native-checkbox) paketleri bana aittir.

## Üye Olma Ekranı

Uygulamayı kullanmak için üye olmak gerekmektedir. Login, register gibi işlemler firebase aracılığı ile yapılmaktadır.

![RegisterScreen](https://user-images.githubusercontent.com/65086568/232149751-45bd63f9-4274-4882-b350-22af4b6073bf.jpg)

## Giriş Ekranı

![LoginScreen](https://user-images.githubusercontent.com/65086568/232150196-247c9683-3b66-460e-be49-9126fa3b7a4b.jpg)

## Ana Ekran

Bu ekranda alınmak istenen bilet için gerekli bilgiler girilir.
bu ekranda kullanılabilecek bilgiler şu şekildedir:
Sadece gidiş için işlem yapılacaksa gidiş Istanbul, varış Ankara, gidiş tarihi 21/04/2023; gidiş Ankara, varış Istanbul, gidiş tarihi 21/04/2023

Gidiş geliş için işlem yapılacaksa gidiş Istanbul, varış Ankara, gidiş tarihi 23.04.2023, dönüş tarihi 24.04.2023; gidiş Ankara, varış Istanbul, gidiş tarihi 23.04.2023, dönüş tarihi 24.04.2023.

bu bilgilere utils/const dosyasında bulunan voyages datasından da ulaşılabilir

```json
{
    id: 1,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 300,
    company: "FastBus",
    hasReturn: false,
  },
  {
    id: 2,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 200,
    company: "BusTurk",
    hasReturn: false,
  },
  {
    id: 3,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 500,
    company: "FastBus",
    hasReturn: false,
  },
  {
    id: 4,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "21.04.2023",
    returnDate: "",
    price: 200,
    company: "BusTurk",
    hasReturn: false,
  },
  {
    id: 5,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 500,
    company: "FastBus",
    hasReturn: true,
  },
  {
    id: 6,
    origin: "Istanbul",
    destination: "Ankara",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 400,
    company: "BusTurk",
    hasReturn: true,
  },
  {
    id: 7,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 400,
    company: "FastBus",
    hasReturn: true,
  },
  {
    id: 8,
    origin: "Ankara",
    destination: "Istanbul",
    departureDate: "23.04.2023",
    returnDate: "24.04.2023",
    price: 450,
    company: "BusTurk",
    hasReturn: true,
  },
```

![HomeScreen](https://user-images.githubusercontent.com/65086568/232150411-2a54561a-8fd1-4b65-85b7-0fc3291ee94b.jpg)

## Seferler Ekranı

![VoyagesScreen](https://user-images.githubusercontent.com/65086568/232151571-852e9799-a809-4753-9924-a314b8026f76.jpg)

Bu sayfada girilen verilere göre uygun biletler sıralanır. Biletlere tıklanınca detay sayfasına gidilir.

## Sefer Detay Ekranı

![VoayageDetail](https://user-images.githubusercontent.com/65086568/232152505-8bb7cc47-a09b-44a2-83d5-05f5c177cce6.jpg)

Bu sayfada seçilen firmadan bilet almak için koltuk seçimi yapılır. Gri koltuklar müsait koltukları, pembe olanlar bir kadın tarafından seçilmiş koltukları, mavi olanlar bir erkek tarafından seçilen koltukları belirtir. Siyah koltuklar alınmaya müsait olmayan koltuklardır. Info ikonun tıklayarak bu bilgilere ulaşılabilir. Bilet alacak kişini cinsiyetine göre koltuklar müsait veya değil olarak otomatik belirlenir. Yeşil koltuklar seçilmiş olanlardır. En fazla 5 koltuk seçilebilir 6. koltuk seçilme istenildiğilde bir toast messajı ile hata mesajı gösterilir.

## Ödeme Ekranı

![PaymentScreen](https://user-images.githubusercontent.com/65086568/232153424-e8bae69b-9672-460f-84f3-f4e125de327f.jpg)

Kullanıcı bu ekranda gereken bilgiler girip buttona bastığında ödeme başarılı ekranına yönlendirilir.

## Ödeme Başarılı Ekranı

![PaymentSuccess](https://user-images.githubusercontent.com/65086568/232153801-d2d5a39d-f034-463a-b6aa-6a44d69b3b9c.jpg)
Ödeme ekranından sonra kullanıcının karşısına bu ekran çıkar. Ekranda 5ten geriye doğru bir sayaç bulunur. 5 saniye sonra kullanıcı otomatik olarak ana ekrana yönlendirilir.

## Ayarlar Ekranı

![SettingScreen](https://user-images.githubusercontent.com/65086568/232154127-92c1fe73-292e-4363-9d8a-27873df298b8.jpg)

Bu ekranda kullanıcı temel bilgilerini görebilir ve uygulamanın dilini değiştirebilir. Uygulama İngilizce ve Türkçeyi desteklemektedir.
