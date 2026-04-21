function loadSection(section) {
    let content = document.getElementById("main-content");

    // Update active class in sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick') === `loadSection('${section}')`) {
            item.classList.add('active');
        }
    });

    if (section === "dashboard") {
        content.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <div class="card-dark">
                        <h6>Total Members</h6>
                        <h3>1,245</h3>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-dark">
                        <h6>Active Plans</h6>
                        <h3>856</h3>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-dark">
                        <h6>Revenue</h6>
                        <h3>$24,500</h3>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card-dark">
                        <h6>Store Sales</h6>
                        <h3>342</h3>
                    </div>
                </div>
            </div>
        `;
    }

    if (section === "members") {
        content.innerHTML = `
            <div class="card-dark">
                <h4 style="color: white;">Manage Members</h4>
                <table class="table-dark-custom">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>john@mail.com</td>
                        <td style="color: lightgreen;">Active</td>
                        <td><button style="background: orange; border: none; padding: 5px;" cursor: pointer;" onmouseover="this.style.background='#e37d10'" onmouseout="this.style.background='orange'"><i class="fas fa-edit"></i> Edit</button></td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>jane@mail.com</td>
                        <td style="color: red;">Expired</td>
                        <td><button style="background: orange; border: none; padding: 5px;" cursor: pointer;" onmouseover="this.style.background='#e37d10'" onmouseout="this.style.background='orange'"><i class="fas fa-edit"></i> Edit</button></td>
                    </tr>
                </table>
            </div>
        `;
    }

    if (section === "plans") {
        content.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <div class="card-dark" style="text-align: center;">
                        <h4 style="color: white;">Basic</h4>
                        <h2 style="color: orange;">$20/month</h2>
                        <ul style="color: #ccc; list-style-type: none; padding: 0;">
                            <li>Gym Access</li>
                            <li>Standard Equipment</li>
                        </ul>
                        <button style="background: orange; border: none; padding: 10px; width: 100%; margin-top: 24.5px; cursor: pointer;" onmouseover="this.style.background='#e37d10'" onmouseout="this.style.background='orange'"><i class="fas fa-edit"></i> Edit Plan</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-dark" style="text-align: center;">
                        <h4 style="color: white;">Pro</h4>
                        <h2 style="color: orange;">$40/month</h2>
                        <ul style="color: #ccc; list-style-type: none; padding: 0;">
                            <li>Gym Access</li>
                            <li>All Equipment</li>
                            <li>1 PT Session/mo</li>
                        </ul>
                        <button style="background: orange; border: none; padding: 10px; width: 100%; cursor: pointer;" onmouseover="this.style.background='#e37d10'" onmouseout="this.style.background='orange'"><i class="fas fa-edit"></i> Edit Plan</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-dark" style="text-align: center;">
                        <h4 style="color: white;">Premium</h4>
                        <h2 style="color: orange;">$60/month</h2>
                        <ul style="color: #ccc; list-style-type: none; padding: 0;">
                            <li>24/7 Access</li>
                            <li>All Equipment</li>
                            <li>Unlimited PT</li>
                        </ul>
                        <button style="background: orange; border: none; padding: 10px; width: 100%; cursor: pointer;" onmouseover="this.style.background='#e37d10'" onmouseout="this.style.background='orange'"><i class="fas fa-edit"></i> Edit Plan</button>
                    </div>
                </div>
            </div>
        `;
    }

    if (section === "products") {
        const productsData = [
            {name: "Optimum Nutrition Gold Standard Whey", price: "$90.00", img: "../images/optimum1.jpg", stock: 42, cat: "Protein"},
            {name: "Dymatize ISO100 Whey Protein", price: "$85.00", img: "../images/dymatize1.webp", stock: 15, cat: "Protein"},
            {name: "MuscleTech Nitro-Tech Whey", price: "$65.00", img: "../images/muscletech1.webp", stock: 23, cat: "Protein"},
            {name: "MyProtein Impact Whey", price: "$55.00", img: "../images/myprotein1.jpg", stock: 8, cat: "Protein"},
            {name: "BSN Syntha-6 Protein", price: "$70.00", img: "../images/syntha1.jpg", stock: 12, cat: "Protein"},
            {name: "Rule One R1 Protein", price: "$75.00", img: "../images/rule1.jpg", stock: 30, cat: "Protein"},
            {name: "Kevin Levrone Gold Whey", price: "$80.00", img: "../images/kevinp1.webp", stock: 5, cat: "Protein"},
            {name: "Applied Nutrition Critical Whey", price: "$60.00", img: "../images/applied1.jpg", stock: 19, cat: "Protein"},
            {name: "Optimum Nutrition Micronized Creatine", price: "$40.00", img: "../images/optimumc1.jpg", stock: 55, cat: "Creatine"},
            {name: "MuscleTech Platinum Creatine", price: "$35.00", img: "../images/muscletechc1.jpg", stock: 20, cat: "Creatine"},
            {name: "Kevin Levrone Gold Creatine", price: "$45.00", img: "../images/kevinc1.jpg", stock: 14, cat: "Creatine"},
            {name: "Optimum Nutrition Opti-Men", price: "$50.00", img: "../images/optimumv1.jpg", stock: 40, cat: "Vitamins"},
            {name: "Centrum Adult Multivitamin", price: "$45.00", img: "../images/centrum1.jpg", stock: 60, cat: "Vitamins"},
            {name: "NOW Foods Vitamin D3", price: "$35.00", img: "../images/now1.jpg", stock: 25, cat: "Vitamins"},
            {name: "Nature Made Vitamin C", price: "$30.00", img: "../images/nature1.jpg", stock: 32, cat: "Vitamins"},
            {name: "Scivation Xtend BCAA Powder", price: "$50.00", img: "../images/xtend1.jpg", stock: 18, cat: "BCAAs"},
            {name: "Optimum Nutrition Serious Mass Gainer", price: "$60.00", img: "../images/optimummg1.jpg", stock: 10, cat: "Mass Gainer"},
            {name: "Animal Pak Multivitamin Pack", price: "$60.00", img: "../images/pak1.jpg", stock: 22, cat: "Vitamins"},
            {name: "NOW Foods Omega-3 Fish Oil", price: "$40.00", img: "../images/nowo1.jpg", stock: 48, cat: "Vitamins"},
            {name: "Universal Nutrition ZMA", price: "$50.00", img: "../images/zma.jpg", stock: 16, cat: "Vitamins"}
        ];

        let productsHTML = productsData.map(p => `
            <div class="col-md-3">
                <div class="card-product" style="text-align: center;">
                    <img src="${p.img}" alt="${p.name}" style="max-height: 100px;" onerror="this.src='https://via.placeholder.com/100?text=Product'">
                    <h5 style="color: orange; margin-top: 10px;">${p.name}</h5>
                    <p style="color: #ccc; font-size: 12px;">${p.cat}</p>
                    <p style="color: white; font-weight: bold;">Price: ${p.price}</p>
                    <p style="color: white;">Stock: ${p.stock}</p>
                </div>
            </div>
        `).join('');

        content.innerHTML = `
            <div class="card-dark">
                <h4 style="color: white; display: inline-block;">Store Products</h4>
                <button style="background: orange; border: none; padding: 5px 10px; float: right; margin-left: 10px;cursor: pointer;" onmouseover="this.style.background='#e37d10'" onmouseout="this.style.background='orange'"><i class="fas fa-edit"></i> Edit Products</button>
                <button style="background: orange; border: none; padding: 5px 10px; float: right;cursor: pointer;" onmouseover="this.style.background='#e37d10'" onmouseout="this.style.background='orange' "><i class="fas fa-plus"></i> Add Product</button>
                <div style="clear: both; margin-bottom: 20px;"></div>
                <div class="row">
                    ${productsHTML}
                </div>
            </div>
        `;
    }
}

loadSection("dashboard");