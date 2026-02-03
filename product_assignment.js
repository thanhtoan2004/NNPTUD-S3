// Helper function to display results in HTML or Console
function logResult(title, content) {
    console.log(`\n--- ${title} ---`);
    console.log(content);

    // If running in browser, append to DOM
    if (typeof document !== 'undefined') {
        const container = document.getElementById('results-container');
        if (container) {
            const block = document.createElement('div');
            block.className = 'question-block';

            const titleDiv = document.createElement('div');
            titleDiv.className = 'question-title';
            titleDiv.textContent = title;

            const outputDiv = document.createElement('div');
            outputDiv.className = 'question-output';

            // Format object/array or simple string
            if (typeof content === 'object') {
                outputDiv.textContent = JSON.stringify(content, null, 2);
            } else {
                outputDiv.textContent = content.toString();
            }

            block.appendChild(titleDiv);
            block.appendChild(outputDiv);
            container.appendChild(block);
        }
    }
}

// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products
const products = [
    new Product(1, "Laptop Dell XPS", 40000000, 10, "Electronics", true),
    new Product(2, "iPhone 15 Pro", 32000000, 5, "Electronics", true),
    new Product(3, "Wireless Mouse", 500000, 50, "Accessories", true),
    new Product(4, "Mechanical Keyboard", 2500000, 0, "Accessories", false),
    new Product(5, "Samsung Monitor", 7000000, 8, "Electronics", true),
    new Product(6, "USB-C Cable", 300000, 100, "Accessories", true)
];

logResult("Câu 2: Danh sách sản phẩm ban đầu", products);

// Câu 3: Tạo mảng mới chỉ chứa: name, price
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
logResult("Câu 3: Mảng chỉ chứa name và price", nameAndPrice);

// Câu 4: Lọc ra các sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
logResult("Câu 4: Sản phẩm còn hàng (quantity > 0)", inStockProducts);

// Câu 5: Kiểm tra có sản phẩm giá trên 30.000.000
const hasExpensiveProduct = products.some(p => p.price > 30000000);
logResult("Câu 5: Có sản phẩm giá trên 30.000.000 không?", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả sản phẩm 'Accessories' có đang bán không
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
logResult("Câu 6: Tất cả sản phẩm 'Accessories' đều đang bán?", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
logResult("Câu 7: Tổng giá trị kho hàng", totalInventoryValue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));

// Câu 8: Duyệt mảng bằng for...of
let output8 = "";
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    output8 += `${p.name} - ${p.category} - ${status}\n`;
}
logResult("Câu 8: Duyệt mảng bằng for...of", output8.trim());

// Câu 9: Duyệt thuộc tính bằng for...in
let output9 = "";
if (products.length > 0) {
    const firstProduct = products[0];
    for (const key in firstProduct) {
        output9 += `${key}: ${firstProduct[key]}\n`;
    }
}
logResult("Câu 9: Duyệt thuộc tính sản phẩm đầu tiên bằng for...in", output9.trim());

// Câu 10: Tên các sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
logResult("Câu 10: Tên sản phẩm đang bán và còn hàng", sellingAndInStockNames);
