// Bài 1:Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

// function string(a) {
//     let totalstring = ''
//     for (let i = 1; i <= 10; i += 1) {
//         totalstring += a
//     }
//     return totalstring
// }
// console.log(string("quan"))

// Bài 2: Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
// function string1(a) {
//     let totalstring1 = ''
//     for (let i = 1; i <= 10; i += 1) {
//         totalstring1 += `${a} - `
//     }

//     return totalstring1
// }
// console.log((string1("quan")).slice(0, 67))

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'

// function string2(a, b) {
//          let totalstring2 = ''
//          for (let i = 1; i <= b; i += 1) {
//              totalstring2 += `${a} - `
//          }

//          return totalstring2
//      }
//      console.log((string2('quan', 5)).slice(0,32))

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
// function sumnumber() {
//     let tongso = 0
//     for (let number = 0; number <=100; number += 1) {
//         if (number % 5 == 0) {
//             tongso += number
//         }
//     }
//     return tongso
// }
// console.log(sumnumber())

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.(V = ⁴⁄₃πr³)

// function globular(r) {
//     let Vglo = `${3.14 * 4 / 3 * (r ** 3)}`
//     return Vglo
// }
// console.log(globular(5))


// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// function abc(a, b) {
//     let sum = 0

//     if (a > b) {
//         [a, b] = [b, a] 
//     }

//     for (let  i = a + 1; i < b; i++) {
//         sum += i;
//     }

//     return sum
// }
// console.log(abc(2,8))

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function soNguyenTo(num) {
    if (num <= 1) {
        return false
    } else if (num > 1) {
        for (let i = 2; i <= num; i += 1) {
            if (num % i === 0) {
                return false
            } else {
                return true
            }
        }
    }
}
console.log(soNguyenTo(7))

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

// function sumNumber (x) {
//     let sum = 0
//     if (x < 0) {
//         return console.log('Nhập số nguyên dương')
//     }

//     for (let i = 1; i <= x; i++) {
//             sum += i
//     }

//     return sum

// }

// console.log(sumNumber(5));

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
// function tongUocSo(num) {
//     let sum = 0
//     if (num <= 0) {
//         return console.log('Nhập số nguyên dương')

//     }
//     for (let  i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(tongUocSo(9))

